let arr = [1, 2, 3, 4, 5];
function sum(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans += arr[i];
  }
  return ans;
}

let ans = sum(arr);

console.log(ans);
