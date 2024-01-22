function Book(title, author) {
  this.author = author;
  this.title = title;
  this.getDetails = function () {
    return `Название: ${this.title}, Автор: ${this.author} `
  }
}

const book1 = new Book('title', 'author')
console.log(book1.getDetails());

Book.prototype.isSameAuthor = function (title, author) {
  return author === this.author;
}

console.log(book1.isSameAuthor('title', 'author'));