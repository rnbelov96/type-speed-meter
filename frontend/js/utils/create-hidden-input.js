export default ({ name, value }) => {
  const hiddenInputEl = document.createElement('input');
  hiddenInputEl.setAttribute('type', 'text');
  hiddenInputEl.setAttribute('hidden', true);
  hiddenInputEl.setAttribute('name', name);
  hiddenInputEl.value = value;

  return hiddenInputEl;
};
