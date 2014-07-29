var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var  x = makeNode(value);
    if (list.head === null) {
      list.head = x;
    } else {
      //when you set .next to x, the next will reset the next of head as well
      list.tail.next = x;
    }
    list.tail = x;
  };

  list.removeHead = function(){
    var headVal = list.head.value;
    var nextVal = list.head.next;
    delete list.head;
    list.head = nextVal;
    return headVal;
  };

  list.contains = function(target, p){
    p =p ||  this.head;
    if (p.value === target) {
      return true;
    } else if (p.next === null) {
      return false;
    } else {
      return list.contains(target, p.next);
    }
  };
  return list;

};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
