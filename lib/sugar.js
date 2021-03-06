// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {
  return Object.keys(object).length;
}

/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {
  

  smallestNum = Object.values(object);
  return Math.min(...smallestNum);

}

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  biggestNum = Object.values(object);
  return Math.max(...biggestNum);
}

/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
  const copiedObj = { ...object };
  return copiedObj;

}

/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {
  return object[key];

}

/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {
  const keyVal = Object.keys(object);
  return keyVal.some(element => key === element);
}

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {
  const valArr = Object.values(object);
  var result = valArr.reduce((c, v) => {
    if (!isNaN(v)) c.push(v);
    return c;
  }, []);
  return sumOfNum = result.reduce((a, b) => a + b, 0);
}

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {
  let invertedObject = {};
  Object.keys(object).forEach(key => {
    invertedObject[object[key]] = key;
  });
  return invertedObject;
}

/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) {

  const resultObj = {}
  for (let i = 0; i < arr.length; i++) {

    Object.assign(resultObj, arr[i]);
  }
  return resultObj;
}

// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) {
  let resultArr = [];
  for (let key in obj) {
    resultArr = Object.values(obj);
  }
  for (i = 0; i < resultArr.length; i++) {
    if (matcherFunc(resultArr[i]))
      return resultArr[i];
  }
  return null;

}

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) { 
  let everyArr;
  let count = 0;
  for(let key in obj){
    everyArr = Object.values(obj);
  }
  for(i=0 ; i<everyArr.length ; i++)
  {
    if(func(everyArr[i]))
    count++ ;
  }
   if(count === everyArr.length)
   return true;
   else 
   return false;
  }



/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) {
  let someArr;
  for(let key in obj){
    someArr = Object.values(obj);
  }
  for(i=0 ; i<someArr.length ; i++){
    if(func(someArr[i]))
    return true;
  }
  return false;
 }

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
