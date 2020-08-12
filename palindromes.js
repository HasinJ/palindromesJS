const palindromes = function(string) {
  end = Array.from(string).reverse().join("") == string ? true:false
  return end
};

module.exports = palindromes
