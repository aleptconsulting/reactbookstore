import React, { Component } from "react";
import BookList from "./booklist";
import BookDetails from "./bookdetails";

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetails />
      </div>
    );
  }
}
