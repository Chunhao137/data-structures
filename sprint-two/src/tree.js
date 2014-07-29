var makeTree = function(value){
  var tree = Object.create(treeMethods);
  tree.children = undefined; 
  tree.value = value; 
  return tree; 
  
};


var treeMethods = {};

treeMethods.addChild = function(value){
  if(this.children === undefined){
    this.children = [];
  }
  this.children.push(makeTree(value));
};

//if (this.children === undefined) {
 // this.children = [];
//}
//this.children.push(node);

treeMethods.contains = function(target){
  if(this.value === target){
      return true;
  } else if(this.children!==undefined){
      for(var i=0; i<this.children.length; i++){
          if(this.children[i].contains(target)){
             return true; 
          }
      }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
