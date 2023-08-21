import db from '../../firebase/config';
import { authSlice } from './authReducer';

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

      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
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
      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
    } else {
      console.log('user is not logged in');
    }
  });
};

const authSingOut = () => async (dispatch, getState) => {};
