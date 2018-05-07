import { combineReducers } from "redux";
import BooksReducers from "./reducer_books";
import DepartmentReducers from "./reducer_deparments";

const rootReducer = combineReducers({
  books: BooksReducers,
  departments: DepartmentReducers
});

export default rootReducer;
