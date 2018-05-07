import { combineReducers } from "redux";
import BooksReducers from "./reducer_books";
import DepartmentReducers from "./reducer_deparments";
import ActiveBook from "./reducer_active_book";

const rootReducer = combineReducers({
  books: BooksReducers,
  departments: DepartmentReducers,
  activeBook: ActiveBook
});

export default rootReducer;
