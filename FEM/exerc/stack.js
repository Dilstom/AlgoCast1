/** Class representing a Stack. */

class Stack {

  constructor() {
    this._storage = {};
    this.len = 0
  }
  /*
  * Adds a new value at the end of the stack
  * @param {*} value the value to push
  */
  push(value) {
    this._storage[this.len] = value
    this.len++;
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() {
      if(this.len === 0){
        console.log('storage is empty')
        return;
      }
      const removed = this._storage[this.len-1]
      delete this._storage[this.len-1];
      this.len--;
      console.log('removed the last item!')
      return removed
  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() {
    // console.log(this.storage[this.len-1])
    if(this.len===0){
      console.log('storage is empty')
      return;
    }
    return this._storage[this.len-1]
  }
}

const myStack = new Stack();
myStack.push(5)
console.log(myStack)
console.log(myStack.peek())
myStack.push(6)
console.log(myStack)
console.log(myStack.peek())
myStack.push(12)
console.log(myStack)
console.log(myStack.peek())
myStack.pop()
console.log(myStack.peek())
console.log(myStack)
myStack.pop()
console.log(myStack.peek())
console.log(myStack)
myStack.pop()
console.log(myStack.peek())
console.log(myStack)
myStack.pop()
console.log(myStack.peek())

console.log(myStack)