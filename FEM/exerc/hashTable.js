/** Class representing a Hash Table */

class HashTable {
 constructor(val) {
  // this._storage = new Array(val).fill(0);
  this._storage = [];
  this._tableSize = val;
 }
 /*
  * Inserts a new key-value pair
  * @param {string} key - the key associated with the value
  * @param {*} value - the value to insert
  * const time
  */
 insert(str, val) {
  const index = this._hash(str, this._tableSize);
  console.log(index);
  if (!this._storage[index]) {
   this._storage[index] = [];
  }
  this._storage[index].push([str, val]);
 }
 /*
  * Deletes a key-value pair
  * @param {string} key - the key associated with the value
  * @return {*} value - the deleted value
  * const time
  */
 remove() {}
 /*
  * Returns the value associated with a key
  * @param {string} key - the key to search for
  * @return {*} - the value associated with the key
  * const time
  */
 retrieve() {}
 /*
  * Hashes string value into an integer that can be mapped to an array index
  * @param {string} str - the string to be hashed
  * @param {number} n - the size of the storage array
  * @return {number} - an integer between 0 and n
  */
 _hash(str, n) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3;

  return sum % n;
 }
}

const newHash = new HashTable(25);
newHash.insert('kras', 11);
newHash.insert('brit', 12);
newHash.insert('a', 12);
newHash.insert('alex', 12);
console.log(newHash);
