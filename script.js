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
        this.root = this.buildTree(sortedSet)
    }

    buildTree(array) {
        // base case
        if (array.length === 0) {
            return null
        }

        const midIndex = Math.floor(array.length / 2);
        const root = new Node(array[midIndex]);

        const leftHalf = array.slice(0, midIndex);
        const rightHalf = array.slice(midIndex + 1);

        root.left = this.buildTree(leftHalf);
        root.right = this.buildTree(rightHalf);

        return root
    }

    insert(node) {
        if(this.root == null) {
            this.root = node;
        }
    }

    deleteItem() {

    }

    find() {

    }

    leverOrderForEach(callback) {

    }

    inOrderForEach(callback) {

    }

    preOrderForEach(callback) {

    }
    postOrderForEach(callback) {

    }
    height() {

    }
    depth() {

    }
    isBalanced() {

    }
    rebalance() {

    }
};


let theArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let unique = [...new Set(theArray)]
let sorted = unique.sort(function(a, b){return a - b})

// 1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345

let middle = sorted[Math.round((sorted.length - 1) / 2)];

console.log(unique.sort(function(a, b){return a - b}))
console.log(middle)