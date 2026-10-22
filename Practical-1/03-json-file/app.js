
const fs = require("fs");

// Create a JSON object
const student = {
    name: "Daksh Gajjar",
    course: "B.Tech CSE",
    university: "Nirma University",
    semester: 5
};

// Store the JSON object in a file
fs.writeFileSync("data.json", JSON.stringify(student, null, 4));

console.log("JSON object stored successfully!");
