import BookList from "./components/BooksList/BookList";
import BookForm from "./components/BookForm/BookForm";
import {fetchBooks} from "./redux/booksRedux";
import {useDispatch} from "react-redux";
import { useEffect} from "react";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

  return (
    <div >
      <h1>Books App</h1>
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
