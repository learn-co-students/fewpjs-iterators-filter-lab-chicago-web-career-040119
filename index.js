// If you have an array, but only want some of the elements in it--that's where filter() comes in!
// let arr = [1, 2, 3, 4, 5, 6];
// let even = [];
// for(var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) even.push(arr[i]);
// }
// // even = [2,4,6]

 // SAME AS//

//  let even = arr.filter(n => {
//   return n % 2 === 0;
// });
// // even = [2,4,6]
function findMatching (driversList, name) {
  //filter created a new array with all elements that pass the cond. in the callback fn
  return driversList.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();//if the driverName matches name than it will be added into the array
  });
}

function fuzzyMatch(driversList, nameIncomplete){
  return driversList.filter(function(driverName){
    return driverName.slice(0, nameIncomplete.length) /* slice the letters until nameIncomplete.length*/ === nameIncomplete;
  })
}

function matchName (driversList, driverName) {
  return driversList.filter(function(driver) {
    //ex: driver = {name: 'john'}
    return driver.name.toLowerCase() === driverName.toLowerCase()//object.key === driverName
  })
}
