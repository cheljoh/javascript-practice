
function CustomSet(numbers){
  this.numbers = numbers;
}

CustomSet.prototype.eql = function(anotherSubject){
  thisSortedArray = this.numbers.sort();
  anotherSubjectSortedArray = anotherSubject.numbers.sort();
  if (thisSortedArray.length !== anotherSubjectSortedArray.length){
    return false;
  }
  for (var i = 0; i < this.numbers.length; i++){
    if (thisSortedArray[i] !== anotherSubjectSortedArray[i]){
      return false
    }
  }
  return true
}

CustomSet.prototype.delete = function(numberToDelete){
  var index = this.numbers.indexOf(numberToDelete)
  if (index !== -1) {
    this.numbers.splice(index, 1)
  }
  return this
}

module.exports = CustomSet;
