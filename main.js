var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let cat = 0
    let dog = 0
    let a = 4;
    let b = 5;
    if(humanYears<=1){
      cat=cat + 15;
      dog = dog + 15;
    }else if(humanYears = 2){
      cat = cat + 24;
      dog = dog + 24;
    }else if (humanYears>2){
      cat = 24 + (humanYears-2)*a
      dog = 24 + (humanYears-2)*b
    }
    return [humanYears,cat,dog];
  }
  console.log(humanYearsCatYearsDogYears(10))