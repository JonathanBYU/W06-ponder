let courses = ["WDD131","WDD130","CSE110","CSE210"];

console.log(courses[0]);
console.log(courses[courses.length-1]);

for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

courses.forEach((item) => {
    console.log(item);
})

let course = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 3,
    instructor: "Brother Warner",
}

console.log(course.instructor)

// array of objects
let coursesArrayOfObjects = [
    {
        name: "Dynamic Web Fundamentals",
        code: "WDD131",
        credits: 2,
        instructor: "Brother Warner",
        assignments: [
            
        ]
    },
    {
        name: "Web Fundamentals",
        code: "WDD130",
        credits: 2,
        instructor: "Brother Warner",
    },
]

let body = document.querySelector('body');

coursesArrayOfObjects.forEach(course => {
    let courseDiv = `
        <div>
            <h2>${course.name}</h2>
            <p>${course.code}</p>
            <p>${course.credits}</p>
            <p>${course.instructor}</p>
        </div>
    `;
    body.innerHTML += courseDiv;
});

