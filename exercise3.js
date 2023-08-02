function sumUntil(maxValue) {
    let number = 0;
    let sum = 0;
    while (number <= maxValue) {
        sum += number;
        number++;
    }
    return sum;
  }
  
  console.log(sumUntil(7));