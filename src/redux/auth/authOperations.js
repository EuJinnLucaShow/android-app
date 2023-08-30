import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';

import { auth } from '../../../FirebaseConfig';
import { authSlice } from './authReducer';

const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;

export const authSignUpUser =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      await updateProfile(user, { displayName: login });

      const { uid, displayName } = user;

      dispatch(
        updateUserProfile({
          userId: uid,
          login: displayName,
          email,
        })
      );
    } catch (error) {
      console.log('error: ', error);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    console.log('credential: ', email, password);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log('error: ', error);
    }
  };

export const authStateChangeUser = () => async dispatch => {
  await onAuthStateChanged(auth, user => {
    try {
      if (user) {
        const userUpdateProfile = {
          userId: user.uid,
          login: user.displayName,
          email: user.email,
        };

        dispatch(authStateChange({ stateChange: true }));
        dispatch(updateUserProfile(userUpdateProfile));
      }
    } catch (error) {
      signOut(auth);
      dispatch(authSignOut());
      throw error;
    }
  });
};

export const authSignOutUser = () => async (dispatch, getState) => {
  try {
    await signOut(auth);
    dispatch(authSignOut());
  } catch (error) {
    console.log('error: ', error);
  }
};
