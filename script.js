

function convertToRoman(num) {

  const romanSymbols = [
    ['M',  1000],
    ['D',   500],
    ['C',   100],
    ['L',    50],
    ['X',    10],
    ['V',     5],
    ['I',     1]
  ];

  let romanResult = '';

  
  for (let index = 0; index < romanSymbols.length; index++) {

    const letter = romanSymbols[index][0]; // e.g. 'M'
    const symbolValue = romanSymbols[index][1]; // e.g. 1000

    while (num >= symbolValue) {
      romanResult += letter;   
      num -= symbolValue;      
    }

  }

  return romanResult;

}

console.log(convertToRoman(14));   
console.log(convertToRoman(798)); 

module.exports = convertToRoman;