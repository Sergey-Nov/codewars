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

  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const {today :highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES; 
  
  // Only change code above this line
  /* =================================================== */

  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
  const {today: {low: lowToday,high: highToday}} = LOCAL_FORECAST  
  
  
  // Only change code above this line

  /* ===================================================== */

  const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b,...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
/* ========================================================= */
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max,min}) => (max + min) / 2.0; 
// Only change code above this line

/* =========================================================== */
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  
    const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);