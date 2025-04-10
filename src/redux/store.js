import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {thunk} from "redux-thunk";
import initialState from "./initialState";
import booksReducer from "./booksRedux";

const reducer = combineReducers({
    books: booksReducer
});

const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;