const btn = document.querySelector('.btn');
const account = document.querySelector('.account');
const loader = document.querySelector('.cont');

const delay = function () {
  account.classList.add('hide');
  loader.classList.remove('hide');
  setTimeout(() => {
    account.classList.remove('hide');
    loader.classList.add('hide');

    // loader.style.display = 'block';
  }, 500);
};

const showForm = function () {
  location.href = 'sign-in.html';
};
btn.addEventListener('click', showForm);
window.addEventListener('load', delay);
