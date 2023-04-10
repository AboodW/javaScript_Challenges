/*
!Challenge 1
? FizzBuzz
*Write a program that logs all the numbers from 1 to 100. If a number is divisible by 3, log "Fizz" instead of the number.
*If a number is divisible by 5, log "Buzz" instead of the number. If a number is divisible by both 3 and 5,
*log "FizzBuzz" instead of the number.
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
