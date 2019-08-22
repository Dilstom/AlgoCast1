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

 clear() {
  this.head = null;
 }

 removeFirst() {
  if (!this.head) {
   return;
  }
  this.head = this.head.next;
 }

 removeLast() {
  if (!this.head) {
   return;
  }
  if (!this.head.next) {
   return (this.head = null);
  }
  let previous = this.head;
  let node = this.head.next;
  //  console.log(node)
  while (node.next) {
   previous = node;
   node = node.next;
  }
  previous.next = null;
 }

 insertLast(newN) {
  let last = this.getLast();
  if (last) {
   last.next = new Node(newN);
  } else {
   this.head = new Node(newN);
  }
 }

 getAt(i) {
  let count = 0;
  //   if (!this.head) {
  //    return null;
  //   }
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

 removeAt(i) {
  let node = this.head;
  if (!node) {
   return;
  }
  if (i === 0) {
   return (this.head = this.head.next);
  }
  const prev = this.getAt(i - 1);
  if (!prev || !prev.next) {
   return;
  }
  prev.next = prev.next.next;
 }

 insertAt(data, i) {
  //   const node = new Node(data);
  if (!this.head) {
   return (this.head = new Node(data));
  }

  if (i === 0) {
   return (this.head = new Node(data, this.head));
  }
  const prev = this.getAt(i - 1) || this.getLast();

  const node = new Node(data, prev.next);
  prev.next = node;

  //   const prev = this.getAt(i - 1);
  //   const current = this.getAt(i);
  //   if (!current) {
  //    let last = this.size() - 1;
  //    this.getAt(last).next = node;
  //   }
  //   if (prev && current) {
  //    prev.next = node;
  //    node.next = current;
  //   } else if (current && !prev) {
  //    this.head = node;
  //    node.next = current;
  //   }
 }

 //  forEach(data, i) {
 // //   const node = new Node(data);
 // //   const l = new LinkedList(node);
 //  }
}

module.exports = { Node, LinkedList };
