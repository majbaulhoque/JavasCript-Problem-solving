let array = [52, 86, 96, 32, 25, 12, 2, 100, 99];

let findTheMaxNumber = Math.max(...array)

const filter = array.filter(n => n === findTheMaxNumber);
console.log(filter)