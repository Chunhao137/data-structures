var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  storage.sSize = 0;
  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.sSize] = value;
  this.sSize++;
};

stackMethods.pop = function() {
  if (this.sSize > 0) {
    var result = this[this.sSize - 1];
    delete this[this.sSize - 1];
    this.sSize--;
    return result;
  }
};

stackMethods.size = function(){
  return this.sSize;
};


