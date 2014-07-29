var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.sSize = 0;

};

Stack.prototype.push = function(value){
   this[this.sSize]=value;
   this.sSize++;
};

Stack.prototype.pop = function(){

    if(this.sSize>0){

       var result= this[this.sSize-1];
       delete this[this.sSize-1];
       this.sSize--;
       return result;
    }
};

Stack.prototype.size = function(){

    return this.sSize;
};

