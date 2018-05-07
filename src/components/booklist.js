import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.bks.map(book => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.sb(book)}
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group">{this.renderList()}</ul>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sb: selectBook }, dispatch);
}

function mapStateToProps(state) {
  return {
    bks: state.books
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
