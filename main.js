/* FreeCodeCamp */
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  Object.freeze(MATH_CONSTANTS.PI)
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();


/* -------------------------------------------------- */

  const magic = () => {
    return new Date();
  };
  /* ================================================= */


const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));


  /* ================================================= */

  // Only change code below this line
const increment = (number , value = 1) => number + value;
// Only change code above this line
