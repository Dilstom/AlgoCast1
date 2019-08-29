class Stack {
 constructor() {
  this.storage = '';
 }

 add(value) {
  // this.storage += (value)
  this.storage = this.storage.concat('***', value);
 }
 pop() {
  // get the index of a last str after '***'
  const last = this.storage.lastIndexOf('***') + 3; // 13
  // save the last/popped str to return in later
  const removed = this.storage.substring(last); // sbstring doesn't mutate original str;
  console.log('removed: ', removed);
  // create new string wihout the last str and its '***'
  const newC = this.storage.substring(0, this.storage.lastIndexOf('***'));
  // update storage
  this.storage = newC;
  // return removed item
  return removed;
 }

 size() {
  return this.storage.length;
 }
}

const newS = new Stack();
newS.add('hi');
newS.add('hi');
newS.add('hi');
newS.pop();
// newS.pop()
console.log(newS.size());
console.log(newS);
