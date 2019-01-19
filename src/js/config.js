import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyBwwTNFBkv-1wY-PgZ_8sC4J1PjlU_DVw0",
  authDomain: "portafolio-pablo.firebaseapp.com",
  databaseURL: "https://portafolio-pablo.firebaseio.com",
  projectId: "portafolio-pablo",
  storageBucket: "portafolio-pablo.appspot.com",
  messagingSenderId: "366349344738"
}

const init = () => firebase.initializeApp(config);

init();
