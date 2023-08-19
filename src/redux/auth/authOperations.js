import db from '../../firebase/config';
import { authSlice } from './authReducer';

export const authSingUp =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await db
        .auth()
        .createUserWithEmailAndPassword(email, password);
      dispatch(
        authSlice.actions.updateUserProfile({ login, userId: user.uid })
      );
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

const authSingOut = () => async (dispatch, getState) => {};
