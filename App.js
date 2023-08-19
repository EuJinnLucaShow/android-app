import { useCallback, useEffect, useState } from 'react';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import { UseRoute } from './router';
import { store } from './src/redux/store';
import db from './src/firebase/config';

SplashScreen.preventAutoHideAsync();

const loadFonts = () => {
  return Font.loadAsync({
    Roboto: require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Black': require('./src/assets/fonts/Roboto-Black.ttf'),
  });
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [user, setUser] = useState(null);

  db.auth().onAuthStateChanged(user => setUser(user));

  const routing = UseRoute(user);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await loadFonts();
        // await Font.loadAsync(Entypo.font);
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer onReady={onLayoutRootView}>
        {routing}
      </NavigationContainer>
    </Provider>
  );
}
