
function CustomSet(numbers){
  this.numbers = numbers || [];
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

CustomSet.prototype.difference = function(comparison){
  for (var i = 0; i < comparison.numbers.length; i++){
    if (this.numbers.indexOf(comparison.numbers[i]) > -1){
      this.delete(comparison.numbers[i])
    }
  }
  return this
}

CustomSet.prototype.disjoint = function(comparison){
  var result = true
  var thisSortedArray = this.numbers.sort();
  var anotherSubjectSortedArray = comparison.numbers.sort();
  for (var i = 0; i < thisSortedArray.length; i++){
    if (this.numbers.indexOf(comparison.numbers[i]) > -1){
      result = false
    }
  }
  return result
}

CustomSet.prototype.empty = function(){
  this.numbers = []
  return this
}

module.exports = CustomSet;
