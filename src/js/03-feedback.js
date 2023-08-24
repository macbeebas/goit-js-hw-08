import throttle from 'lodash.throttle';

const inputValue = {};
const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']");
const formSubmit = document.querySelector('.feedback-form');

if (localStorage.getItem('feedback-form-state') === null) {
  inputValue.email = '';
  inputValue.message = '';
  localStorage.setItem('feedback-form-state', JSON.stringify(inputValue));
} else {
  const currentValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  inputValue.email = currentValue.email;
  emailInput.value = inputValue.email;
  inputValue.message = currentValue.message;
  messageInput.value = inputValue.message;
}

formSubmit.addEventListener(
  'input',
  throttle(formEvent => {
    if (formEvent.target === emailInput) {
      inputValue.email = formEvent.target.value;
    } else {
      inputValue.message = formEvent.target.value;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(inputValue));
  }, 500)
);

formSubmit.addEventListener('submit', event => {
  event.preventDefault();
  const localStorageValue = localStorage.getItem('feedback-form-state');
  console.log(localStorageValue);
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
});
