/* ***** firebase ***** */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import './js/config';

/* ***** estilos ***** */
import styles from  './scss/main.scss';

/* ***** Funciones ***** */

import toggleNav from './js/function';

/* ***** Rutas ***** */
import tplHome from './html/home.tpl.html';
import tplAbout from './html/about.tpl.html';
import tplService from './html/service.tpl.html';
import tplContact from './html/contact.tpl.html';
import tplLogin from './html/login.tpl.html';
import tplAdmin from './html/admin.tpl.html';

/* ***** programacion ***** */
const d = document;
const main = d.querySelector('.Main');
const footerYear = d.querySelector('.Footer-year');

footerYear.textContent = new Date().getFullYear();

toggleNav();

d.addEventListener('DOMContentLoaded', e => {
  main.innerHTML = tplHome;
});

d.addEventListener('click', e => {
  if (e.target.matches('a[href="#"]')) {
    e.preventDefault();
  }

  if (e.target.matches('#home')) {
    main.innerHTML = tplHome;
  } else if (e.target.matches('#about')) {
    main.innerHTML = tplAbout;
  } else if (e.target.matches('#service')) {
    main.innerHTML = tplService;
  } else if (e.target.matches('#contact')) {
    main.innerHTML = tplContact;
  } else if (e.target.matches('#login')) {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        main.innerHTML = tplAdmin;
      } else {
        main.innerHTML = tplLogin;
      }
    });
  }
});

