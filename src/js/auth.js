import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyDVtw0ijc4nNJ_BvsnRxxSLLE_6eE2Ezhw",
  authDomain: "nebulosa-web.firebaseapp.com",
  databaseURL: "https://nebulosa-web.firebaseio.com",
  projectId: "nebulosa-web",
  storageBucket: "nebulosa-web.appspot.com",
  messagingSenderId: "290418144865"
}

const init = () => firebase.initializeApp(config);

init();
