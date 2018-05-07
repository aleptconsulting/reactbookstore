import React, { Component } from "react";
import BookList from "./booklist";
import BookDetails from "./bookdetails";
import DepartmentList from "./departmentlist";

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <DepartmentList />
        <BookDetails />
      </div>
    );
  }
}
