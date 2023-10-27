function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  function hasTwoElementsWithSum(array, target):
    for i from 0 to (length of array - 1):
        complement = target - array[i]
        for j from (i + 1) to (length of array - 1):
            if array[j] is equal to complement:
                return true
    return false
*/

/*
  Add written explanation of your solution here
  iterate over the array of numbers 
  to compare each element with the complement of the target 
  and returns true if a pair of elements is found that sum up to the target, 
  and false otherwise.
  (for example: if our number is 5, and the target is 10, the complementary number is 5)







*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
