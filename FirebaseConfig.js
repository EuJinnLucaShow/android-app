import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBe9QUzhoIEVFB69Rqt8mMbjUwRxjO9KKg',
  authDomain: 'web-app-b581f.firebaseapp.com',
  projectId: 'web-app-b581f',
  storageBucket: 'web-app-b581f.appspot.com',
  messagingSenderId: '868623960717',
  appId: '1:868623960717:web:e1dfe1b9f383dc100db0c4',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);
