const numbers=[99,01,11,15,100];

function bubbleSort(array){
  for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
      if(array[j]>array[j+1]){
        let temp=array[j];
        array[j]=array[j+1];
        array[j+1]=temp;
      }
    }
  }
  return array
}

bubbleSort(numbers);

