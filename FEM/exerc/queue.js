/** Class representing a Queue.
 * @constructor
 */

class Queue {
 constructor() {
  this._storage = {};
  this._len = 0;
  this._headIndex = 0;
 }
 /*
  * Enqueues a new value at the end of the queue
  * @param {*} value the value to enqueue
  */
 enqueue(value) {
  if (this._len === 0) {
   this._headIndex = 0;
  }
  this._storage[this._len] = value;
  this._len++;
 }

 /*
  * Dequeues the value from the beginning of the queue and returns it
  * @return {*} the first and oldest value in the queue
  */
 dequeue() {
  // if(this._len === 0){
  //   this._headIndex = 0;
  // }
  if (this._len) {
   const firstVal = this._storage[this._headIndex];
   delete this._storage[this._headIndex];
   this._len--;
   this._headIndex++;
   console.log(firstVal);
   console.log('length: ', this._len);
   return firstVal;
  }
 }
 /*
  * Returns the value at the beginning of the queue without removing it from the queue
  * @return {*} the first and oldest value in the queue
  */
 peek() {
  return this.storage[this._headIndex];
 }
}

const myQ = new Queue();
myQ.enqueue(5);
myQ.enqueue(32);
myQ.enqueue(14);
console.log(myQ);
myQ.dequeue();
// console.log(myQ)
myQ.dequeue();
// console.log(myQ)
myQ.dequeue();
myQ.dequeue();
// console.log(myQ)
myQ.enqueue(71);
myQ.enqueue(100);
myQ.dequeue();
myQ.dequeue();
myQ.dequeue();
myQ.dequeue();
myQ.dequeue();
myQ.enqueue(101);
console.log(myQ);
myQ.dequeue();
myQ.enqueue(101);
console.log(myQ);
myQ.enqueue(102);
console.log(myQ);
myQ.enqueue(103);
myQ.dequeue();
console.log(myQ);
myQ.dequeue();
console.log(myQ);
myQ.enqueue(104);
console.log(myQ);
