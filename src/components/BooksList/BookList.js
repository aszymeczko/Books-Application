import { useSelector, useDispatch } from "react-redux";
import { removeBookRequest } from "../../redux/booksRedux";

const BookList = () => {
    const books = useSelector(state => state.books);
    const dispatch = useDispatch();

    const removeBook = (bookId) => {
        dispatch(removeBookRequest(bookId));  // Wywołanie akcji usuwania książki
    };

    return (
        <ul>
            {books.map(book => (
                <li key={book.id}>
                    {book.title} by {book.author}
                    <button onClick={() => removeBook(book.id)}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export default BookList;
