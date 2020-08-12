const palindromes = function(string) {
  string = string.replace(/[^a-zA-Z ]/g, "")
  string = Array.from(string).filter(letter => letter!=' ')
  rString = Array.from(string).reverse()
  return rString.join("").toLowerCase() == string.join("").toLowerCase() ? true:false
};

module.exports = palindromes
