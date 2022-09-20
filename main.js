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

/* =================================================== */
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }

  /* ================================================= */

  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

/* =================================================== */
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today,tomorrow} = HIGH_TEMPERATURES;
  
  
  // Only change code above this line
  /* ================================================== */

  