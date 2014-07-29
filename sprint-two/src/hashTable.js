

var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var i = getIndexBelowMaxForKey(key, this._limit);

  var store = this._storage.get(i) || [];
  for (var j = 0; j < store.length; j++) {
    var position = store[j];
    //checking for uniqueness; 
    if (position[0] === key) {
      position[1] = value;
      return;
    }
  }
  store.push([key, value]);
  this._storage.set(i,store);
};

HashTable.prototype.retrieve = function(key) {
  var i = getIndexBelowMaxForKey(key, this._limit);
  var store = this._storage.get(i) || [] ;
  for (var j = 0; j < store.length; j++) {
    var position = store[j];
    if (position[0] === key) {
       return position[1];
    }
  }
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var store = this._storage.get(i);
  for (var j = 0; j < store.length; j++) {
    var position = store[j];
    if (position[0] === key) {
      position[1] = null;
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
