const student = {
    name: "Daksh Gajjar",
    course: "B.Tech CSE",
    semester: 5,
    subjects: ["JavaScript", "Node.js", "DBMS"]
};

console.log("Student JSON Object:");
console.log(JSON.stringify(student, null, 2));
