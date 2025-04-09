// Ask for three numbers
// Determine the largest middle and the smallest
// Print sorted list from greatest to least, and least to greatest


// Set prompt
const prompt = require("prompt-sync")();

function main() {
    // List to store numbers
    let numbers = []
    // Keep track of numbers
    let counter = 0

    // Ask for numbers
    while(true) {

        // If 3 numbers, break
        if (counter == 3) {
            break
        }
        
        let input = prompt("Enter a number: ");
        let number = Number(input);
        
        // Validate input
        if(isNaN(number)) {
            console.log("Invalid input. Please enter a number")
        } else {
            numbers.push(number);
            counter ++;
        }

    }

    // Check if all numbers are equal
    if (numbers[0] === numbers[1] && numbers[1] === numbers[2]) {
        console.log("All numbers are equal");
    } else {
        console.log("Sorted from least to greatest:", sortAscending(numbers));
        console.log("Sorted from greatest to least:", sortDescending(numbers));
    }

}
// SortNumbers takes a list of 3 numbers
function sortAscending(numbers) {

    let list = numbers;

    for (let i = 0; i < numbers.length; i++)
    {
        for (let j = 0; j < numbers.length - 1; j++) {
            
            // Sort
            if (list[j] > list[j + 1])
            {
                let a = list[j]
                list[j] = list[j + 1] 
                list[j + 1] = a
            }
        }
    }
    return list

}

function sortDescending(numbers) {

    let list = numbers;

    for (let i = 0; i < numbers.length; i++)
    {
        for (let j = 0; j < numbers.length - 1; j++) {
            
            // Sort
            if (list[j] < list[j + 1])
            {
                a = list[j]
                list[j] = list[j + 1] 
                list[j + 1] = a
            }
        }
    }
    return list
}
main();