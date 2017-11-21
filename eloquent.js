//Exercises

//Minimum
function minimumNumber(val1, val2){
  var mini = (Math.min(val1, val2))
  console.log(mini);
}
minimumNumber(356, 80);

//Recursion
function isEven(n) {
  if(n % 2 === 0){
    return (true);
  } else if (n % 2 === 1){
    return(false);
  } else {
    return isEven(Math.abs(n - 2));
  }
}


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


//Bean counting
function countBs(str){
  let bCount = 0;
  strArray = str.split("");
  for (i=0; i<strArray.length; i++){
    if (strArray[i] === "B"){
       bCount += 1;
    }
}
return bCount;
}

function countChar(string, char){
  let charCount = 0;
  stringArray = string.split("");
  for (i=0; i<stringArray.length; i++){
    if (stringArray[i] === char){
       charCount += 1;
    }
}
return charCount;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

// Only just made it with 4 mins the spear from my time box of threee hours
