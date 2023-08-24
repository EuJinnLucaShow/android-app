import db from '../../../FirebaseConfig';
import { authSlice } from './authReducer';

const { updateUserProfile, authStateChangeUser, authSingOut } =
  authSlice.actions;

export const authSingUp =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      await db.auth().createUserWithEmailAndPassword(email, password);
      const user = await db.auth().currentUser;

      await user.updateProfile({ displayName: login });

      const { uid, displayName } = await db.auth().currentUser;

      const userUpdateProfile = {
        userId: uid,
        login: displayName,
      };

      dispatch(updateUserProfile(userUpdateProfile));
    } catch (error) {
      console.log(error.message);
    }
  };

export const authSingIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await db.auth().signInWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

export const authStateChange = () => async (dispatch, getState) => {
  await db.auth().onAuthStateChanged(user => {
    console.log(user);
    if (user) {
      const userUpdateProfile = {
        userId: user.uid,
        login: user.displayName,
      };
      dispatch(updateUserProfile(userUpdateProfile));
      dispatch(authStateChangeUser({ stateChange: true }));
    } else {
      console.log('user is not logged in');
    }
  });
};

export const authSingOutUser = () => async (dispatch, getState) => {
  await db.auth().signOut();
  dispatch(authSingOut());
};
