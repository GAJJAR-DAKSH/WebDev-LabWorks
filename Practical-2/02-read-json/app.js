const fs = require("fs");

const data = fs.readFileSync("data.json", "utf8");
const jsonData = JSON.parse(data);

console.log("Content of JSON file:");
console.log(jsonData);
