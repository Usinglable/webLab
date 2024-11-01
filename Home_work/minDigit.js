function minDigit(x) {
    if (x < 0) {
      throw new Error('Число не может быть отрицательным');
    }
  
    let min = 9;
  
    while (x > 0) {
      let digit = x % 10;
      if (digit < min) {
        min = digit;
      }
      x = Math.floor(x / 10);
    }
  
    return min === 9 ? 0 : min; 
  }
  
  console.log(minDigit(91827));
console.log(minDigit(3056));
console.log(minDigit(123456));
console.log(minDigit(9081));
console.log(minDigit(7654321));
