
//1. Program to generate Pascal's Triangle
// ( these type of question will be use combination nCr = n!/r!(n-r !))

// Given the number of rows n. Print the first n rows of Pascal’s triangle.
function generateRow(row){
    let result =[1]
    let resp = 1

    for(let col=1; col<row; col++){
       resp = resp * (row - col);
      resp = resp / (col);
        result.push(resp)
    }
    return result
}

function pascalTriangle(n){
    let arr = []
    for(let i=1; i<=n; i++ ){
       let result =  generateRow(i);
       arr.push(result);
    }
    return arr

}

// Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.

function pascalTriangleForPosition(n, r){
     n = n-1;
     r = n-r;
    let res = 1
     for( let i=0; i<=r; i++){
        res = res *(n-i)
        res = res/(i+1)
     }
     return res
}

// console.log(pascalTriangle(5))
// console.log(pascalTriangleForPosition(3,2))

// 2. Majority Elements(&gt;N/3 times) | Find the elements that appears more than N/3 times in the array

function majorityElement3 (arr){
 let element1, element2 ;
    let count1 = 0;
    let count2 = 0;
    let result = []
    for(i=0; i<arr.length; i++){
        if(!count1 && arr[i] != element2){
            element1 = arr[i]
            count1 = 1
        }
        else if(!count2 && arr[i] != element1){
            element2 = arr[i]
            count2 = 1
        }else if (arr[i] == element1){
            count1++ 
        }else if( arr[i]== element2){
            count2++
        }else{
            count1-- 
            count2-- 
        }
    }

    count1 = 0, count2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element1) count1++;
        if (arr[i] === element2) count2++;
    }

    if(count1 >(arr.length)/3){
        result.push(element1)
    }
    if(count2 >(arr.length)/3){
        result.push(element2)
    }
    return result
}

// console.log(majorityElement3([11,33,33,11,33,11]))

// 3. Sum : Find triplets that add up to a zero

function threeSum(arr){

    // better solution 

    // let allSubSet = [];
    // for(i=0; i < arr.length; i++){
    //     let set =  new Set();
    //     for(j=i+1; j<arr.length; j++){
    //         let third = -(arr[i]+arr[j]);
    //         if(set.has(third)){
    //             let temp = [arr[i], arr[j], third];
    //             temp.sort((a, b) => a - b);
    //             allSubSet.push(temp);
    //         }
    //         set.add(arr[j])
    //     }
    // }
    // let set  = new Set(allSubSet.map(JSON.stringify));
    // allSubSet = Array.from(set).map(JSON.parse);
    // // return allSubSet;
    // console.log(allSubSet)

    
    // optimize way

    let result = [];

    arr.sort();
    console.log('arr',arr)
    for(i=0; i<arr.length; i++){

        if(i != 0 && arr[i]===arr[i-1]) continue;
        let j = i+1;
        let k = arr.length-1;
        while(j < k){
            let sum = arr[i] + arr[j] + arr[k];
            console.log({sum, i,j, k },arr[i], arr[j], arr[k])
            if(sum < 0){
                j++
            }else if( sum > 0){
                k--
            }else{
                let innerSum = [arr[i], arr[j], arr[k]]
                result.push(innerSum);
                j++
                k--
                while(j<k && arr[j]==arr[j-1]) j++;
                while(j<k && arr[k]==arr[k+1]) k--;
            }
        }
    }
    // let unique = new Set(result.map(js))

    return result
    // [ [ -1, 0, 1 ], [ -1, -1, 2 ] ]
}

console.log(threeSum([-1,0,1,2,-1,-4]))