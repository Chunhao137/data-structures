var Graph = function(){
	  this.edge = [];
	  this.vertex = []; 
    
};

Graph.prototype.addNode = function(newNode, toNode){
	
	if(!toNode){
	this.vertex.push(newNode);
   }else{
   	    this.vertex.push(newNode);
   	    this.edge.push([newNode,toNode]);
   }

};

Graph.prototype.contains = function(node){

	for(var i=0; i<this.vertex.length; i++){
		 
		 if(this.vertex[i]===node){
		 	  return true
		 }
		
	}
	return false 
};

Graph.prototype.removeNode = function(node){

	for(var i=0; i<this.vertex.length; i++){
		   if(this.vertex[i]===node){
		   	  this.vertex.splice(i,1)
		   }
	}
};

Graph.prototype.getEdge = function(fromNode, toNode){
	var k=0;
	if(this.vertex.length===2){
		  return true; 
	}else{
		for(var i=0; i<this.edge.length;i++){
			  var element = this.edge[i];
			  for(var j=0; j<element.length;j++){
			  	  if(element[j]===fromNode){

			  	  	     k++;
			  	  }else if(element[j]===toNode){
			  	  	    k++;
			  	  }
			  }
		}
		if(k===2){
			 return true;
		}else{
			return false
		}

	}

};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.edge.push([fromNode,toNode]);
   

};

Graph.prototype.removeEdge = function(fromNode, toNode){
	var k=0;

	for(var i=0; i<this.edge.length;i++){
			  var element = this.edge[i];
			  for(var j=0; j<element.length;j++){
			  	  if(element[j]===fromNode){

			  	  	     k++;
			  	  }else if(element[j]===toNode){
			  	  	    k++;
			  	  }

			  }
			  if(k===2){
			  	  this.edge[i].splice(i,1);
			  }
		}
		this.removeNode(fromNode);
		this.removeNode(toNode);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
