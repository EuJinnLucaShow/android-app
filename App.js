import React, { useCallback, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'; // Import the Font module
import { store } from './src/redux/store';
import Main from './src/components/Main';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Roboto: require('./src/assets/fonts/Roboto-Regular.ttf'),
          'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
          'Roboto-Black': require('./src/assets/fonts/Roboto-Black.ttf'),
        });
        // Other asynchronous operations can be added here
      } catch (error) {
        console.warn('Error loading assets:', error);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  });

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <Main onLayout={onLayoutRootView} />
    </Provider>
  );
}
