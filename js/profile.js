// import { userdetails } from './sign-in.js';

const mainSection = document.querySelector('#main-section');
const menuIcon = document.querySelectorAll('.menu-Icon');
const closeBtn = document.querySelector('#close-btn');
const allSections = document.querySelectorAll('.section');
// console.log(allSections);
const userName = document.querySelectorAll('.userName');
const firstName = document.querySelector('#firstName');
const editName = document.querySelector('.edit');

const resetInput = document.querySelector('#reset');
const resetContainer = document.querySelector('.checkReset');
const closeReset = document.querySelector('.cls');
const resetBtn = document.querySelector('.btn-s');

const fromLocal = JSON.parse(localStorage.getItem('user1'));

const fName = function () {
  firstName.innerHTML = fromLocal.name.split(' ')[0];
};

const updateName = function () {
  [...userName].forEach((name) => (name.innerHTML = fromLocal.name));
};

window.addEventListener('load', updateName);
window.addEventListener('load', fName);
editName.addEventListener('click', () => {
  console.log('Do you want to edit');
});

const navLists = document.querySelector('.nav-lists');
console.log(navLists.children);
console.log(allSections[0].getAttribute('id'));

// SHOW AND HIDE THE menu
const showMenu = function () {
  mainSection.classList.add('nav-open');
};

const hideMenu = function () {
  mainSection.classList.remove('nav-open');
};

const showSection = function (e) {
  e.preventDefault();
  const li = e.target.closest('.nav-list');
  const id = li.firstElementChild.getAttribute('href').slice(1);
  if (id === 'sign-out') {
    location.href = 'index.html';
    return;
  }
  console.log(id);
  const section = [...allSections].find((sec) => sec.getAttribute('id') === id);
  [...allSections].forEach((sec) => {
    if (!sec.classList.contains('hide')) {
      sec.classList.add('hide');
    }
  });
  section.classList.remove('hide');
  hideMenu();
};

//set reset
const setResetName = function (e) {
  // e.preventDefault();
  const newName = resetInput.value;
  if (localStorage.getItem('user1')) {
    const user = JSON.parse(localStorage.getItem('user1'));
    user.name = newName;
    const newUser = {
      name: user.name,
      password: user.password,
    };
    localStorage.removeItem('user1');

    localStorage.setItem('user1', JSON.stringify(newUser));
    if (newName.length === 0) {
      resetInput.style.border = '1px solid rgba(240, 62, 62, 0.9)';
      setTimeout(() => {
        resetInput.style.border = 'none';
      }, 2000);
    } else {
      cancelReset();
    }
  }
};

const openReset = function () {
  resetContainer.classList.remove('hide');
};

const cancelReset = function () {
  resetContainer.classList.add('hide');
};

console.log(menuIcon);
menuIcon.forEach((icon) => icon.addEventListener('click', showMenu));
closeBtn.addEventListener('click', hideMenu);
navLists.addEventListener('click', showSection);
resetBtn.addEventListener('click', setResetName);
editName.addEventListener('click', openReset);
closeReset.addEventListener('click', cancelReset);

// window.addEventListener('load', function () {
//   this.location.href = 'index.html';
// });

// console.log(userdetails);
