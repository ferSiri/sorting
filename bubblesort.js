function bubbleSort (arr,pos=0) { // retorna arreglo de menor a mayor
    count=arr.length;
    while(count>0){
        for(var i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                swap (arr,i);
            }
        }
        count--
    }
    return arr;
 };
 
 function swap (arr,pos) {
    var aux = arr[pos+1]
    arr[pos+1] = arr[pos]
    arr[pos] = aux;

    return arr
};
 
