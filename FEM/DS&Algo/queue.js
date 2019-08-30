/*
QUEUE
Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.
*** Operations:
myQueue.enqueue(value)
=> count of queue
add value to collection
myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection
myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection
myQueue.count()
=> number of elements in queue
*** Additional Exercises:
Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."
Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?
Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?
 */

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
  console.log('first: ', this.first);
  const removed = this.storage[this.first];
  console.log('rem', removed);
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
console.log('count:', newQ.count());
console.log(newQ);

/*
  *** Exercises:
  1. Implement a queue using two stacks.
  2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.
  3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.
   */
