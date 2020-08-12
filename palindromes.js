const palindromes = function(string) {
  string = string.replace(/[^a-zA-Z ]/g, "").toLowerCase()
  rString = Array.from(string).reverse().join("").toLowerCase()
  end = rString == string ? true:false
  return end
};

module.exports = palindromes
