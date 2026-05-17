function convertToRoman(num) {

  const romanSymbols = [
    ['M',  1000],
    ['CM',  900],  // 900 = 1000 - 100 (write CM instead of DCCCC)
    ['D',   500],
    ['CD',  400],  // 400 = 500 - 100  (write CD instead of CCCC)
    ['C',   100],
    ['XC',   90],  // 90  = 100 - 10   (write XC instead of LXXXX)
    ['L',    50],
    ['XL',   40],  // 40  = 50 - 10    (write XL instead of XXXX)
    ['X',    10],
    ['IX',    9],  // 9   = 10 - 1     (write IX instead of VIIII)
    ['V',     5],
    ['IV',    4],  // 4   = 5 - 1      (write IV instead of IIII)
    ['I',     1]
  ];

  let romanResult = '';

  for (let index = 0; index < romanSymbols.length; index++) {

    const letters = romanSymbols[index][0]; 
    const symbolValue = romanSymbols[index][1];
	  
    while (num >= symbolValue) {
      romanResult += letters;   
      num -= symbolValue;       
    }

  }

  return romanResult;

}


console.log(convertToRoman(14));    
console.log(convertToRoman(798));   
console.log(convertToRoman(1994)); 
console.log(convertToRoman(4));     
console.log(convertToRoman(9));    
console.log(convertToRoman(40));   
console.log(convertToRoman(12345)); 

module.exports = convertToRoman;