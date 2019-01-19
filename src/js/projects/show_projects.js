/* ***** firebase ***** */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import '../config';

function figureTemplate(key, {uid, title, img}) {
  return `
    <img src="${img}" alt="${title}">
    <figcaption>
    <span>${title}</span>
    <i class="fas fa-trash" data-id="${key}" data-photo="${img}"></i>
    </figcaption>
  `
}

export default function showProjects() {
  const d = document,
    db = firebase.database(),
    projects = d.getElementById('projects');

  db.ref().child('projects').on('child_added', data => {
    let figure = d.createElement('figure');

    figure.id = data.key;
    figure.innerHTML = figureTemplate(data.key, data.val());
    projects.insertAdjacentElement('afterbegin', figure);
  })
}
