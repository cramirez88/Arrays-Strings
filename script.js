// Arrays and Strings
// Return max value in array
// const maxValue = (nums) => {
//   let max = -Infinity
//   for (let i  = 0; i < nums.length; i++){
//     if(nums[i] > max){
//       max = nums[i]
//     }
//   }
//   return max
// };


// Is prime

const isPrime = (n) => {
  if (n < 2) return false
  for (let i = 2; i < n - 1; i++){
    if (n % i === 0){
      return false
    }
  }
  return true
};
