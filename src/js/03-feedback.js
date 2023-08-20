let throttle = require('lodash.throttle');

const inputValue = {};
const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']");
const formSubmit = document.querySelector('.feedback-form');

if (localStorage.getItem('feedback-form-state') == null) {
  inputValue.email = '';
  inputValue.message = '';
  localStorage.setItem('feedback-form-state', JSON.stringify(inputValue));
} else {
  const currentValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  inputValue.email = currentValue.email;
  emailInput.value = currentValue.email;
  inputValue.message = currentValue.message;
  messageInput.value = currentValue.message;
}

emailInput.addEventListener('input', event => {
  inputValue.email = event.currentTarget.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(inputValue));
});

messageInput.addEventListener('input', event => {
  inputValue.message = event.currentTarget.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(inputValue));
});

formSubmit.addEventListener('submit', event => {
  event.preventDefault();
  const localStorageValue = localStorage.getItem('feedback-form-state');
  console.log(localStorageValue);
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
});
