const array = [1, 1, 1, 2, 3, 4, 5, 4, 3, 2];

function Sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
}

Sum(array);
// console.log(sum);
