import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name="delay"]');
const radioFullfilled = document.querySelector('input[value="fulfilled"]');
const radioRejected = document.querySelector('input[value="rejected"]');
const btnSubmit = document.querySelector('button[type="submit"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delayValue = Number(inputDelay.value);
  console.log(delayValue);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioFullfilled.checked) {
        resolve(`✅ Fulfilled promise in ${delayValue}ms`);
      } else {
        reject(`❌ Rejected promise in ${delayValue}ms`);
      }
    }, delayValue);
  });
  promise
    .then(message => iziToast.success({ message, position: 'topRight' }))
    .catch(error => iziToast.error({ message: error, position: 'topRight' }))
    .finally(() => {
      form.reset();
    });
});
