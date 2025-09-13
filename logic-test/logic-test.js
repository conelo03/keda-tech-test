// Q1
function sortDesc(arr) {
  let result = arr.slice()
  let n = result.length
  
  for (let i = 0; i < n - 1; i++) {
    let tempIndex = i

    for (let j = i + 1; j < n; j++) {
      if (result[j] > result[tempIndex]) {
        tempIndex = j
      }
    }

    if (tempIndex !== i) {
      let temp = result[i]
      result[i] = result[tempIndex]
      result[tempIndex] = temp
    }
  }

  return result
}

console.log('=Q1=')
const inputQ1 = [1, 2, 4, 3, 5, 3, 2, 1]
const outputQ1 = sortDesc(inputQ1)
console.log(outputQ1);

// Q2
function maxSum(arr, num) {
  if (num > arr.length) {
    return null
  }
  
  let max = 0
  let temp = 0
    
  for (let i = 0; i < num; i++) {
    max += arr[i]
  }
  
  temp = max
    
  for (let i = num; i < arr.length; i++) {
    temp = temp + arr[i] - arr[i - num]
    max = Math.max(max, temp)
  }
    
  return max
}

const inputQ2 = {
  test1: {
    array: [100, 200, 300, 400],
    num: 2,
  },
  test2: {
    array: [1, 4, 2, 10, 23, 3, 1, 0, 20],
    num: 4,
  },
  test3: {
    array: [-3, 4, 0, -2, 6, -1],
    num:2,
  }
}

console.log('=Q2=')
for (let key in inputQ2) {
  const outputQ2 = maxSum(inputQ2[key].array, inputQ2[key].num);
  console.log(outputQ2);
}

// Q3
function sumEvenNums(obj) {
  let sum = 0
  for (let key in obj) {
    const value = obj[key]
    
    if (typeof value === 'number' && value % 2 === 0) {
      sum = sum + value
    } else if (typeof value === 'object' && value !== null) {
      sum = sum + sumEvenNums(value)
    }
  }
  
  return sum
}

const inputQ3 = {
  test1: {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  },
  test2: {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 4}, ee: 'car'}
  }
}

console.log('=Q3=')
for (let key in inputQ3) {
  const outputQ3 = sumEvenNums(inputQ3[key]);
  console.log(outputQ3);
}