var makeBinarySearchTree = function(value){
  var tree = Object.create(binaryTree);
  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

var binaryTree = {};
binaryTree.insert = function(val) {
  //think object within, object within object etc...
  if(val<this.value){
      if(this.left===null){
         this.left = makeBinarySearchTree(val);
      }else{
         this.left.insert(val);
      }
  }else{
     if(this.right===null){
        this.right = makeBinarySearchTree(val);
     }else{
        this.right.insert(val);
     }
  }
  
};

binaryTree.contains = function(val) {
     if(this.value === val){
        return true;
      }else if(val<this.value){

     if (this.left === null){
        return false; 
      }else{
         return this.left.contains(val)
      }
    }else{
       if(this.right === null){
          return false; 
       }else{
          return this.right. contains(val);
       }
    }


 
};

binaryTree.depthFirstLog = function(fn) {
  fn(this.value);

  if(this.left){
     this.left.depthFirstLog(fn);
  }
  if(this.right){
      this.right.depthFirstLog(fn);
  }
 
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
