const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
  if(array1.includes(null || undefined) && array2.includes(null || undefined)){
    return undefined;
  }
  return array1.concat(array2);
}
module.exports = concatArray
