// ! Replace Array Number
const arrayReplace = (inputArray, elementToReplace, subtractionElement) =>{
    inputArray.forEach((element, idx) => {
        if(element === elementToReplace){
            inputArray[idx] = subtractionElement
        }
    });
    console.log(inputArray)
}

arrayReplace([1,2,2],1,3)