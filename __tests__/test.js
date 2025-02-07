let name = "John";
// eslint-disable-next-line valid-typeof
if (typeof name === "STRING") {
  // eslint-disable-next-line no-self-assign
  name = name;
}
console.log(name);
