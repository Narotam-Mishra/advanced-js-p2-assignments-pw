
/*

Create a simple polyfill for the Array.includes method by the name of customIncludes.

*/


// Define customIncludes method on Array prototype

Array.prototype.customIncludes = function (element) {
  // Loop through each element in the array
  for (let i = 0; i < this.length; i++) {
    // Check if the current element is equal to the element being searched for
    if (this[i] === element) {
      return true; // Element found, return true
    }
  }
  return false; // Element not found, return false
};

let arr = [5,4,7,6,3,1,2];

console.log(arr.customIncludes(7));
console.log(arr.customIncludes(9));