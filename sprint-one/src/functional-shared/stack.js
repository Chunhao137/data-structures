var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var destination = {};
  destination.storage = {};
  destination.qSize = 0;

  _.extend(destination, stackMethods);
  return destination;
};

var stackMethods = {};

stackMethods.push = function(value) {
    this.storage[this.qSize] = value;
    this.qSize++;
};
stackMethods.pop = function(value) {
  if (this.qSize > 0) { var result = this.storage[this.qSize - 1];
    delete this.storage[this.qSize - 1];
    this.qSize--;
    return result;
  }
};
stackMethods.size = function(value) {
  return this.qSize;
};


