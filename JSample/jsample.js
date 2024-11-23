const item = {
  picture: "macbook.webp",
  title: "MacBook Air M2 - 8GB RAM, 512GB SSD - Space Gray - Apple",
  price: "$1000",
};

let pic = document.getElementById("picture");
let title = document.getElementById("title");
let price = document.getElementById("price");
let btn = document.getElementById('btn');

let img = document.createElement("img");
img.setAttribute("src", item.picture);
img.setAttribute("style", "width:200px;height:200px;");
pic.appendChild(img);

title.innerHTML = item.title;
price.innerHTML = item.price;

function addToCart(){
  title.classList.toggle("highlight")
}

btn.addEventListener('click', addToCart);

const a = 10;
const b = "10";

console.log("a=", a, "b=", b);
console.log("a==b", a == b);
console.log("a===b", a === b);
console.log("a!=b", a != b);
console.log("a!==b", a !== b);
console.log("a>b", a > b);
console.log("a<b", a < b);
console.log("a<=b", a <= b);
console.log("a>=b", a >= b);

const x = true;
const y = false;
console.log("x=", x, "y=", y);
console.log("x||y", x || y);
console.log("x&&y", x && y);
console.log("!x", !x);
console.log("!y", !y);

const hello = "Hello Class.";
for (let char of hello) {
  console.log(char);
}

const student = {
  name: "adam",
  age: 24,
  grades: "A",
  course: "javascript",
};

for (let prop in student) {
  console.log(prop, student[prop]);
}

// for (let i = 1; i < 100; i++) {
//   //console.log(i * 2);
// }

//guess1();
function guess1() {
  let answer = Math.floor(Math.random() * 20);
  let input = prompt("Enter a number between 0 and 20:");
  while (input != answer) {
    input = prompt("Incorrect! Enter a number between 0 and 20:");
  }
  alert(`Correct! The number is ${answer}`);
}

let str1 = "MacBook";
let str2 = "Air";
let str3 = str1.concat(" ", str2);
console.log(str3);

console.log(str3.length);

function username(){
    let name = prompt("Enter your full name:")
    name = name.split(" ").join("");
    alert(`Great! Your username is @${name}${name.length}`)
}


let fruits = ["Apple", "Banana", "Cherry"];
let vegetables = [];
vegetables.push("Carrot");
vegetables.push("Brocolli");
vegetables.push("Spinach");

console.log(vegetables)

fruits.push("Mango")
console.log(fruits)
console.log(fruits.pop());
delete fruits[1]
console.log(fruits)
console.log(fruits.unshift("Grapes"));
console.log(firstVegetable = vegetables.shift());

let nested_array = [[1, 2, 3],[4, 5, 6],[7, ['a','b','c'],8, 9]];

console.log(nested_array.flat(1))

let new_array = [5,7,9,12].map(element => element*10)
console.log(new_array)


let arr = [12,14,65,85,23,54,76,1];
let avg = 0
for (let i of arr){
  avg += i
}

console.log(`Average of ${arr} is ${avg/arr.length}`)
let prices = [100,150,250,300,350,420]
let new_price = []
let i = 0
while (i < prices.length){
  new_price[i] = prices[i] * .75;
  i = i+1;
}

console.log(new_price);


let ul = document.getElementsByTagName("ul");
console.log(ul[0].children);

function createSection(){
  const section = document.createElement("section");
  section.classList.add("new-section");
  const h2 = document.createElement("h2");
  h2.innerHTML="New Section";
  const p = document.createElement("p");
  p.innerHTML="This is a dynamically added section.";

  section.appendChild(h2);
  section.appendChild(p);

  const div = document.getElementById("content");
  div.appendChild(section);
}

function insertHeadingBefore(){
  createSection();
  const h3 = document.createElement("h3");
  h3.innerHTML = "Inserted Heading";
  const section = document.getElementsByTagName("section")[0];
  const p = section.getElementsByTagName("p")[0];
  section.insertBefore(h3,p);
}

insertHeadingBefore();

function modifyAttributes(){
  createSection();
  const section = document.querySelector(".new-section");
  section.id = "main-section";
  const firstP = section.querySelector("p");
  firstP.className="highlighted-text";

  console.log(section.id);
  console.log(section.className);
  console.log(firstP.className);
}

modifyAttributes();

function updateUser(){
  const user = document.querySelector(`[data-user-id="456"]`);
  console.log("Role Before:", user.dataset.role);
  user.dataset.role = "admin";
  console.log("Role After:", user.dataset.role);
}

updateUser();