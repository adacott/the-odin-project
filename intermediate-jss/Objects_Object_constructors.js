function Book(title, author, pages, read) {
    this.title = title;
    this.marker = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        if (this.read) {
            str = `${title} by ${author}, ${pages} pages, has been read`;
        }
        else {
            str = `${title} by ${author}, ${pages} pages, not read yet`;
        }
        return str;
    }
}

const book1 = new Book("The Wise Man's Fear", "Patrick Rothfuss", 1120, true);

console.log(book1.info()); // testing object

console.log(Object.getPrototypeOf(book1) === Book.prototype); // learning about prototypes

// All objects inherit functions and information from the prototype object:
Book.prototype.sayHello = function () {
    console.log("Hello, i'm a book!");
}

Book.prototype.rating = "Great";

book1.sayHello();
console.log(book1.rating);


// Object.getPrototypeOf(Book.prototype) === Object.prototype;
console.log(book1.valueOf()); // returns the object parameters and functions
console.log(Object.prototype.hasOwnProperty("valueOf")); // true

// Demonstration of prototypal inheritance
function Person(name) {
    this.name = name
}

Person.prototype.sayName = function () {
    console.log(`Hello, I'm ${this.name}!`)
}

function Player(name, marker) {
    this.name = name
    this.marker = marker
}

Player.prototype.getMarker = function () {
    console.log(`My marker is '${this.marker}'`)
}

// Object.getPrototypeOf(Player.prototype) should
// return the value of "Person.prototype" instead
// of "Object.prototype"
Object.getPrototypeOf(Player.prototype) // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype)
Object.getPrototypeOf(Player.prototype) // returns Person.prototype

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')

player1.sayName() // Hello, I'm steve!
player2.sayName() // Hello, I'm also steve!

player1.getMarker() // My marker is 'X'
player2.getMarker() // My marker is 'O'