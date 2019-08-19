// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
 constructor() {
  this.oneS = new Stack();
  this.twoS = new Stack();
 }
 add(n) {
  //   console.log(this.oneS);
  return this.oneS.push(n);
 }
 remove() {
  while (this.oneS.peek()) {
   this.twoS.push(this.oneS.pop());
  }
  const res = this.twoS.pop();
  while (this.twoS.peek()) {
   this.oneS.push(this.twoS.pop());
  }
  return res;
 }
 peek() {
  while (this.oneS.peek()) {
   this.twoS.push(this.oneS.pop());
  }
  const res = this.twoS.peek();
  while (this.twoS.peek()) {
   this.oneS.push(this.twoS.pop());
  }
  return res;
 }
}

module.exports = Queue;
