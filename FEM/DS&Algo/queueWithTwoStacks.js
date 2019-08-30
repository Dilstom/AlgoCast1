function Queue(capacity) {
 // implement me...
 this.capacity = capacity || Infinity;
 this.storage = {};
 this.size = 0;
 this.first = 0;
}

Queue.prototype.enqueue = function(value) {
 // implement me...
 if (this.size < this.capacity) {
  if (this.size === 0) {
   this.first = 0;
  }
  this.storage[this.size] = value;
  this.size++;
  return this.size;
 } else {
  return 'Max capacity already reached. Remove element before adding a new one.';
 }
};
// Time complexity: O(1)

Queue.prototype.dequeue = function() {
 // implement me...
 if (this.size > 0) {
  // console.log('first: ', this.first);
  const removed = this.storage[this.first];
  // console.log('rem', removed);
  delete this.storage[this.first];
  this.size--;
  this.first++;
  return removed;
 }
};
// Time complexity: 0(1)

Queue.prototype.peek = function() {
 // implement me...
 //  console.log('peek: ', this.storage[this.first]);
 return this.storage[this.first];
};

Queue.prototype.count = function() {
 // implement me...
 return this.size;
};

Queue.prototype.untill = function(el) {
 // implement me...
 let count = 0;
 for (let key in this.storage) {
  if (this.storage[key] === el) {
   return count;
  }
  count++;
 }
 return null;
};

Queue.prototype.contains = function(el) {
 for (let key in this.storage) {
  if (this.storage[key] === el) {
   return true;
  }
 }
 return false;
};
// Time complexity: O(1)

const newQ = new Queue();
newQ.enqueue(2);
newQ.enqueue(3);
newQ.enqueue(4);
newQ.enqueue(5);
newQ.dequeue();
newQ.dequeue();
newQ.dequeue();
newQ.dequeue();
newQ.enqueue(4);
newQ.enqueue(5);
newQ.dequeue();
newQ.dequeue();
newQ.dequeue();
newQ.enqueue(4);
newQ.enqueue(5);
newQ.peek();
// console.log('count:', newQ.count());
console.log(newQ);

//   *** Exercises:
//   1. Implement a queue using two stacks.
//   2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.
//   3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.
//    */
//  */
console.log('**** Stack **** ');
function Stack(capacity) {
 // implement me...
 this.capacity = capacity || Infinity;
 this.storage = {};
 this.size = 0;
}

Stack.prototype.push = function(value) {
 // implement me...
 if (this.size === this.capacity) {
  return 'Max capacity already reached. Remove element before adding a new one.';
 } else {
  this.storage[this.size] = value;
  this.size++;
 }
};
// Time complexity:

Stack.prototype.pop = function() {
 // implement me...
 const removed = this.storage[this.size - 1];
 delete this.storage[this.size - 1];
 // this.storage[this.size-1] = null;
 this.size--;
 if (this.size < 0) {
  this.size = 0;
 }
 return removed;
};
// Time complexity: O(1)

Stack.prototype.peek = function() {
 // implement me...
 return this.storage[this.size - 1];
};
// Time complexity: O(1)

Stack.prototype.count = function() {
 // implement me...
 return this.size;
};

Stack.prototype.contains = function(el) {
 // implement me...
 for (let key in this.storage) {
  if (this.storage[key] === el) {
   return true;
  }
 }
 return false;
};
// Time complexity: O(n)

const newStack = new Stack();
newStack.push(3);
newStack.push(4);
// console.log('popped: ', newStack.pop());
newStack.push(5);
newStack.push(6);
// console.log('popped: ', newStack.pop());
// console.log('peek: :', newStack.peek());

console.log(newStack.contains(6));
console.log(newStack);
// console.log(newStack.count());

console.log('*** Queue_w/2_Stacks ***');

function QueueWithStacks() {
 this._inStack = new Stack();
 this._outStack = new Stack();
}

QueueWithStacks.prototype.enqueue = function(el) {
 this._inStack.push(el);
};
QueueWithStacks.prototype.transferStack = function() {
 while (this._inStack.count() > 0) {
  this._outStack.push(this._inStack.pop());
 }
};
QueueWithStacks.prototype.dequeue = function() {
 if (this._outStack.count() === 0) this.transferStack();
 return this._outStack.pop();
};

const q = new QueueWithStacks();

q.enqueue(34);
q.enqueue(45);
q.enqueue(56);
q.enqueue(67);
q.enqueue(78);
// q.transfer();
console.log('dequeue', q.dequeue());
q.enqueue(89);
console.log('dequeue', q.dequeue());

console.log('q', q);
