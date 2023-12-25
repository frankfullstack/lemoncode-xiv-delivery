console.log("************** DELIVERABLE 04 *********************");

/*******************
 * Read Books *
 *******************/

interface Book {
    title: string;
    isRead: boolean;
}

const books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

const isBookRead = (books: Book[], titleToSearch: string): boolean => {
    if (!titleToSearch || titleToSearch.length == 0) return false; // early exit
    return books.find(book => book.title === titleToSearch)?.isRead;
}

const BOOKS_TO_TEST = ["Canción de hielo y fuego", "Canción de fuego y hielo", "Devastación"];

console.log(`The book - Devastación - is ${isBookRead(books, "Devastación") ? 'read' : 'not read or doesn\' exist'}`);
console.log(`The book - Canción de hielo y fuego - is ${isBookRead(books, "Canción de hielo y fuego")? 'read' : 'not read or doesn\' exist'}`);
console.log(`The book - Canción de fuego y hielo - is ${isBookRead(books, "Canción de fuego y hielo") ? 'read' : 'not read or doesn\' exist'}`);
