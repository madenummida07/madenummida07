const array = [1, 1, 1, 2, 3, 4, 5, 4, 3, 2];
// remove duplicates
function Duplicates(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}

Duplicates(array);
