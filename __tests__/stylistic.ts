// eslint-disable-next-line @stylistic/semi
console.log("Hello")

const op = "add";
let number = 10;
switch (op) {
case "add":
  number += number;
  break;
case "subtract":
  number -= number;
  break;
}
console.log(`result = ${number}`);
