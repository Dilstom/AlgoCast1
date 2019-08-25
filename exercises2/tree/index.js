// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
 constructor(data) {
  (this.data = data), (this.children = []);
 }
 add(n) {
  //   const node = new Node(n);
  //   return this.children.push(node);
  this.children.push(new Node(n));
 }
 remove(data) {
  this.children = this.children.filter(node => node.data !== data);
 }
}

class Tree {
 constructor() {
  this.root = null;
 }

 traverseBF(fn) {
  let arr = [];
  arr.push(this.root);
  while (arr.length) {
   let res = arr.shift();
   arr.push(...res.children);
   fn(res);
  }
 }
 traverseDF(fn) {
  let arr = [];
  arr.push(this.root);
  while (arr.length) {
   let res = arr.shift();
   arr.unshift(...res.children);
   fn(res);
  }
 }
}

const node = new Node(1);
const tree = new Tree();
tree.root = node;

module.exports = { Tree, Node };
