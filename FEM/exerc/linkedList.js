/** Class representing a Linked List */

class LinkedList {
 constructor(value) {
  this.head = { value, next: null };
  this.tail = this.head;
 }
 /*
  * Inserts a new value to the end of the linked list
  * @param {*} value - the value to insert
  * const time
  */
 insert(value) {
  const newNode = { value, next: null };
  console.log('newNode', newNode);
  let node = this.head;
  while (node) {
   if (!node.next) {
    this.tail = newNode;
    return (node.next = newNode);
   }
   node = node.next;
  }
 }
 /*
  * Deletes a node
  * @param {*} node - the node to remove
  * @return {*} value - the deleted node's value
  * const time if you have reference or linear
  */
 remove() {}
 /*
  * Removes the value at the end of the linked list
  * @return {*} - the removed value
  */
 // {
 //   head: {value: 1, next: {value: 2, next: null}}
 //   tail: {value: 2, next: null}
 // }
 removeTail() {}
 /*
  * Searches the linked list and returns true if it contains the value passed
  * @param {*} value - the value to search for
  * @return {boolean} - true if value is found, otherwise false
  * linear time complexity
  */
 contains(value) {}
 /*
  * Checks if a node is the head of the linked list
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the head, otherwise false
  * const
  */
 isHead(node) {}
 /*
  * Checks if a node is the tail of the linked list
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the tail, otherwise false
  * const
  */
 isTail(node) {}
}

const myList = new LinkedList(1); //initiate?

// {
//   head: {value: 1, next: null}
//   tail: {value: 1, next: null}
// }

myList.insert(2);

// {
//   head: {value: 1, next: {value: 2, next: null}}
//   tail: {value: 2, next: null}
// }

myList.insert(3);

// {
//   head: {value: 1, next: {value: 2, next: {value: 3, next: null}}}
//   tail: {value: 3, next: null}
// }
console.log(myList);
// myList.removeTail();
// console.log(myList);
// myList.removeNext(prevNode)

// function removeNext(list, prevNode) {

// }
// {
//   head: {value: 1, next: {value: 2, next: null}}
//   tail: {value: 2, next: null}
// }
