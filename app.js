const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
let primeArray =[];

for (let i = 0; i < numbers.length; i++) {

    let count = 0;
    for (let j=1; j<= i ; j++){
        if (numbers[i] % j == 0){
            count +=1;
    }
}

    if (count == 2){
        primeArray.push(numbers[i]);
    }
}
console.log(primeArray)
let new = primeArray.sort();
console.log(new[0])
console.log(new[new.length-1])
console.log(new[0] + new[new.length-1])