
exports.min = function min (array) {
  return !array||array.length<1 ? 0 : array.reduce((prev,curr)=>{
    return prev<curr ? prev : curr;
  }, array[0])
}

exports.max = function max (array) {
  return !array||array.length<1 ? 0 : array.reduce((prev,curr)=>{
    return prev>curr ? prev : curr;
  }, array[0])
}

exports.avg = function avg (array) {
  return !array||array.length<1 ? 0 : array.reduce((prev,curr, index)=>{
    return index==array.length-1 ? (prev+curr)/array.length : prev+curr;
  }, 0)
}
