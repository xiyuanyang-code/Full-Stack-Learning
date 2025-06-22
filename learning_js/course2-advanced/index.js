// still empty here
// update on 2025-06-22

// DOM = document object model
console.dir(document)

// change some settings for the web page
// document.title = "another title"
// document.body.style.backgroundColor = "blue"
const greetings = document.getElementById("greetings");
const user_name = "test";
greetings.textContent += (user_name == "" ? `guest` : user_name);


// element selector

const fruit = document.getElementsByClassName("fruit");
fruit[0].textContent = "what is that?";
fruit[1].style.backgroundColor = "blue";

// using for loops
// !for-in and for-of
// for...in iterates over property names (keys) of an object, which for an array-like HTMLCollection gives you the indices as strings ('0', '1', etc.)
// for...of iterates over property values (the actual elements)

// for (let single_fruit of fruit) {
//     single_fruit.textContent = "hello world"
// }
console.log(fruit);

// convert html collections to an array and using forEach function
function echo(value) {
    console.log(`value is ${value.textContent}`);
}
Array.from(fruit).forEach(echo);

const header = document.getElementsByTagName("h1")
console.log(Array.from(header))

// query selector
const element_1 = document.querySelector(".fruit");
console.log(element_1.textContent);


// DOM navigation
const element_2 = document.getElementById("fruits");
const first_child = element_2.firstElementChild;
const sibiling = element_2.nextElementSibling;
const last_child = element_2.lastElementChild;

console.log(first_child.textContent);
console.log(last_child.textContent);
console.log(sibiling.textContent);
// console.log(element_2.nextElementSibling.firstElementChild.textContent);
console.log(element_2.nextElementSibling.previousElementSibling.textContent);
console.log(element_2.children);
console.log(element_2.parentElement);

// Add HTML elements
const h1_new = document.createElement("h1");
const new_id = "just a test"
h1_new.textContent = "I like pizza";
h1_new.id = new_id;
// you can add more styles and properties here!

// insert into the DOM structure
// ! using append and prepend
document.body.append(h1_new);
document.body.prepend(h1_new);
document.getElementById("dessert").append(h1_new);

// or using the insertbefore method
document.body.insertBefore(h1_new, document.getElementById("dessert"));


// remove HTML elements
// append as its child
const all_childs = document.getElementById("dessert").children;
console.log(all_childs);
// document.getElementById("dessert").removeChild(document.getElementById(new_id));
console.log(all_childs);

// * a small demo: adding ordered list
const new_fruit = document.createElement("li");
new_fruit.textContent = "coconut";
new_fruit.id = "coconut";
// assume we need to insert this after the apple in the list
document.getElementById("orderlist-demo").insertBefore(new_fruit, document.getElementById("apple"));
// or we can use the method below for more flexible control
const ListItems = document.querySelectorAll("#orderlist-demo li")
// console.log(ListItems);
document.getElementById("orderlist-demo").insertBefore(new_fruit, ListItems[2]);


// add event listener
const myBox = document.getElementById("chose-box");

function changeColor(event) {
    const clickedBox = event.target;
    if (clickedBox.style.backgroundColor === "black" ||
        clickedBox.style.backgroundColor === "rgb(0, 0, 0)" ||
        clickedBox.style.backgroundColor === "#000000") {
        clickedBox.style.backgroundColor = "#00ffff";
    } else {
        clickedBox.style.backgroundColor = "black";
    }
}

myBox.addEventListener("click", changeColor);


// keyup and keydown
document.addEventListener("keydown", event => {console.log(event);});
// a small demo: controller
// still using my box
document.addEventListener("keydown", event => {
    myBox.textContent = "?";
})

document.addEventListener("keyup", event => {
    myBox.textContent = "!";
})

let x = 0;
let y = 0;
let move = 10;

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        console.log(event);
        // start moving
        switch (event.key) {
            case "ArrowUp":
                y -= move;
                break;
            case "ArrowDown":
                y += move;
                break;
            case "ArrowLeft":
                x -= move;
                break;
            case "ArrowRight":
                x += move;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})


function hide_context(){
    const hidden_text = document.getElementById("hidden-text");
    console.log(hidden_text.style.display);
    if(hidden_text.style.display === `none`){
        hidden_text.style.display = "block";
    }else{
        hidden_text.style.display = "none";
    }
    console.log(hidden_text.style.display);
}

function hide_context_2(){
    const hidden_text = document.getElementById("hidden-text");
    console.log(hidden_text.style.visibility);
    if(hidden_text.style.visibility === `hidden`){
        hidden_text.style.visibility = "visible";
    }else{
        hidden_text.style.visibility = "hidden";
    }
}

// adding classlist & remove
const my_button = document.getElementById("mbtn-1");
console.log(my_button.classList);

// adding properties via adding new "class"
// my_button.classList.add("enabled");

// adding properties when hovering
my_button.addEventListener("mouseover", event => {
    event.target.classList.add("enabled");
})
my_button.addEventListener("mouseleave", event =>{
    event.target.classList.remove("enabled");
})
console.log(my_button.classList);

// ! toggle: remove if present, add if not.
// replace(oldClass, newClass)
// contain(): return true or false


