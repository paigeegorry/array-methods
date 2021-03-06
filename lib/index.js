function map(arr, fn) {
  const mappedArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      mappedArr[i] = fn(arr[i]);
    }
  }
  return mappedArr;
}

function filter(arr, fn) {
  const filteredArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      if(fn(arr[i])) {
        filteredArr.push(arr[i]);
      } 
    }
  }
  return filteredArr;
}

function findIndex(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      if(fn(arr[i])) {
        return i;
      }
    }
  }
  return -1;
}

function reduce(arr, fn, initial) {
  let i = 0;
  let acc = initial;
  if(!acc) {
    i = 1;
    acc = arr[0];
  }
  for(i; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      acc = fn(acc, arr[i]);
    }
  }
  return acc;
}

function every(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      if(fn(arr[i])) return true;
    }
  }
  return false;
}

module.exports = {
  map,
  filter,
  findIndex,
  reduce,
  every
};
