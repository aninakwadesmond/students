const username = document.querySelector('#username');
const password = document.querySelector('.password');
const submit = document.querySelector('.btn-submit');
const display = document.querySelector('.eye-on');
const parentMessage = document.querySelector('.container-error');
const formContainer = document.querySelector('.container-form');
const forgetPassword = document.querySelector('.forget-password');
const parentMove = document.querySelector('.move');
const overlayContent = document.querySelector('.cl-bg');
const parentMe = document.querySelector('.me');
const account = document.querySelector('.account');
const loader = document.querySelector('.container-loader');

let user;
//GETTING INPUT DATA
const getData = function (e) {
  e.preventDefault();
  user = {
    name: username.value,
    password: password.value,
  };
  console.log(user.name, user.name.length);

  checkCredentials(user);
};

//  functions board on load
const hideShowName = function (e) {
  const parentEl = e.target.closest('.eye-on');
  console.log(parentEl.children);
  [...parentEl.children].forEach((el) => {
    const check = el.classList.contains('hide');
    if (check) {
      el.classList.remove('hide');
      //get input

      el.parentElement.parentElement.children[1].setAttribute('type', 'input');
    } else {
      el.classList.add('hide');
      el.parentElement.parentElement.children[1].setAttribute(
        'type',
        'password'
      );
    }
  });
};

const showAi = function (e) {
  e.preventDefault();
  parentMove.classList.add('center');
  // parentMe.classList.remove('hide');
  overlayContent.classList.add('overlay');
  setTimeout(removeAi, 3000);
};

const removeAi = function () {
  parentMove.classList.remove('center');
  overlayContent.classList.remove('overlay');
  // parentMe.classList.add('hide');
};
// Event handlers
display.addEventListener('click', hideShowName);
forgetPassword.addEventListener('click', showAi);

const showPassword = function (e) {
  e.preventDefault();
  const cp = e.target.value;
  password.innerHTML = cp;
};

password.addEventListener('keyup', showPassword);
// checking username
const Message = function (receiveInfo) {
  parentMessage.innerHTML = '';
  parentMessage.innerHTML = receiveInfo;

  // formContainer.style.display = 'none';
};

const removeErr = function () {
  parentMessage.innerHTML = '';
  // formContainer.style.display = '';
};

export let userdetails;

//checking login credentials
const checkCredentials = function (user) {
  if (user.name.length < 3 && user.password.length < 5) {
    Message(`<div class="error" >
      <p>
          Name must be at least 3 characters long
      </p>
    </div>`);
    setTimeout(removeErr, 1000);
  } else if (user.name.length < 3) {
    Message(`<div class="error" >
        <p>
          Name must be at least 3 characters long
        </p>
      </div>`);
    setTimeout(removeErr, 1000);
  } else if (user.password.length < 5) {
    Message(`<div class="error" >
        <p>
          Password must be at least 5 characters
        </p>
      </div>`);
    setTimeout(removeErr, 1000);
  } else {
    Message(`<div class="success" >
        <p>
          successful
          <ion-icon name="checkmark-circle-outline" class="icon"></ion-icon>
        </p>
      </div>`);
    setTimeout(removeErr, 1000);
    setTimeout(nextPage, 2000);
    localStorage.setItem('user1', JSON.stringify(user));
  }
};

const nextPage = function () {
  location.href = 'profile.html';
};

const delay = function () {
  account.classList.add('hide');
  setTimeout(() => {
    account.classList.remove('hide');
    loader.classList.add('hide');
  }, 1000);
};

window.addEventListener('load', delay);

//
submit.addEventListener('click', getData);
