class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right= null;
    }
  
    insert(key, value) {
      if (this.key == null) {
        this.key = key;
        this.value = value;
      }
  
      else if (key < this.key) {
        if (this.left = null) {
          this.left = new BinarySearchTree(key, value, this);
        }
        else {
          this.left.insert(key, value);
        }
      }
  
      else {
        if (this.right == null) {
          this.right = new BinarySearchTree(key, value,  this);
        }
        else {
          this.right.insert(key, value);
        }
      }
    }
  
    find(key) {
      if (this.key == key) {
        return this.value;
      }
  
      else if (key < this.key && this.left) {
        return this.left.dfind(key);
      }
  
      else if(key > this.key && this.right) {
        return this.right.find(key);
      }
  
      else {
        throw new Error('Key Error');
      }
    }
  
    remove(key) {
      if (this.key == key) {
        if (this.left && this.right) {
          const successor = this.right._findMin();
          this.key = successor.key;
          this.value = successor.value;
          successor.remove(succesor.key);
        }
  
        else if (this.left) {
          this._replaceWith(this.right);
        }
  
        else {
          this._replaceWith(null);
        }
      }
  
      else  if (key < this.key && this.left) {
        this.left.remove(key);
      }
      else if (key > this.key && this.right) {
        this.right.remove(key);
      }
      else {
        throw new Error('Key Error');
      }
    }
  
    _replaceWith(node) {
      if (this.parent) {
        if (this == this.parent.left) {
          this.parent.left = node;
        }
  
        else if (this == this.parent.right) {
          this.parent.right = node;
        }
  
        if (node) {
          node.parent =  this.parent;
        }
      }
      else {
        if (node) {
          this.key = node.key;
          this.value = node.value;
          this.left = node.left;
          this.right = node.right;
        }
        else {
          this.key = null;
          this.value = null;
          this.left = null;
          this.right = null;
        }
      }
    }
  
    _findMin() {
      if (!this.left) {
        return this;
      }
      return this.left._findMin();
    }
  }
  
  
  let newBST1 = new BinarySearchTree();
  newBST1.insert(3)
  newBST1.insert(1)
  newBST1.insert(4)
  newBST1.insert(6)
  newBST1.insert(9)
  newBST1.insert(2)
  newBST1.insert(5)
  newBST1.insert(7)
  console.log(newBST1);
  
  /*          
                3
            1       4
              2   5   6
                        9
                      7
  */
  
  let newBST2 = new BinarySearchTree();
  newBST2.insert('E')
  newBST2.insert('A')
  newBST2.insert('S')
  newBST2.insert('Y')
  newBST2.insert('Q')
  newBST2.insert('U')
  newBST2.insert('E')
  newBST2.insert('S')
  newBST2.insert('T')
  newBST2.insert('I')
  newBST2.insert('O')
  newBST2.insert('N')
  console.log(newBST2);
  
  
  // It's a no go captain, doesn't work
  
  
  // what does this function do?
  function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
  }
  
  // recursively adds all the node values of a tree
  
  function bst_height1(tree) {
    return (
      Math.max(
        tree.left && bst_height1(tree.left),
        tree.right && bst_height1(tree.right)
      ) + 1
    );
  }
  
  function bst_height2(tree) {
    if (tree.left && tree.right)
      return Math.max(bst_height2(tree.left), bst_height2(tree.right)) + 1;
    if (tree.left) return bst_height2(tree.left) + 1;
    if (tree.right) return bst_height2(tree.right) + 1;
    return 1;
  }
  
  // time complexity would be 0(n)
  
  function isBst(bst) {
    if (!bst.key) {
      return false;
    }
    if (bst.left) {
      // check to see if the values to the left are less than root
      if (bst.left.key > bst.key) {
        return false;
      } else {
        return isBst(bst.left);
      }
    }
    // check to see if the values to the right are less than root
    if (bst.right) {
      if (bst.right.key < bst.key) {
        return false;
      } else {
        return isBst(bst.right);
      }
    }
    // check for 2 children
    if (bst.right && bst.left) {
      isBst(bst.right);
      isBst(bst.left);
    }
    // check for end of the tree
    if (!bst.right && !bst.left) {
      return true;
    }
  }
  
  
  function thirdLargest(str) {
    let results = [];
    let arr = str.split("_");
    for (let i = 0; i < arr.length - 1; i++) {
      results.push(arr[i]);
    }
    return results.sort()[results.length - 3];
  }
  
  function balanced(bst) {
    let leftHeight = heightOfBST(bst.left);
    let rightHeight = heightOfBST(bst.right);
  
    if (Math.abs(rightHeight - leftHeight) <= 1) {
      return true;
    } else if (Math.abs(rightHeight - leftHeight) > 1) {
      return false;
    }
  }
  
  let arr1 = [3, 5, 4, 6, 1, 0, 2];
  let arr2 = [3, 1, 5, 2, 4, 6, 0];
  
  function sameBSTs(arr1, arr2) {
    // works better with arrLength, index1, index2 as extra params
    // index1 === arrLength
    // base case
    if (arr1[0] !== arr2[0]) {
      return false;
    }
    if (arr1.length !== arr2.length) {
      return false;
    }
    if (arr1.length === 1 && arr2.length === 1) {
      return true;
    }
    let root = arr1[0];
    // make sure both BSTs are the same height
    // if a child is < root then apply recursive fn on left child for node comparison
    // if a child is > root then apply recursive fn on right child for node comparison
    let leftArray1 = [];
    let rightArray1 = [];
    let leftArray2 = [];
    let rightArray2 = [];
    for (let i = 1; i < arr1.length; i++) {
      if (arr1[i] < root) {
        leftArray1.push(arr1[i]);
      } else if (arr1[i] > root) {
        rightArray1.push(arr1[i]);
      }
      if (arr2[i] < root) {
        leftArray2.push(arr2[i]);
      } else if (arr2[i] > root) {
        rightArray2.push(arr2[i]);
      }
    }
    return sameBSTs(leftArray1, leftArray2) && sameBSTs(rightArray1, rightArray2);
  }