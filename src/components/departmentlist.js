import React, { Component } from "react";
import { connect } from "react-redux";
import { selectDept } from "../actions/selectdept";
import { bindActionCreators } from "redux";

class DepartmentList extends Component {
  renderList() {
    return this.props.departments.map(dept => {
      return (
        <li
          key={dept.title}
          className="list-group-item"
          onClick={() => this.props.ad(dept)}
        >
          {dept.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group">{this.renderList()}</ul>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ad: selectDept }, dispatch);
}

function mapStateToProps(state) {
  return {
    departments: state.departments
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentList);
