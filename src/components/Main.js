import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { UseRoute } from '../../router';
import { authStateChange } from '../redux/auth/authOperations';

const Main = () => {
  const { stateChange } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChange());
  }, []);

  const routing = UseRoute(stateChange);
  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
