// Code your solution here
function findMatching(driverArray, string) {
  
    const result = driverArray.filter(driver => driver.toLowerCase === string.toLowerCase);
    return result
}
    // var n = str.startsWith("Hello");

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

