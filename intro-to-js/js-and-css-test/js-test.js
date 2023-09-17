// Example 1:
// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);


// Example 2:
// const container = document.querySelector("#container");

// const content = document.createElement("p");
// content.classList.add("content");
// content.textContent = "Hey i'm red!";
// content.style.cssText = "color: red";

// container.appendChild(content);


// // Example 3:
// const container = document.querySelector("#container");

// const content = document.createElement("h3");
// content.classList.add("content");
// content.textContent = "I'm a blue h3!";
// content.style.cssText = "color: blue";

// container.appendChild(content);

// Example 4:
// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");

// content.style.cssText = "color: blue";
// content.style.cssText = "border: 2px solid Black";
// content.style.cssText = "background-color: pink";

// const h1 = document.createElement("h1");
// h1.textContent = "I'm in a div!";

// const p = document.createElement("p");
// p.textContent = "ME TOO!";

// content.appendChild(h1);
// content.appendChild(p);
// container.appendChild(content);

// function alertFunction() {
//     alert("YAY! YOU DID IT!");
// }

// // METHOD 2
// btn.onclick = alertFunction;

// METHOD 3
// btn.addEventListener('click', alertFunction);

// To create a button and attach it to document for callbacks below:
// const btn = document.createElement("button");
// btn.classList.add("onClick-test");
// btn.textContent = "Click me!";

// const container = document.querySelector("#container");
// container.appendChild(btn);

// Simply selecting an already created button works too:
// const btn = document.querySelector(".onclick-test");

// This gives pointer information:
// btn.addEventListener('click', function (e) {
//     console.log(e);
// });

// This will change the button's background to blue when clicked
// This works because e is causing it to target itself with the callback
// btn.addEventListener('click', function (e) {
//     e.target.style.background = 'blue';
// });

// Example on selecting and adding listeners to multiple nodes:
//
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        console.log(button.id);
    });
});

buttons.addEventListener("click", () => {
    console.log(buttons.id);
});


