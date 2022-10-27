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

// const isPrime = (n) => {
//   if (n < 2) return false
//   for (let i = 2; i < n - 1; i++){
//     if (n % i === 0){
//       return false
//     }
//   }
//   return true
// };

const compress = (s) => {
  //   two pointers
  let compress = ''
  let i = 0;
  let j = 0;
  while (j <= s.length){
    if(s[i] === s[j]){
      j++
    }else {
      let num = j - i
      if (num === 1) {
        compress += s[i]
      } else {
        compress += num + s[i]
      }
       i = j
    }
   
  }
    return compress
  };