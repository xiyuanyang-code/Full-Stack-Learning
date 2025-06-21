import {testfun} from "./mathutils.js"

// add greetings
let user_name = "not_entered_yet"
document.getElementById("submit for username").onclick = function() {
    user_name = document.getElementById("user_name").value
    document.getElementById("greetings").textContent = `Hello, ${user_name}`
}

// add radius
let radius

document.getElementById("submit for radius_input").onclick = function() {
    radius = document.getElementById("radius_input").value
    radius = Number(radius)
    document.getElementById("answer").textContent = `The area of this circle is ${Math.PI * (radius ** 2)}`
}

// add counting program
const decreaseBtn = document.getElementById("decreasebtn")
const resetBtn = document.getElementById("resetbtn")
const increaseBtn = document.getElementById("increasebtn")
const countlabel = document.getElementById("countlabel")
let count = 0

increaseBtn.onclick = function() {
    count++;
    countlabel.textContent = count;
};

decreaseBtn.onclick = function() {
    if (count == 0) {
        window.alert("WARNING! The count is 0, you cannot decrease it!");
    } else {
        count--;
        countlabel.textContent = count;
    }
};

resetBtn.onclick = function() {
    count = 0;
    countlabel.textContent = count;
};


const generate_num = document.getElementById("generate_random")
const generateBtn = document.getElementById("generate")

generateBtn.onclick = function() {
    let number_1 = Number(document.getElementById("inputnum_1").value)
    let number_2 = Number(document.getElementById("inputnum_2").value)

    if (isNaN(number_1)) number_1 = 0;
    if (isNaN(number_2)) number_2 = 0;

    const upperbound = Math.max(number_1, number_2)
    const lowerbound = Math.min(number_1, number_2)

    if (upperbound === lowerbound) {
        generate_num.textContent = upperbound
    }
    else {
        generate_num.textContent = Math.floor(
                lowerbound + Math.random() * (upperbound - lowerbound + 1))
    }
}

const mycheckBox = document.getElementById("mycheckbox")
const visabtn = document.getElementById("visabtn")
const mastercard = document.getElementById("mastercard")
const mysubmit = document.getElementById(`paycard`)
const subresult = document.getElementById(`subresult`)
const payresult = document.getElementById(`payresult`)

mysubmit.onclick = function() {
    if (mycheckBox.checked) {
        subresult.textContent = `Subscribed`
    } else {
        subresult.textContent = `Unsubcribed`
    }


    if (mastercard.checked) {
        payresult.textContent = `Mastercard`
    } else if (visabtn.checked) {
        payresult.textContent = `Visa`
    } else {
        payresult.textContent = `You have not selected yet!`
    }
}


// string methods
let username = "hello world"
const string_value = document.getElementById("string-method")
string_value.textContent = `The first letter: ${username.charAt(3)}`

let full_string = "hello world"

console.log(full_string.slice(1, 3))
console.log(full_string)

// method chaining

// let text = window.prompt("Input your string")
// text = text.trim().charAt(0).toUpperCase() + text.trim().slice(1).toLowerCase()
// console.log(text)


function test1(x) {
    console.log(`Input x value is ${x}`)
    x++;
    let y = 100
    console.log(`Now the x value in this function is ${x}`)
}

let x = 10
test1(x)
console.log(`Now the x outside the function is ${x}`)

// arrays in js
let numbers = [1, 2, 3, 4, 5]
console.log(numbers)

// ... to unpack all the value in array
console.log(...numbers)

// e.g.1 find the max value in an array
let max_value = Math.max(...numbers)
console.log(max_value)

// e.g.2 usage of spread operators
let original_username = "Hello world"
let new_username = [...original_username].join("-")
console.log(original_username)
console.log(new_username)

// rest parameters: receive multiple parameters in function as an array
// !kwargs in Python receive multiple parameters as an dictionary (like json file!)
function print_number(...numbers) {
    console.log(numbers)
    console.log(...numbers)
}
print_number(1, 2, 3, 4, 5)


function RollDice() {
    const dice_num = document.getElementById("dice-num").value;
    let value_array = [];
    for (let i = 0; i < dice_num; i++) {
        // generate random number from 0 to 6
        let random_number = Math.floor(Math.random() * 6) + 1
        // console.log(random_number)
        value_array.push(random_number)
    }

    console.log(value_array)

    // output on the screen
    const dice_result = document.getElementById("dice-result");
    dice_result.textContent = value_array.join(",")
}


// call back & not call back
// const hello = () => setTimeout(function() { console.log("Hello without callback");}, 3000);
// const goodbye = () => console.log("Goodbye without callback");

// function hello_with_callback(callback) {
//     setTimeout(function() {
//         console.log("Hello with callback");
//         callback()
//     }, 3000);
// }

// function goodbye_with_callback() {
//     console.log("Goodbye with callback")
// }

// console.log("This is the function without using callback:")
// hello()
// goodbye()

// console.log("This is the function using callback:")
// hello_with_callback(goodbye_with_callback)


// advanced usage with array
// function echo_number(value, index, array) {
//     console.log(`The value of this is ${value}`)
//     console.log(`The index is ${index}`)
//     console.log(`The whole array is ${array}`)
//     return value
// }

// function pow(element) {
//     return Math.pow(element, 2);
// }

// function is_odd(element, index, array) {
//     return element % 2 == 0;
// }

// let number = [];
// for (let i = 1; i <= 10; i++) {
//     number.push(i);
// }

// //* 1 forEach method: no return value
// value = number.forEach(echo_number)
// // no return value, it will return undefined
// console.log(value)

// // * 2 pow method: return an array
// console.log(number.map(pow))

// // .filter using a predicate for boolean return value, return an array
// console.log(number.filter(is_odd))

// // .reduce
// // 4 parameters: previous value(for recursion), current value, current index and array
// // !previous value is the return value for the previous element as the parameter
// function sum(previous_value, current_value, current_index, array) {
//     console.log(`Previous value is ${previous_value}`)
//     console.log(`current value is ${current_value}`)
//     console.log(`current index is ${current_index}`)
//     console.log(`The whole array ${array}`)
//     return current_value + previous_value
// }
// const sum_all = number.reduce(sum)
// console.log(sum_all)


// destructuring
let value_1 = 100, value_2 = 1003;
[value_1, value_2] = [value_2, value_1];
console.log(`${value_1}, ${value_2}`)


let colors = ["red", "blue", "yellow", "white", "dark green"];
const [color1, color2, color3, ...remainng] = colors
console.log(`${color1}`);
console.log(`${color2}`);
console.log(`${color3}`);
console.log(`${remainng}`);

// use {} for destructuring in objects


// OOP in javascripts: like struct in Cpp
// person_1 = {
//     firstname: "hello word",
//     lastname: "wow",
//     is_male: true,
//     final_answer: this.lastname,
// };

// console.log(person_1.firstname)

// constructor is js
function Student(name, gender, id, grades) {
    this.name = name;
    this.gender = gender;
    this.id = id;
    this.grades = grades;
}

const student_1 = new Student("james", "male", 123456, 100);
console.log(student_1);

// modified to be a class in ES6
class Student_n {
    static school = "sjtu"
    constructor(name, gender, id, grades) {
        this.name = name;
        this.gender = gender;
        this.id = id;
        this.grades = grades;
    }

    // !gettlers and settlers, for grabage value processing this private value
    set grades(new_grades) {
        if (new_grades < 105) {
            // private property
            this._grades = new_grades;
        } else {
            console.log(`Grades is too high!`)
        }
    }

    get grades() {
        return `${this._grades} s`;
    }

    // several methods in OOP
    display_student() {
        console.log(`This is a student!`);

        if (this.gender == `male`) {
            console.log(`He is a boy`);
        } else if (this.gender == `female`) {
            console.log(`She is a girl`);
        } else {
            console.log(`Emmm, something strange.`)
        }

        console.log(`ID: ${this.id}`)
        console.log(`Grades: ${this.grades}`)
    }

    static show_school() {
        console.log("It is sjtu!")
    }
}

const student_2 = new Student_n("amy", "female", 123455, 99);
console.log(student_2);
student_2.display_student();

// undefined
console.log(student_2.school);
// static methods which belong to classes
Student_n.show_school();
console.log(Student_n.school);

// class inheritance
class freshman extends Student_n {
    constructor(name, gender, id, grades, major) {
        super(name, gender, id, grades);
        this.major = major;
    }
}

const student_3 = new freshman("jack", "male", 1234, "90", "ai");
console.log(student_3);
student_3.display_student();

// destructuring for objects
console.log(student_1);

// !...others collecting all the parameters into objects
function display_2({name, gender, id, ...others}) {
    console.log(`student name: ${name}`);
    console.log(`student gender: ${gender}`);
    console.log(`student id: ${id}`);
    console.log(Object.keys(others));
}
display_2(student_1);


// date in javascripts
const date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMonth());
console.log(date.getTimezoneOffset());


// !closure in javascripts
// message is private, which cannot be accessed outside the variable scope, while the inner function has the accessment!
function outer() {
    let message = "hello"
    function inner() {
        console.log(message);
    }

    inner();
}
outer();

// closure for state maintenence
function create_counter(){
    let count = 0;
    function inner_increment(){
        count ++;
        console.log(count);
    }

    function get_count(){
        return count;
    }
    return {inner_increment, get_count};
}

// returns an object
const counter = create_counter();
for(let i = 1; i <= 10; i++){
    counter.inner_increment();
    console.log(`counting: ${counter.get_count()}`);
}

testfun();