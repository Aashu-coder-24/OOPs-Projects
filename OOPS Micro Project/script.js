class Library{
    constructor(){
        this.books = [];
    }

    addBook(books){
        this.books.push(...books)
    }

    listAllBooks(){
        this.books.forEach(function(book , index){
            console.log(`${index + 1}:- ${book.name} by ${book.author}`);
        });
    }
}

class Book{
    constructor (name , isbn , price , author){
        this.name = name;
        this.isbn = isbn;
        this.price = price;
        this.author = author;
        this.readStatus = false;
    }

    info(){
        console.log(`${this.readStatus ? "✅" : "❌"} ${this.name} is written by ${this.author} and you have ${this.readStatus ? "read it" : "not read it fully"} and is available on amazon at a price of ${this.price}.`)
    }

    changeStatus(){
        this.readStatus = !this.readStatus;
    }
}

// jhansiLibrary.addBook("I am you")
// jhansiLibrary.addBook("Last of us")
// jhansiLibrary.listAllBooks();

let b1 = new Book("Wealth is life", "23g4665vvjkbkbr", 2000, "Ashutosh")
let b2 = new Book("The last of us", "2354hjvj5vg2gk5r", 2000, "Ashish")
let b3 = new Book("Adventourous", "23gr4g25hv5", 2000, "Abbas")
let jhansiLibrary = new Library();
jhansiLibrary.addBooks([b1 , b2 , b3])
