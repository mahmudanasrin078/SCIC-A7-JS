function isPalindrome(str) {
  const cleaned = str.toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 