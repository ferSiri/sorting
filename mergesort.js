function split(wholeArray) {
    let firstHalf = wholeArray
    let secondHalf;
   if (wholeArray.length % 2 !== 0) {
       secondHalf = wholeArray.splice((wholeArray.length/2)+1,)
   } else {
       secondHalf = wholeArray.splice((wholeArray.length/2),)
   }
   return [firstHalf, secondHalf];
}

function merge (arr1,arr2) {
   let result = [];
   while (arr1.length > 0 && arr2.length > 0) {
       
       if (arr1[0] > arr2[0]) {
           result.push(arr2[0]);
           arr2.shift();
       } else {
           result.push(arr1[0]);
           arr1.shift();
       }
   }
   if (arr1.length === 0 && arr2.length > 0) {
       result = result.concat(arr2)
   } else if (arr1.length > 0 && arr2.length === 0) {
       result = result.concat(arr1)
   }

   return result
}

function mergeSort(arreglo){
              // [9,3,4,5] // [9,3] // [9]
   if(arreglo.length===1){
       return arreglo
   }

  var arr=split(arreglo); // [9,3]  [4,5]
  var mit1=mergeSort(arr[0]) // [9,3] --> [9] -- [3]
  var mit2=mergeSort(arr[1]) // [4,5] --> [4] -- [5]
   console.log('hola')
  return merge(mit1,mit2)

}
