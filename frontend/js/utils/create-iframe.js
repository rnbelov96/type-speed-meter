function generateURL(id) {
  const query = '?rel=0&showinfo=0';

  return `https://www.youtube.com/embed/${id}${query}`;
}

export default id => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
};
