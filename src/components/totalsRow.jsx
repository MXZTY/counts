import React, { Component } from "react";

class totalsRow extends Component {
  render() {
    // this.getColumnTotals();
    return (
      <tr>
        <td className="borderless"></td>
        <td colSpan="3" className="more borderless align-middle">
          <button type="button" className="btn btn-lg moreButton">
            More
          </button>
        </td>
        <td className="align-middle text-primary">
          {this.props.totals.totalIn}
        </td>
        <td className="align-middle text-danger">0</td>
        <td className="align-middle">{this.props.totals.countOutTotal}</td>
        <td className="align-middle text-primary">
          {this.props.totals.totalSold}
        </td>
        <td className="align-middle text-primary" colSpan="2">
          0
        </td>
      </tr>
    );
  }
}

export default totalsRow;
