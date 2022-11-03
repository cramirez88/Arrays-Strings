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


// const pairProduct = (numbers, targetProduct) => {
//   // loop through array
//   // if target product / current number iteration is in obj then return [i, obj[targetProduct[number[i]]]]
//     let obj = {}
//     for (let i = 0; i < numbers.length; i++){
//       if (targetProduct / numbers[i] in obj){
//         return [i, obj[targetProduct/numbers[i]]]
//       }
//       obj[numbers[i]] = i
//     }
//   };
  

// const intersection = (a, b) => {
//   // return elements into a new array that have the same values
//   let newArr = []
//   let setA = new Set(a)
//   for(let x of b){
//     if(setA.has(x)){
//       newArr.push(x)
//     }
//   }
//   return newArr
// };

// const fiveSort = (nums) => {
//   let i = 0
//   let j = nums.length - 1
//   while(i < j){
//     if(nums[j] === 5){
//       j--
//     }else if(nums[i] === 5){
//       [nums[i], nums[j]] = [nums[j], nums[i]]
//       i++
//     }else {
//       i++
//     }
//   }
//   return nums
// };


// const linkedListValues = (head) => {
//     // iterative approach
//     let arrayOfVals = []
//     while(head !== null){
//       arrayOfVals.push(head.val)
//       head = head.next
//     }
//     return arrayOfVals
//   };

// const sumList = (head) => {
//   //   starting at the head, I want to iterate through the linked list 
//   //   and add the value to the total sum 
//     let sum = 0;
//     while(head !== null){
//       sum += head.val
//       head = head.next
//     }
//     return sum
//   };

// const linkedListFind = (head, target) => {
//   //   iterate through the linked list: 
//   //   if the node has a value === target return true 
//   //   if not return false
//     while(head !== null){
//       if(head.val === target) return true
//       head = head.next
//     }
//     return false
//   };

// const getNodeValue = (head, index) => {
//   //   iterate through the linked list: 
//     //  keep track of index through variable
//     let currentIndex = 0
//     //   if index variable === index return val at the index
//     while(head !== null){
//       if(currentIndex === index){
//         return head.val
//       }
//       currentIndex++
//       head = head.next
//     }
//   //   otherwise, return null
//     return null
//   };


// const reverseList = (head) => {
//   let prev = null
//   while(head !== null){
//     let temp = head.next
//     head.next = prev
//     prev = head
//     head = temp
//   }
//   return prev
// };

// const zipperLists = (head1, head2) => {
//   let head = head1
//   let tail = head
//   let firstListHead = head1.next
//   let secondListHead = head2
//   let count = 0
//   while(firstListHead !== null && secondListHead !== null){
//     if(count % 2 === 0){
//       tail.next = secondListHead
//       secondListHead = secondListHead.next
//     }else {
//       tail.next = firstListHead
//       firstListHead = firstListHead.next
//     }
//     count++
//     tail = tail.next
//   }
//   if(firstListHead !== null) tail.next = firstListHead
//   if(secondListHead !== null) tail.next = secondListHead
//   return head
// };

// const mergeLists = (head1, head2) => {
//   let dummy = new Node(null)
//   let tail = dummy
//   let firstList = head1
//   let secondList = head2
//   while(firstList !== null && secondList !== null){
//     if(firstList.val < secondList.val){
//       tail.next = firstList
//       firstList = firstList.next
//     }else {
//       tail.next = secondList
//       secondList = secondList.next
//     }
//     tail = tail.next
//   }
//   if(firstList !== null) tail.next = firstList
//   if(secondList !== null) tail.next = secondList
//   return dummy.next
// };

// const isUnivalueList = (head) => {
//   let current = head
//   while(current !== null){
//     if(head.val !== current.val) return false
//     current = current.next
//   }
//   return true
// };

const longestStreak = (head) => {
  let maxStreak = 0
  let currentStreak = 0
  let current = head
  let prev = null
  while(current !== null){
    if(current.val === prev){
      currentStreak++
    }else {
      currentStreak = 1
    }
    if(currentStreak > maxStreak){
      maxStreak = currentStreak
    }
    prev = current.val
    current = current.next
  }
  return maxStreak
};

