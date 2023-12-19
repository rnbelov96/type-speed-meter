import { isMobilePhone } from 'validator';
import isNumbersRepeat from './is-numbers-repeat';

export default form => {
  const nameInputEl = form.querySelector('[data-input="name"]');
  const phoneInputEl = form.querySelector('[data-input="phone"]');
  const fileInputEl = form.querySelector('[data-input="file"]');

  let isOk = true;

  if (nameInputEl && nameInputEl.value === '') {
    nameInputEl.classList.add('errored');
    isOk = false;
  }
  if (phoneInputEl && phoneInputEl.value === '') {
    phoneInputEl.classList.add('errored');
    isOk = false;
  }
  if (fileInputEl && fileInputEl.files.length === 0) {
    fileInputEl.classList.add('errored');
  }

  if (
    phoneInputEl
    && phoneInputEl.value !== ''
    && (!isMobilePhone(
      `${phoneInputEl.value.replace(/\(|\)|-|_|\s/g, '')}`,
      'ru-RU',
    ) || isNumbersRepeat(phoneInputEl))
  ) {
    phoneInputEl.classList.add('errored');
    isOk = false;
  }

  return isOk;
};
