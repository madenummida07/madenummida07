const array = ["banana", "apple", "orange", "grape", "watermelon"];
// print more than 5 letters
function Greater(arr, num) {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) arr2.push(arr[i]);
  }
  console.log(arr2);
}

Greater(array, 3);
