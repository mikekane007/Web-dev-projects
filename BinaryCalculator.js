// Function to add two binary strings
function addBinary(a, b) {

    let x = parseInt(a, 2);
    let y = parseInt(b, 2);
    let z = x + y;
    let result = z.toString(2);
    return result;
  }
  
 // Function to find the difference in two binary strings
  function subtractBinary(a, b) {
    let x = parseInt(a, 2);
    let y = parseInt(b, 2);
    let z = x - y;
    let result = z.toString(2);
    return result;
  }
  
  // Function to multiply two binary strings
  function multiplyBinary(a, b) {
    let x = parseInt(a, 2);
    let y = parseInt(b, 2);
    let z = x * y;
    let result = z.toString(2);
    return result;
  }
  
  // Functions to find the dividend among two binary strings
  function divideBinary(a, b) {
    let x = parseInt(a, 2);
    let y = parseInt(b, 2);
    let z = Math.floor(x / y);
    let result = z.toString(2);
    return result;
  }
  