console.log("************** DELIVERABLE 04 *********************");
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
var isBookRead = function (books, titleToSearch) {
    var _a;
    if (!titleToSearch || titleToSearch.length == 0)
        return false; // early exit
    return (_a = books.find(function (book) { return book.title === titleToSearch; })) === null || _a === void 0 ? void 0 : _a.isRead;
};
var BOOKS_TO_TEST = ["Canción de hielo y fuego", "Canción de fuego y hielo", "Devastación"];
console.log("The book - Devastaci\u00F3n - is ".concat(isBookRead(books, "Devastación") ? 'read' : 'not read or doesn\' exist'));
console.log("The book - Canci\u00F3n de hielo y fuego - is ".concat(isBookRead(books, "Canción de hielo y fuego") ? 'read' : 'not read or doesn\' exist'));
console.log("The book - Canci\u00F3n de fuego y hielo - is ".concat(isBookRead(books, "Canción de fuego y hielo") ? 'read' : 'not read or doesn\' exist'));
