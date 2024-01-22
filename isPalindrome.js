const isPalindrome = (str) => {
  const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
  return cleanedStr === cleanedStr.split('').reverse().join('')
}

console.log(isPalindrome('A man, a plan, a canal, Panama'));