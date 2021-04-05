const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function(x, i, self) {
        return self.indexOf(x) === i;
    });

console.log(result);




function isLeapYear(year){
  if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let Year_20202 = 2020;
if(isLeapYear(Year_20202)){
  console.log(Year_20202 + '年はうるう年です');
}else{
  console.log(Year_20202 + '年はうるう年ではありません');
}

let Year_2021 = 2021;
if(isLeapYear(Year_2021)){
  console.log(Year_2021 + '年はうるう年です');
}else{
  console.log(Year_2021 + '年はうるう年ではありません');
}




