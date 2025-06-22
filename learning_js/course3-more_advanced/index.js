// just for the demo of displaying callback hell :)

function task_1() {
    setTimeout(() => {
        console.log("Task 1 complete");
    }, 3000);
}

function task_2() {
    setTimeout(() => {
        console.log("Task 2 complete");
    }, 2000);
}

function task_3() {
    setTimeout(() => {
        console.log("Task 3 complete");
    }, 1000);
}

function task_4() {
    setTimeout(() => {
        console.log("Task 4 complete");
    }, 10);
}


// bad demo: will not follow the time order :(
// task_1();
// task_2();
// task_3();
// task_4();

// trying to use callback!
function task_1WithCallback(callback) {
    setTimeout(() => {
        console.log("Task 1 complete");
        callback();
    }, 3000);
}

function task_2WithCallback(callback) {
    setTimeout(() => {
        console.log("Task 2 complete");
        callback();
    }, 2000);
}

function task_3WithCallback(callback) {
    setTimeout(() => {
        console.log("Task 3 complete");
        callback();
    }, 1000);
}

function task_4WithCallback(callback) {
    setTimeout(() => {
        console.log("Task 4 complete");
        callback();
    }, 10);
}

// task_1WithCallback(() => {
//     task_2WithCallback(() => {
//         task_3WithCallback(() => {
//             task_4WithCallback(() => {
//                 console.log("all complete");
//             });
//         });
//     });
// });


// fix: with promises
function walkdog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am walking dog");
        }, 3000);
    });
};

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("I am cleaning the kitchen");
        }, 2000);
    })
}

// walkdog().then(value => {console.log(value); return cleanKitchen() }).then(value => { console.log(value); }).catch(error => {console.log(error)});

async function todo_list() {
    try {
        const waitresult = await walkdog();
        console.log(waitresult);

        const cleanKitchen = await cleanKitchen();
        console.log(cleanKitchen);

        console.log("Finished");
    } catch (error) {
        console.log("F!")
    }
}

// todo_list();


const fruits = ["apple", "banana", "orange", "coconut"];
const json_strings = JSON.stringify(fruits);
console.log(fruits);
// a json string
console.log(json_strings);

// an object
const person =
        [
            {
                "name": "amy",
                "grades": 100,
                "school": "sjtu",
                "hobbies": ["1", "2", "3", "4"]
            }
        ]
const json_person = JSON.stringify(person);
console.log(person);

// it is a string!
console.log(json_person);

// fetch
fetch("demo1.json").then(response => response.json()).then(values => values.forEach(value => console.log(value)))