import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBe9QUzhoIEVFB69Rqt8mMbjUwRxjO9KKg',
  authDomain: 'web-app-b581f.firebaseapp.com',
  projectId: 'web-app-b581f',
  storageBucket: 'web-app-b581f.appspot.com',
  messagingSenderId: '868623960717',
  appId: '1:868623960717:web:e1dfe1b9f383dc100db0c4',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
