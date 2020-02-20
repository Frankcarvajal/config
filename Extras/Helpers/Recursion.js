/*1. Write a JavaScript program to calculate the factorial of a number.
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
*/

function factorial(n) {
  // Calculate the factorial of a number
  if (n === 1) { return 1; }
  return n * factorial(n -1)
}

// console.log('factorial(5) :', factorial(5)) // 120

/* 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
In mathematics, gcd of two or more integers, which are not all zero, is the largest positive integer that divides each of the integers. For example, the gcd of 8 and 12 is 4.
*/

function gcd(a, b) {
  if (!b) { return a }
  return gcd(b, a % b)
}

// console.log(gcd(2154, 458))

/*3. Write a JavaScript program to get the integers inside of range (x, y). Go to the editor
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]
*/

function range(x, y) {
  if (y - x === 2) { return [x + 1] }
  else {
    let list = range(x, y - 1)
    list.push(y - 1)
    return list
  }
}

// console.log(range(2,9))

/*4. Write a JavaScript program to compute the sum of an array of integers.
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21
*/

function arrayIntSum(arr) {
  if (arr.length === 1) { return arr[0] }
  else { return arr.pop() + arrayIntSum(arr) }
}

// console.log(arrayIntSum([1,2,3,4,5,6]))

/*5. Write a JavaScript program to compute the exponent of a number.
Note : The exponent of a number says how many times the base number is used as a factor.
8 powerof2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent. */

function power(base, exponent) {
  if (exponent === 0) { return 1 }
  return base * power(base, exponent - 1)
}

// console.log(power(8, 2))

/*6. Write a JavaScript program to get the first n Fibonacci numbers.
Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two
*/

function fibonacci (n) {
  if (n === 1) { return [0, 1]}
  else {
    let s = fibonacci(n - 1)
    s.push(s[s.length - 1] + s[s.length - 2])
    return s
  }
}

// console.log(fibonacci(8))

/* 7. Write a JavaScript program to check whether a number is even or not.*/

function evenOrOdd(n) {
  if (n < 0) { n = Math.abs(n)} // Math.abs() returns the absolute value of a number
  if (n === 0) { return 'Even' } // or return True
  if (n === 1) { return 'Odd' } // or return False
  else {
    n = n - 2
    return evenOrOdd(n)
  }
}

// console.log(evenOrOdd(234)) // Even/True
// console.log(evenOrOdd(-45)) // Odd/False
// console.log(evenOrOdd(-45)) // Odd/False

/* 8. Write a JavaScript program for binary search.
Sample array : [0,1,2,3,4,5,6]
console.log(l.br_search(5)) will return '5'
*/

function binarySearch (arr, searchNumber) {
  return _binarySearch(0, arr.length -1, arr, searchNumber);

  function _binarySearch(l, r, arr, searchNumber) {
      const mid = Math.floor((l + r) / 2);
      const guess = arr[mid];

      // Base case
      if (guess === searchNumber) { return arr[mid] }
      // End-case the element is not in the array
      else if (l === r) { return -1 }
      else if (guess < searchNumber) { return _binarySearch(mid + 1, arr.length - 1, arr, searchNumber) }
      else if (guess > searchNumber) { return _binarySearch(l, mid - 1, arr, searchNumber) }
  }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(binarySearch(list, 10))

/* 9. Write a merge sort program in JavaScript.
Sample array : [34,7,23,32,5,62]
Sample output : [5, 7, 23, 32, 34, 62]
*/

// Merge the two arrays: left and right
function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// Merge Sort Implentation (Recursion)
function mergeSort (unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) { return unsortedArray }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

const plop = [9, 2, 8, 5, 22, 45, 3, 25, 82, 18, 54, 69]
// console.log(mergeSort(plop))


/*10. Sum all numbers */

function sumRange(n) {
  // Base Case
  if (n === 1) { return 1 }
  // Recursive call
  else { return n + sumRange(n - 1)}
}

// console.log(sumRange(3))


/*11. Check all values in an array */

function all(arr, cb) {
  var copy = copy || arr.slice()

  // Base Case
  if (copy === 0 || !copy.length) {
    return true
  } else if (cb(copy[0])) {
    copy.shift() // removes first element of the array
    return all(copy, cb)
  } else { return false }
}

const allAreStrings = all(["sir", 5, "tina", "tim", "rick"], function(item){
    return typeof item === "string";
})

// console.log('allAreStrings :', allAreStrings)


/*12. Object Search Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.*/

const nestedObj = {
  data: {
    evaluation: {
      type: {
        originationData: {
          appraisal: {
            type: 1004,
            appraiser: 'jan mac',
            opinionOfValue: 468000,
          }
        }
      }
    }
  }
}

function contains(obj, val) {
  for(var key in obj) {
    if(typeof obj[key] === "object") {
      return contains(obj[key], val)
    }
    if (obj[key] === val) {
      return true
    }
  }
  return false
}

// console.log(contains(nestedObj, "jan mac"))

/* 13. Parse a multi-dimensional array of integers returning the total nmber of integers stored inside */

function totalInt(arr) {
  if(arr.length === 0) { return 0 }

  let total = 0
  let first = arr.shift()

  if (Array.isArray(first)) {
    total += totalInt(first)
  } else if (Number.isInteger(first)) {
    total += 1
  }

  return total + totalInt(arr)
}

// console.log(totalInt([[[8], 6], 46, [ 2, [9, [98, ['sprite']]]],1, ['dr pepper'], [], [8, [3, 27]]])); // 10

/*14. Take in an array with any level of depth and output a single array of flattened values */

const deepFlatten = (array => (array, start = []) => array.reduce((acc, curr) => {
  return Array.isArray(curr) ? deepFlatten(curr, acc) : [...acc, curr];
}, start))();

console.log(deepFlatten([[1,2,[3, 4, [5, [6, [10, [6, [23]]]]]]],7]));
