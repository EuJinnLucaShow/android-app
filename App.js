import { useEffect } from 'react';

import { Provider, useSelector } from 'react-redux';

import Main from './src/components/main';
import { store } from './src/redux/store';

export default function App() {
  const state = useSelector(state => state);

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
