// Code your solution here
function findMatching(array, name){
  return array.filter(d => {
    return d.toLowerCase() === name.toLowerCase()
  })
}


function fuzzyMatch(array, name){
  let lengthOfName = name.length;
 return array.filter(function (driverName) {
   return driverName.slice(0, lengthOfName) === name;
 });
}

function matchName(drivers, string){
  return drivers.filter( d => {
    return d.name.toLowerCase() === string.toLowerCase()
  })
}
