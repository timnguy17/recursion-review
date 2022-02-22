// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //input- array obj
  //output - string

  var result = '';

  //create result string to return
  //if string
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }
  // if number
  if (typeof(obj) === 'number') {
    return obj.toString();
  }
//   //if boolean
  if (typeof(obj) === 'boolean') {
    return obj.toString();
  }
//   //if null
  if (obj === null) {
    return 'null';
  }
  //if undefined
  if (obj === undefined) {
    return;
  }

 //if array
  if ( Array.isArray(obj)) {
    //if arr length is 0 -- edge case
    if (obj.length === 0) {
      //return empty arr
      return '[]';
    }
    //otherwise
    //add opening bracket  to string
    result += '[';
      //then iterate through each value
      obj.forEach(function(item) {
        //call stringifyJSON on each value
        result += stringifyJSON(item) + ',';

      });
      //Remove the comma
      result = result.substring(0, result.length - 1);
      //add closing bracket to string
      result += ']';
      //return result
      return result;
  }

  //if object
  //check if obj is obj and not array
  if ( typeof obj === 'object' && !Array.isArray(obj)) {
    //return empty obj string
    if ( Object.keys(obj).length === 0){
      return '{}';
    }
    //otherwise
      //add opening curly brace
      result += '{'

      for (var key in obj){
        // iterate over each value in obj
        //call stringifyjson on each key, call stringify JSON on each vlaue
        if(obj[key] === undefined) { return '{}' }
        result += stringifyJSON(key) + ':';
        result += stringifyJSON(obj[key]) + ','
      }

      result = result.substring(0, result.length - 1);
      //add closing bracket
      result += '}'
      //return result
      return result;
  }

//   return result;
};

