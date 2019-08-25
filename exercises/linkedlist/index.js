// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
 constructor(data, next = null) {
  (this.data = data), (this.next = next);
 }
}

class LinkedList {
 constructor() {
  this.head = null;
 }

 insertFirst(data) {
  this.head = new Node(data, this.head);
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
  while (node) {
   if (node.next === null) {
    return node;
   }
   node = node.next;
  }
 }

 clear() {
  return (this.head = null);
 }

 removeFirst() {
  if (this.head) {
   this.head = this.head.next;
  } else {
   return null;
  }
 }

 removeLast() {
  if (!this.head) {
   return null;
  } else if (!this.head.next) {
   return (this.head = null);
  }

  const last = this.getLast();
  let node = this.head;
  while (node) {
   if (node.next === last) {
    node.next = null;
   }
   node = node.next;
  }
 }

 insertLast(data) {
  const last = this.getLast();
  return (last.next = new Node(data));
 }

 getAt(i) {
  let count = 0;
  let node = this.head; // if this.head is null it will never enter while loop
  while (node) {
   if (count === i) {
    return node;
   }
   count++;
   node = node.next;
  }
  return null;
 }
}

module.exports = { Node, LinkedList };
