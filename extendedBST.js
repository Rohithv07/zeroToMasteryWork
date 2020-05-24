class Node{
  constructor(value){
    this.left=null;
    this.right=null;
    this.value=value;
  }
}
class BST{
  constructor(){
    this.root=null;
  }
  insert(value){
    const newNode=new Node(value);
    if(!this.root){
      this.root=newNode;
    }
    else{
      let currentNode=this.root;
      while(true){
        if(value<currentNode.value){
          if(!currentNode.left){
            currentNode.left=newNode;
            return this;
          }
          currentNode=currentNode.left;
        }
        else if(value>=currentNode.value){
          if(!currentNode.right){
            currentNode.right=newNode;
            return this;
          }
          currentNode=currentNode.right;
        }
      }
      
      }
    }
  lookup(value){
      let currentNode=this.root;
      if(!this.root){
        return false;
      }
      while(currentNode){
        if(value===currentNode.value){
          return currentNode;
        }
        else if(value<currentNode.value){
          currentNode=currentNode.left;
        }
        else if(value>currentNode.value){
          currentNode=currentNode.right;
        }
      }
      return false;
    }
    breadFirstSearch(){
      let list=[];
      let queue=[];
      let currentNode=this.root;
      queue.push(currentNode)
      while(queue.length>0){
        currentNode=queue.shift();
        list.push(currentNode.value);
        if(currentNode.left){
          queue.push(currentNode.left)
        }
        if(currentNode.right){
          queue.push(currentNode.right)
        }
      }
       return list; 

    }
    breadFirstSearchRecursive(queue,list){
      if(!queue.length)
				return list
			let currentNode=queue.shift();
			list.push(currentNode.value);
			if(currentNode.left)
				queue.push(currentNode.left)
			if(currentNode.right)
				queue.push(currentNode.right)
			return this.breadFirstSearchRecursive(queue,list)
		}
		DFSInorder(){
			return traverseInorder(this.root,[])
		}
		DFSPreorder(){
			return traversePreorder(this.root,[])
		}
		DFSPostorder(){
			return traversePostorder(this.root,[])
		}
  }

function traverseInorder(node,list){
	if(node.left){       //left,root,right
		traverseInorder(node.left,list)
	}
	list.push(node.value)
	if(node.right){
		traverseInorder(node.right,list)
	}
	return list
}

function traversePostorder(node,list){
	if(node.left){ 				//left,right,root
		traversePostorder(node.left,list)
	}
	if(node.right){
		traversePostorder(node.right,list)
	}
	list.push(node.value)
	return list;
}

function traversePreorder(node,list){
list.push(node.value);        //root,left,right
if(node.left){
	traversePreorder(node.left,list)
}
if(node.right){
	traversePreorder(node.right,list)
}
return list;

}

const bst=new BST();
bst.insert(5);
bst.insert(10);
bst.insert(2);
bst.insert(1);

bst.lookup(11);
bst.lookup(5);
bst.breadFirstSearch()
JSON.stringify(traverse(bst.root));
console.log("BFSIterative "+bst.breadFirstSearch())
console.log("BFSRecurisve "+bst.breadFirstSearchRecursive([bst.root],[]))
console.log("DFSInorder "+bst.DFSInorder())
console.log("DFSPreorder "+bst.DFSPreorder())
console.log("DFSPostorder "+bst.DFSPostorder())


function traverse(node){
  const tree={value:node.value};
  tree.left=node.left === null?null:
  traverse(node.left);
  tree.right=node.right === null?null:
  traverse(node.right);
  return tree;
}