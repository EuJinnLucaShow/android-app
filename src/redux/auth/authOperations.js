import db from '../../../firebase/config';

export const authSingUp =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await db
        .auth()
        .createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

const authSingIn = () => async (dispatch, getState) => {};

const authSingOut = () => async (dispatch, getState) => {};
