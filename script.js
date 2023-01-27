let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function main() {
  addBookToLibrary(new Book("X", "Y", 130, true));
  addBookToLibrary(new Book("Hobbit", "James", 123, false));
  addBookToLibrary(new Book("Martin", "asd", 500, false));
  renderBookList();
}

function renderBookList() {
  for (let book of myLibrary) {
    displayBook(book);
  }
}

function displayBook(book) {
  const bookList = document.querySelector(".BookListDisplay");
  const newBookBox = document.createElement("div");
  const newBookTitle = document.createElement("div");
  newBookTitle.textContent = book.title;
  const newBookAuthor = document.createElement("div");
  newBookAuthor.textContent = book.author;
  const newBookPages = document.createElement("div");
  newBookPages.textContent = book.pages;
  const newBookRead = document.createElement("div");
  newBookRead.textContent = book.read;
  newBookBox.appendChild(newBookTitle);
  newBookBox.appendChild(newBookAuthor);
  newBookBox.appendChild(newBookPages);
  newBookBox.appendChild(newBookRead);
  bookList.appendChild(newBookBox);
}

main();
