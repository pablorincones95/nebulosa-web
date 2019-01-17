/* ***** Toggle nav ***** */
const toggleNav = () => {
  const d = document,
    headerBtn = d.querySelector('.Header-btn'),
    header = d.querySelector('.Header'),
    main = d.querySelector('.Main');

  headerBtn.addEventListener('click', e => {
    e.preventDefault();
    headerBtn.classList.toggle('is-active');
    header.classList.toggle('is-active');
    main.classList.toggle('is-active');
  });
}

export default toggleNav;
