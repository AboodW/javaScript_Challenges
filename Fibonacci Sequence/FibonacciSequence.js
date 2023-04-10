/*
! Challenge 3
? Fibonacci Sequence
*Write a program that generates the first 20 numbers of the Fibonacci sequence.
*The Fibonacci sequence is a series of numbers where each number is the sum of the
*two preceding ones, starting from 0 and 1. The first few numbers in the sequence
*are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181.
*/

(function fibonacci() {
  let a = 0,
    b = 1,
    count = 0;

  while (count < 20) {
    console.log(a);
    count++;
    a = a + b;
    b = a - b;
  }
})();
