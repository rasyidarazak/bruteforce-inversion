arr = [1, 20, 6, 4, 5];
 
function getInvCount(arr){
    let inv_count = 0;
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]) inv_count++;
        }
    }
    return inv_count;
}

document.write("Number of inversions are "+ getInvCount(arr));