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

// const compress = (s) => {
//   //   two pointers
//   let compress = ''
//   let i = 0;
//   let j = 0;
//   while (j <= s.length){
//     if(s[i] === s[j]){
//       j++
//     }else {
//       let num = j - i
//       if (num === 1) {
//         compress += s[i]
//       } else {
//         compress += num + s[i]
//       }
//        i = j
//     }
   
//   }
//     return compress
//   };


// const uncompress = (s) => {
//   let result = ''
//   let listOfNums = '0123456789'
//   let i = 0;
//   let j = 0;
//   while (j < s.length){
//     if(listOfNums.includes(s[j])){
//       j += 1
//     }else {
// //       get number
//       let number = Number(s.slice(i, j))
// //       now that i have a number, I want to repeat the character that many times
//       for (let count = 0; count < number; count+=1){
//         result += s[j]
//       }
//       j += 1
//       i = j
//     }
//   }
//   return result
// };


// const anagrams = (s1, s2) => {
//   //   two hash maps to keep track of number of times each charctaer is repeated
//     let stringOne = {}
//     for (let char of s1){
//       if(!(char in stringOne)){
//          stringOne[char] = 0
//          }
//       stringOne[char]++
//   }
//     for(let char of s2){
//       if(char in stringOne === undefined){
//         return false
//       }
//       stringOne[char] -= 1
//     }
//     for(let char in stringOne){
//       if(stringOne[char] !== 0){
//         return false
//       }
//     }
  
//   return true
//   };


// const mostFrequentChar = (s) => {
//   let count = {}
//   let max = null
//   for (let char of s){
//     if(!(char in count)){
//       count[char] = 0
//     }
//     count[char]++
//   }
//   for(let char of s){
//     if(max === null || count[char] > count[max]){
//       max = char
//     }  
//   }
//   return max
// };


const pairProduct = (numbers, targetProduct) => {
  // loop through array
  // if target product / current number iteration is in obj then return [i, obj[targetProduct[number[i]]]]
    let obj = {}
    for (let i = 0; i < numbers.length; i++){
      if (targetProduct / numbers[i] in obj){
        return [i, obj[targetProduct/numbers[i]]]
      }
      obj[numbers[i]] = i
    }
  };
  
