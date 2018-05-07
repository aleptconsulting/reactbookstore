import { combineReducers } from "redux";
import BooksReducers from "./reducer_books";
import DepartmentReducers from "./reducer_deparments";
import ActiveBook from "./reducer_active_book";
import ActiveDept from "./reducer_active_dept";

const rootReducer = combineReducers({
  books: BooksReducers,
  departments: DepartmentReducers,
  activeBook: ActiveBook,
  activeDept: ActiveDept
});

export default rootReducer;
