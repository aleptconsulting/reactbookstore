import React, { Component } from "react";
import { connect } from "react-redux";

class DepartmentList extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.props.departments.map(dept => {
          return <li className="list-group-item">{dept.title}</li>;
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    departments: state.departments
  };
}

export default connect(mapStateToProps)(DepartmentList);
