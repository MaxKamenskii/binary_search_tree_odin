class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(arr) {
    const sortedSet = [...new Set(arr)].sort((a, b) => a - b);
    this.root = this.buildTree(sortedSet);
  }

  buildTree(array) {
    // base case
    if (array.length === 0) {
      return null;
    }

    const midIndex = Math.floor(array.length / 2);
    const root = new Node(array[midIndex]);

    const leftHalf = array.slice(0, midIndex);
    const rightHalf = array.slice(midIndex + 1);

    root.left = this.buildTree(leftHalf);
    root.right = this.buildTree(rightHalf);

    return root;
  }

  insert(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  deleteItem(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempData = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  leverOrderForEach(callback) {
    let queue = [];
    queue.push(this.root);
    while (queue.length() > 0) {}
  }

  inOrderForEach(callback) {
    // let result = [];
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      callback(node);
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    // return result;
  }

  preOrderForEach(callback) {}
  postOrderForEach(callback) {}
  height() {}
  depth() {}
  isBalanced() {}
  rebalance() {}
}

function add(node) {
  node.data = node.data * 2;
}
let theArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// let unique = [...new Set(theArray)];
// let sorted = unique.sort(function (a, b) {
//   return a - b;
// });

// // 1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345

// let middle = sorted[Math.round((sorted.length - 1) / 2)];

// console.log(
//   unique.sort(function (a, b) {
//     return a - b;
//   })
// );
// console.log(middle);

let myTree = new Tree(theArray);
console.log(myTree);

myTree.inOrderForEach(add);
console.log(myTree);
