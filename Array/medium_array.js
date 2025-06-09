// 1. Two Sum : Check if a pair with given sum exists in Array

function twoSum(arr, k) {
    let map = new Map();
    let second
    for (i = 0; i < arr.length; i++) {
        rem = k - arr[i];
        if (map.has(rem)) {
            second = map.get(rem)
            break
        }
        map.set(arr[i], i)
    }
    return [i, second]
}

// console.log(twoSum([2,6,5,8,11], 14))

// 2. Sort an array of 0s, 1s and 2s

function sortLimited(arr) {
    let low = 0
    let mid = 0
    let high = arr.length - 1;
    while (mid <= high) {
        if (arr[mid] == 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
            low++
            mid++
        } else if (arr[mid] == 1) {
            mid++
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]]
            high--
        }
    }
    return arr
}

// console.log(sortLimited([2,0,2,1,1,0]))


// 3 . Find the Majority Element that occurs more than N/2 times

function majorityElement(arr) {

    // 1. hasMap

    // let map = new Map();
    // for( i=0; i<arr.length; i++){
    //     map.set(arr[i], (map.get(arr[i]) || 0)+1)
    // }
    // let majEle;
    // let high = 0
    // for(let [key, value] of map){
    //     if(value > high)
    //     {
    //         high = value
    //         majEle = key
    //     }
    // }
    // return majEle

    // 2 . Moore’s Voting Algorithm
    let candidate = null;
    let count = 0;
    for (let num of arr) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    count = 0;
    for (let num of arr) {
        if (num === candidate) {
            count++;
        }
    }

    return count > Math.floor(arr.length / 2) ? candidate : -1;

}

// console.log(majorityElement([3,2,3]));

// 4. Kadane's Algorithm : Maximum Subarray Sum in an Array

function kadaneAlgo(arr) {
    let max = 0;
    sum = arr[0]
    for (i = 1; i < arr.length; i++) {
        sum += arr[i]
        console.log(sum, max)
        sum = Math.max(sum, arr[i]);
        max = Math.max(max, sum)
    }
    return max
}


// console.log(kadaneAlgo([5,4,-1,7,8]))

// 5. Stock Buy And Sell

function stockBuyNSell(arr) {
    let j = 0;
    let max = 0;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < arr[j]) {
            j = i
        }
        max = Math.max(max, arr[i] - arr[j])
    }
    return max
}

// console.log(stockBuyNSell( [7,6,4,3,1]))

//6. Rearrange Array Elements by Sign

function rearrangeArrayElements(arr) {
    const n = nums.length;
    const result = new Array(n);
    let pos = 0;
    let neg = 1;

    for (let num of nums) {
        if (num > 0) {
            result[pos] = num;
            pos += 2;
        } else {
            result[neg] = num;
            neg += 2;
        }
    }

    return result;
}

// console.log(rearrangeArrayElements([1,2,-4,-5]))

// 7. next_permutation : find next lexicographically greater permutation

function nextPermutation(arr) {

    //  brute force

    //  const result = [];
    // if (arr.length ===1) return [arr]

    // for(let i=0; i<arr.length; i++){
    //     let current = arr[i]
    //     let rem = []
    //     for(let j=0; j<arr.length; j++){
    //         if(i!==j){
    //             rem [rem.length]= arr[j]
    //         }
    //     }
    //     let remPrm = generatePermutations(rem);

    //     for(let k=0; k<remPrm.length; k++ ){
    //         const newPerm = [];
    //         newPerm[0] = current; // 

    //         for(let l=0; l<remPrm[k].length; l++){
    //             newPerm[newPerm.length]= remPrm[k][l]
    //         }
    //         result[result.length] = newPerm
    //     }
    // }

    // return result;

    // optimize way
    let breakPoints = -1;
    for (i = (arr.length - 2); i >= 0; i--) {
        if (arr[i + 1] > arr[i]) {
            breakPoints = i;
            break
        }
    }

    if (breakPoints == -1) {
        arr.reverse();
        return arr;
    }

    for (let i = n - 1; i > breakPoints; i--) {
        if (arr[i] > arr[breakPoints]) {
            [arr[i], arr[breakPoints]] = [arr[breakPoints], arr[i]]; // swap A[i] and A[ind]
            break;
        }
    }
    arr.splice(breakPoints + 1, n - ind - 1, ...arr.slice(breakPoints + 1).reverse());

    return arr;
}

// console.log(nextPermutation([1,3,2]));

//  8. Leaders in an Array

function LeadersInArray(arr) {

    max = arr[arr.length - 1];
    let newArr = []
    newArr[0] = max
    for (i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > max) {
            newArr.push(arr[i])
            max = arr[i]
        }
    }
    return newArr

}

// console.log(LeadersInArray([4, 7, 1, 0]))

// 9. Longest Consecutive Sequence in an Array

function longestConsecutiveSequence(arr) {

    let sorted = new Set(arr.sort((b, a) => b - a))

    let longest = 1
    for (let i of sorted) {
        if (!sorted.has(i - 1)) {
            let cnt = 1
            let x = i
            while (sorted.has(x + 1)) {
                x = x + 1;
                cnt = cnt + 1
            }
            longest = Math.max(longest, cnt)
        }
    }
    return longest

}

// console.log(longestConsecutiveSequence([100, 200, 1, 3, 2, 4]))

// 10. Set Matrix Zero

//brute force
/*
{
 function markRow(arr, n, m ,i){
     for(let j=0; j < m; j++){
         if(arr[i][j] !== 0){
             arr[i][j] = -1;
            }
        }
}

function markCol(arr, n, m ,j){
    for(let i=0; i< n; i++){
        if(arr[i][j] !== 0){
            arr[i][j] = -1; 
        }
    }
}
function setMatrixZero(arr){
    let n = arr.length;
    let m = arr[0].length
    for(let i=0; i<n; i++){
        for(let j=0; j< m; j++){
           if(arr[i][j]==0){
            markRow(arr, n, m, i);
            markCol(arr, n, m, j)
           }
        }
    }

     for(let i=0; i<n; i++){
        for(let j=0; j< m; j++){
           if(arr[i][j]== -1){
           arr[i][j] = 0
           }
        }
    }
    return arr
}
} 
*/

// better approach
/*
function setMatrixZero(arr){
    let n = arr.length;
    let m = arr[0].length

    let rowInx = Array(n).fill(0);
    let colInx = Array(n).fill(0);
    for(let i=0; i<n; i++){
        for(let j=0; j< m; j++){
           if(arr[i][j]==0){
                rowInx[i] = 1;
                colInx[j] = 1;
           }
        }
    }

     for(let i=0; i<n; i++){
        for(let j=0; j< m; j++){
            if(rowInx[i] || colInx[j]){
                arr[i][j]=0
            }
        }
    }
    return arr

}
*/

// optimize way
function setMatrixZero(arr) {
    let n = arr.length;
    let m = arr[0].length
    let col0 = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[i][j] == 0) {
                arr[i][0] = 0
                if (j !== 0) {
                    arr[0][j] = 0
                } else {
                    col0 = 0
                }
            }
        }
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (arr[0][j] == 0 || arr[i][0] == 0) {
                arr[i][j] = 0
            }
        }
    }
    if (arr[0][0] === 0) {
        for (let j = 0; j < m; j++) {
            arr[0][j] = 0;
        }
    }
    if (col0 === 0) {
        for (let i = 0; i < n; i++) {
            arr[i][0] = 0;
        }
    }

    return arr

}
// console.log(setMatrixZero([[1,1,1],[1,0,1],[1,1,0]]))

// 11. Rotate Image by 90 degree

function rotateImage90(arr) {

    // brute force
    let n = arr.length;
    // let m = arr[0].length
    // const rotatedArr = Array.from({ length: n }, () => Array(n).fill(0));
    // for(let i=0; i<n; i++){
    //     for(let j=0; j< m; j++){
    //        rotatedArr[j][n-1-i] =arr[i][j]
    //     }
    // }
    // return rotatedArr

    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]]
        }
    }

    for (i = 0; i < n; i++) {
        arr[i].reverse()
    }
    return arr
}

// console.log(rotateImage90([[1,2,3],[4,5,6],[7,8,9]]))

// 12. Print the matrix in spiral manner

function matrixSpiral(arr) {
    let top = 0;
    let bottom = arr.length - 1;
    let left = 0;
    let right = arr[0].length - 1;
    let result = []

    while (top <= bottom && left <= right) {

        for (let i = top; i <= right; i++) {
            console.log(top, right)
            result.push(arr[top][i])
        }
        top++


        for (let j = top; j <= bottom; j++) {
            result.push(arr[j][right])
        }
        right--
        if (top <= bottom) {
            for (let k = right; k >= left; k--) {
                result.push(arr[bottom][k])
            }
        }
        bottom--
        if (left <= right) {
            for (let h = bottom; h >= top; h--) {
                result.push(arr[h][left])

            }
            left++
        }
    }

    return result
}

// console.log(matrixSpiral([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))

// 13. Count Subarray sum Equals K

function countSubArray (arr, k){
    let map = new Map();
    map.set(0, 1); 
    let sum = 0;
    let count = 0;

    for (let num of arr) {
        sum += num;
        let rem = sum - k;
        if (map.has(rem)) {
            count += map.get(rem); 
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}

console.log(countSubArray([1,2,3], 3))