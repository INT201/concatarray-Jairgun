const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
  const array3 = array1.concat(array2);
  if((array1,array2) == null || (array1,array2) == undefined){return undefined}
  else return array3;
}
module.exports = concatArray
