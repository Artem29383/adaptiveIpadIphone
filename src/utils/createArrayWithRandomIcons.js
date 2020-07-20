function randomInteger(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function createArrayWithRandomIcons(array, maxIcons) {
  const newArray = [];
  let count = 0;
  const max = array.length - 1;
  if (maxIcons > max) {
    maxIcons = max;
  }
  if (max < maxIcons) {
    maxIcons = max;
  }
  while (count < maxIcons) {
    const rand = randomInteger(0, max);
    if (newArray.indexOf(array[rand]) !== -1) {
    } else {
      newArray.push(array[rand]);
      count += 1;
    }
  }
  return newArray;
}
