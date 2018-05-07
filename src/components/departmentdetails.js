import React, { Component } from "react";
import { connect } from "react-redux";

class DeptDetails extends Component {
  render() {
    let finalHtml = null;
    if (this.props.dept) {
      const { employees, manager, title } = this.props.dept;
      finalHtml = (
        <div className="panel panel-primary">
          <div className="panel-heading">Department Details:</div>
          <div className="panel-body">
            <strong>Title: </strong> {title} <br />
            <strong>Manager: </strong> {manager}
            <br />
            <strong>Employees: </strong> {employees}
          </div>
        </div>
      );
    } else {
      finalHtml = <div>Select a department to get started</div>;
    }
    return <div> {finalHtml}</div>;
  }
}

function mapStateToProps(state) {
  return {
    dept: state.activeDept
  };
}

export default connect(mapStateToProps)(DeptDetails);
