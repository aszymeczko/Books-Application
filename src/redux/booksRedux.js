import shortid from 'shortid';

// selectors
export const getAllBooks = state => state.books;

//actions names
const createActionName = name => `app/books/${name}`;
const REMOVE_BOOK = createActionName('REMOVE_BOOK');
const ADD_BOOK = createActionName('ADD_BOOK');
const UPDATE_BOOKS = createActionName('UPDATE_BOOKS');

//action creators
export const removeBook = payload => ({ type: REMOVE_BOOK, payload });
export const addBook = payload => ({ type: ADD_BOOK, payload });
export const updateBooks = payload => ({ type: UPDATE_BOOKS, payload });
export const fetchBooks = () => {
    return (dispatch) => {
        fetch("http://localhost:3131/books")
            .then(res => res.json())
            .then(books => dispatch(updateBooks(books)));
    }
};
export const addBookRequest = (newBook) => {
    return (dispatch) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook),
        };

        fetch("http://localhost:3131/books", options)
        .then(() => dispatch(addBook(newBook)));
    }
}

export const removeBookRequest = (bookId) => {
    return (dispatch) => {
        fetch(`http://localhost:3131/books/${bookId}`, {
            method: 'DELETE',
        })
            .then(() => dispatch(removeBook(bookId)))
            .catch(err => console.error('Error removing book:', err));
    }
};

const reducer = (statePart = [], action) => {
    switch (action.type) {
        case REMOVE_BOOK:
            return statePart.filter(book => book.id !== action.payload);
        case ADD_BOOK:
            return [...statePart, { ...action.payload, id: shortid() }];
        case UPDATE_BOOKS:
            return [...action.payload];
        default:
            return statePart;
    }
};

export default reducer;
