// let str : string = "123";
// let num : number = Number.parseInt(str);
// num += 77;
// console.log(num);

let str2 : unknown = "123";
console.log(str2);

let num2 : number = <number>str2 + 50;
console.log(num2)