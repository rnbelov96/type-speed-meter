const getRandomNumberBetweenRange = (min, max, exept) => {
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number === exept ? getRandomNumberBetweenRange(min, max, exept) : number;
};

export default getRandomNumberBetweenRange;
