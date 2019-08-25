// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
 const strA = stringA
  .replace(/[^\w]/g, '')
  .toLowerCase()
  .split('')
  .sort()
  .join('');
 const strB = stringB
  .replace(/[^\w]/g, '')
  .toLowerCase()
  .split('')
  .sort()
  .join('');

 return strA === strB;
 // or
 //  const strA = stringA.replace(/[^\w]/g, '').toLowerCase();
 //  const strB = stringB.replace(/[^\w]/g, '').toLowerCase();

 //  return (
 //   strA
 //    .split('')
 //    .sort()
 //    .join('') ===
 //   strB
 //    .split('')
 //    .sort()
 //    .join('')
 //  );
}

// 2nd sol:
// function anagrams(stringA, stringB) {
//  const strA = stringA.replace(/[^\w]/g, '').toLowerCase();
//  const strB = stringB.replace(/[^\w]/g, '').toLowerCase();
//  const newObj1 = {};
//  const newObj2 = {};

//  function iter(str, obj) {
//   for (let el of str) {
//    obj[el] = obj[el] + 1 || 1;
//   }
//   //   console.log(obj);
//  }

//  iter(strA, newObj1);
//  iter(strB, newObj2);

//  if (Object.keys(newObj1).length !== Object.keys(newObj2).length) {
//   return false;
//  }

//  console.log(newObj2['r']);
//  for (let i in newObj1) {
//   // console.log(i) // key
//   if (newObj1[i] !== newObj2[i]) {
//    return false;
//   }
//  }
//  return true;
// }

module.exports = anagrams;

// orig sol:

// function anagrams(stringA, stringB) {
//  const aCharMap = buildCharMap(stringA);
//  const bCharMap = buildCharMap(stringB);

//  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//   return false;
//  }

//  for (let char in aCharMap) {
//   if (aCharMap[char] !== bCharMap[char]) {
//    return false;
//   }
//  }

//  return true;
// }

// function buildCharMap(str) {
//  const charMap = {};

//  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//   charMap[char] = charMap[char] + 1 || 1;
//  }

//  return charMap;
// }
