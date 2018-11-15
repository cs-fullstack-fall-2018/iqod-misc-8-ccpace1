var number = parseInt(prompt("Please enter a number: "));
var counter = 1;
var factorial = 1;
var sum = 0;
var array = [];
while (counter, counter<=number){
    array.push(counter);
    sum = sum + counter;
    factorial = factorial * counter;
    console.log(array);
    console.log("The sum is: " + sum);
    console.log("The factorial is: " + factorial);
    counter++
}
