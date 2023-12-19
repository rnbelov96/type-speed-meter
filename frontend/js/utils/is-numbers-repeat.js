export default input => {
  const numbers = input.value.match(/\d+/g)?.join('');

  if (!numbers) {
    return false;
  }

  const checkForRepeat = (startIndex, originalString, charToCheck) => {
    let repeatCount = 1;
    for (let i = startIndex + 1; i < originalString.length; i += 1) {
      if (originalString.charAt(i) === charToCheck) {
        repeatCount += 1;
      } else {
        return repeatCount;
      }
    }
    return repeatCount;
  };
  for (let i = 0; i < numbers.length; i += 1) {
    const numberOfRepeats = checkForRepeat(i, numbers, numbers.charAt(i));
    if (numberOfRepeats >= 5) {
      return true;
    }
  }

  return false;
};
