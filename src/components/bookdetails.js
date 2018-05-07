import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetails extends Component {
  render() {
    let finalHtml = null;
    if (this.props.book) {
      const { title, price, ph, author } = this.props.book;
      finalHtml = (
        <div className="panel panel-primary">
          <div className="panel-heading">Book Details:</div>
          <div className="panel-body">
            <strong>Title: </strong> {title} <br />
            <strong>Price: </strong> {price}
            <br />
            <strong>Author: </strong> {author}
            <br />
            <strong>Publishing House: </strong> {ph}
          </div>
        </div>
      );
    } else {
      finalHtml = <div>Select a book to get started</div>;
    }
    return <div> {finalHtml}</div>;
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetails);
