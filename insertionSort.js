const numbers=[199,200,10,1,0,19,5,6,9,3];

function insertionSort(array){
  const length=array.length;
  for(let i=0;i<length;i++){
    if(array[i]<array[0]){
      //shift to first place
      array.unshift(array.splice(i,1)[0]);
    }
    else{
      //find where number must go
      for(j=1;j<length;j++){
        if(array[i]>array[j-1] && array[i]<array[j]){
          //move number to correct spot
          array.splice(j,0,array.splice(i,1)[0]);
        }
      }
    }
  }
  return array;
}

insertionSort(numbers);