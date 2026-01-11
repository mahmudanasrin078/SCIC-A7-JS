function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {

    const char = str[i].toLowerCase()
    
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("programming"));