/*
!Challenge 2
?Palindrome Checker
*Write a program that takes a string as input and checks whether it is a palindrome or not.
*A palindrome is a word or phrase that reads the same backward as forward, ignoring spaces,
*punctuation, and capitalization. For example, "A man, a plan, a canal, Panama!" is a palindrome.
*/

const palindromInput = document.getElementById("palindrome");
const palindromButton = document.getElementById("check");
const palindromOutput = document.getElementById("result");
const outputBanner = document.querySelector(".resultbanner");

palindromButton.addEventListener("click", () => {
  const palindrom = palindromInput.value;
  const reversePalindrome = palindrom.split("").reverse().join("");

  if (palindrom === reversePalindrome) {
    palindromOutput.classList.remove("notpalindrom");
    palindromOutput.classList.add("palindrom");
    outputBanner.classList.add("giveborder");
    palindromOutput.innerHTML = " A Palindrom!!";
  } else {
    palindromOutput.classList.remove("palindrom");
    palindromOutput.classList.add("notpalindrom");
    outputBanner.classList.add("giveborder");
    palindromOutput.innerHTML = "Not a Palindrom";
  }
});

//?same way but to make it clear
/*

const palindromInput = document.getElementById("palindrome");
const palindromButton = document.getElementById("check");
const palindromOutput = document.getElementById("result");
const outputBanner = document.querySelector(".resultbanner");

palindromButton.addEventListener("click", () => {
    const palindrom = palindromInput.value;
    const palindromArray = palindrom.split("");
    const reversePalindromeArray = palindromArray.reverse();
    const reversePalindrome = reversePalindromeArray.join("");


*/
