const array = [1, 1, 1, 2, 3, 4, 5, 4, 3, 2];
// how many times copied
function count(arr, target) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (target == arr[i]) {
      res++;
    }
  }
  console.log(res);
}

count(array, 4);
