// Code your solution here
function findMatching(driverArray, string) {
    return driverArray.filter(driver => driver.toLowerCase()=== string.toLowerCase());    
  
//   const result = driverArray.filter(driver => driver.toLowerCase()=== string.toLowerCase());
//   return result <(this could work as well)
 
}
   
function fuzzyMatch(driverArray, string)  {
    return driverArray.filter(driver => driver.startsWith(string))
}

function matchName(driverObjects, string) {
   
   return driverObjects.filter(driverObject => driverObject.name === string)
}