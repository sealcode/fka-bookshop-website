const allBooks = [
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Jawor", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
            {id: 1, author: "Adam Niemiecki", title: "Moja walka", codes: "10"},
]

let changedBooks = [];

export default function BooksService() {
    return {
        reset: function() {
            changedBooks = allBooks
        },
        getBooks: function() {
            return changedBooks;
        },
        filterBooks: function(filter) {
            this.reset();
            changedBooks = changedBooks.filter( book => book.author.toLowerCase().includes(filter.toLowerCase()) || book.title.toLowerCase().includes(filter.toLowerCase()));
        }
    }
}
