const students = [
    [
        { name: "Amit", marks: 85 },
        { name: "Neha", marks: 90 }
    ],
    [
        { name: "Rahul", marks: 78 },
        { name: "Priya", marks: 95 }
    ]
];

console.log("Complete multidimensional array:");
console.log(JSON.stringify(students, null, 2));

// Access individual elements
console.log("First student:", students[0][0].name);
console.log("Second student:", students[0][1].name);
console.log("Third student marks:", students[1][0].marks);
console.log("Fourth student:", students[1][1].name);
