const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
  for (const value of array1) {
    if (value == null || value == undefined) {return array2}
  }
  for (const value of array2) {
    if (value == null || value == undefined) {return array1}
  }
  return array1.concat(array2)
}
module.exports = concatArray
