// 1. Find the Largest element in an array

function findLargest(arr){
    let max  = arr[0]
    for (i=1; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i]
        }
    }
    return max
}

// console.log(findLargest([3, 3, 6, 1]))

// 2. Find Second Smallest and Second Largest Element in an array

function secondSmallest(arr){
    let firstSmall = Infinity;
    let secondSmallest = Infinity

    for(i=0; i<arr.length; i++){
        if(arr[i] < firstSmall){
            secondSmallest = firstSmall
            firstSmall = arr[i];
        }else if(arr[i] < secondSmallest && firstSmall != arr[i]){
            secondSmallest = arr[i]
        }
    }
    return secondSmallest
}

// console.log(secondSmallest([1,2,4,7,7,5]))

// 3. Check if an Array is Sorted

function isSorted(arr){
    isSorted = true
    for(i= 0; i<arr.length-1; i++){
        if(arr[i]>arr[i+1]){
            isSorted = false
            break
        }
    }

    return isSorted
}

// console.log(isSorted([1,2,3,4,5]))

//4. Remove Duplicates in-place from Sorted Array

function removeDuplicate(arr){
    let i = 0;
    let j = 1
    while(j <arr.length)
    {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
          }
          j++
    }
    while(i <arr.length-1){
        arr[i+1] ="_"
        i++
    }
}

// console.log(removeDuplicate([1,2,2,2,3,3]))

// 5. Left Rotate the Array by One

function leftRotateByOne(arr){
    let first = arr[0];
    for(i=0; i<arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length -1 ] = first;
    return arr
}

// console.log(leftRotateByOne([1,2,3,4,5]))

// 6. Rotate array by K elements
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function rotateArrayByK(arr, k){
    let n = arr.length;
    k = k % n;
    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    
    return arr;
}

// console.log(rotateArrayByK([1,2,3,4,5,6,7], 5))

// 7. Move all Zeros to the end of the array

function moveAllZero (arr){

    let i = 0;
    let j = 0
    while(j <arr.length)
    {
        if (arr[j] != 0) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
          j++
    }
    return arr

}

// console.log(moveAllZero([1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]));


// 8. Union of Two Sorted Arrays

function unionSortedArrays(arr1, arr2){
    let i = 0;
    let j = 0;
    const union = []

    while(i< arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]) {
            if(!union.length || union[union.length -1] != arr1[i]){
                union.push(arr1[i]);
            }
            i++;
            j++
        }else if(arr1[i] < arr2[j]){
            if(!union.length || union[union.length -1] != arr1[i]){
                union.push(arr1[i]);
            }
            i++
        }else{
            if(!union.length || union[union.length -1] != arr2[j]){
                union.push(arr2[i]);
        }
        j++
    }

    }

    while(i<arr1.length){
        if(!union.length || union[union.length -1] != arr1[i]){
            union.push(arr1[i])
        }
        i++
    }
    while(j<arr2.length){
        if(!union.length || union[union.length -1] != arr2[j]){
            union.push(arr2[j])
        }
        j++
    }
    return union
    }



// console.log(unionSortedArrays([1,2,3,4,5,6,7,8,9,10],[2,3,4,4,5,11,12]))

// 9. Find the missing number in an array

function findMissingNo(num ,arr){
    let totalOfValue = arr.reduce((acc, value)=> acc+value);
    let reduce = (num*(num + 1))/2
    return reduce - totalOfValue
}

// console.log(findMissingNo (5, [1,2,4,5]))

// 10. Count Maximum Consecutive One's in the array

function maxConsecutive(arr){

    // my first approach

    // let i = 0
    // let j = 0
    // let max = 0;
    // while(j < arr.length){
    //     if(arr[i]== arr[j]){
    //         console.log('checking', i, j)
    //         max = Math.max(max, j-i+1)
    //         j++
    //     }else{
    //         j++
    //         i=j
    //     }
    // }
    // return max

    let max = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++;
            max = Math.max(max, count);
        } else {
            count = 0; 
    }
    }
    return max;
    
}

// console.log(maxConsecutive([1, 0, 1, 1, 0, 1]))

// 11. Find the number that appears once, and the other numbers twice

function noAppearsOnce(arr){
// hashmap approach

 const n = arr.length;
//  const hashmap = new Map();
//  for (let i = 0; i < n; i++) {
//      const num = arr[i];
//      hashmap.set(num, (hashmap.get(num) || 0) + 1);
//  }

//  for (const [num, count] of hashmap) {
//      if (count === 1) {
//          return num;
//      }
//  }
//  return -1;

// xor
let xor
for (let i = 0; i < n; i++) {
         xor = xor ^ arr[i]
     }

     return xor
}

console.log(noAppearsOnce([2,2,1]))