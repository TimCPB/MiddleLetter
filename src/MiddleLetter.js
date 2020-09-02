function getMiddle(word){

  if(_isOdd(word)) {
    var midValue = Math.floor(word.length / 2)
    return word.charAt(midValue)
  }
  else
    var midValue = word.length / 2
    return word.charAt(midValue -1) + word.charAt(midValue)

};

function _isOdd(word){
  return word.length % 2 !== 0
}