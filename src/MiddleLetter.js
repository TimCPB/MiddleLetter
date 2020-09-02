function getMiddle(word){
  // var midValue = Math.ceil(word.length / 2)
  // var array = word.split('')
  // console.log(word)
  // console.log(midValue)
  // return word;

  if(word.length > 2) {
    var midValue = Math.floor(word.length / 2)
    return word.charAt(midValue)
  }
  else
    return word

  // var length = word.length
  // var array = word.split('')
  // var midValue = (length / 2) rounded up


};