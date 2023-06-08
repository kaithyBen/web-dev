// Array with repeated value
const array = [1, 2, 3, 3,1]

//use a for loop to loop through the array and print repeated Numbers
for(let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++) { 
        if (array[i] === array[j]) {
            console.log(array[i]);
            break;
        }
    }
}


