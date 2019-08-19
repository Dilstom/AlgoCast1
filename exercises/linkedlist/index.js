// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
 constructor(d, n = null) {
  this.data = d;
  this.next = n;
 }
}

class LinkedList {
 constructor() {
  this.head = null;
 }
 insertFirst(d) {
  this.head = new Node(d, this.head);
  //   const node = new Node(d, this.head);
  //   this.head = node;
 }
 size() {
  let count = 0;
  let node = this.head;
  while (node) {
   count++;
   node = node.next;
  }
  return count;
 }

 getFirst() {
  return this.head;
 }

 getLast() {
  let node = this.head;
  if (!node) {
   return null;
  }
  while (node) {
   if (!node.next) {
    return node;
   }
   node = node.next;
  }
 }
}
module.exports = { Node, LinkedList };
