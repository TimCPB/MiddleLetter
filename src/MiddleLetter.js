function getMiddle(word){

  if(_isOdd(word)) {
    // var midValue = Math.floor(word.length / 2)
    return word.charAt(getMidValue(word))
  }
  else
    // var midValue = word.length / 2
    return word.charAt(getMidValue(word) - 1) + word.charAt(getMidValue(word))

};

function _isOdd(word){
  return word.length % 2 !== 0
}

function getMidValue(word){
  return Math.floor(word.length/2)
}