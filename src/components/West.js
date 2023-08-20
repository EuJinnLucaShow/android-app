import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { UseRoute } from '../../router';
import db from '../firebase/config';

const Main = () => {
  const [user, setUser] = useState(null);
  const state = useSelector(state => state);
  console.log(state);
  db.auth().onAuthStateChanged(user => setUser(user));
  const routing = UseRoute(user);
  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
