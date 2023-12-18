//Exercise 1: Roman to Integer

const romanToInt = function (s) {
  const romanInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanArray = s.split("");
  console.log(romanArray);
  let resultRoman = 0;
  for (let i = 0; i < romanArray.length; i++) {
    const firstNum = romanInt[romanArray[i]];
    const secNum = romanInt[romanArray[i + 1]];
    console.log(firstNum);
    console.log(secNum);
    if (secNum > firstNum) {
      resultRoman = resultRoman - firstNum;
    } else if (secNum <= firstNum || secNum == undefined){
    resultRoman = resultRoman + firstNum;
    }
    console.log(resultRoman)
  }
  console.log(resultRoman);
  return resultRoman;
};

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994
