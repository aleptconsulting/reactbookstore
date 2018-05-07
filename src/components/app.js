import React, { Component } from "react";
import BookList from "./booklist";
import BookDetails from "./bookdetails";
import DepartmentList from "./departmentlist";

export default class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <BookList />
          </div>
          {/* <DepartmentList /> */}
          <div class="col-md-8">
            <BookDetails />
          </div>
        </div>
      </div>
    );
  }
}
