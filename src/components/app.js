import React, { Component } from "react";
import BookList from "./booklist";
import BookDetails from "./bookdetails";
import DepartmentList from "./departmentlist";
import DepartmentDetails from "./departmentdetails";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Book Store</h1>
        <div className="row">
          <div className="col-md-4">
            <BookList />
          </div>
          <div className="col-md-8">
            <BookDetails />
          </div>
        </div>
        <h1>Departments</h1>
        <div className="row">
          <div className="col-md-4">{<DepartmentList />}</div>
          <div className="col-md-8">{<DepartmentDetails />}</div>
        </div>
      </div>
    );
  }
}
