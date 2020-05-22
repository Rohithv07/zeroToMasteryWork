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
  }


const bst=new BST();
bst.insert(5);
bst.insert(10);
bst.insert(2);
bst.insert(1);

bst.lookup(11);
bst.lookup(5);
JSON.stringify(traverse(bst.root));

function traverse(node){
  const tree={value:node.value};
  tree.left=node.left === null?null:
  traverse(node.left);
  tree.right=node.right === null?null:
  traverse(node.right);
  return tree;
}