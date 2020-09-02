function getMiddle(word){

  if(word.length % 2 !== 0) {
    var midValue = Math.floor(word.length / 2)
    return word.charAt(midValue)
  }
  else
    var midValue = word.length / 2
    return word.charAt(midValue -1) + word.charAt(midValue)

};