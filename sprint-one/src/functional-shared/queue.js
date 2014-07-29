var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var destination ={};
  destination.storage={};
  destination.head=0;
  destination.tail=0;
  _.extend(destination,queueMethods);
  return destination;

};

var queueMethods = {};
queueMethods.enqueue = function(value){
  this.storage[this.tail]=value;
  this.tail++
}

queueMethods.dequeue = function(value){
  if(this.size()>0){
    var result=this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return result;
   }

}
queueMethods.size= function(value){
  return this.tail-this.head;

}


