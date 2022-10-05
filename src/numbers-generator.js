export const simpleNumbersGenerator = (range) => {

  let firstArr = [];
  let dublicateArr = [];
  for (let i = 1; i <= range; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j < i) {
        break;
      } else if (j === i) {
        firstArr.push(i)
      }
    }
  }

  dublicateArr = firstArr.slice();

  return ([...firstArr, ...dublicateArr].sort(() => Math.random() - 0.5));
};
