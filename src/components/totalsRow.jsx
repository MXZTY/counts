import React, { Component } from "react";
import More from "./more";
// import DonutChart from "react-svg-donut-chart";

class totalsRow extends Component {
  // this will render the column totals, as well as the More dropdown component
  render() {
    // issues with dataPie should try canvas.js to draw as component doesnt allow inner label.
    // const dataPie = [
    //   {
    //     title: "test",
    //     value: 100,
    //     stroke: "#00c7fc",
    //     strokeWidth: 3
    //   }
    // ];
    return (
      <tr>
        <td className="borderless"></td>
        <td colSpan="3" className="more borderless align-middle">
          <More
            price={this.props.price}
            id={this.props.id}
            note={this.props.note}
            handleMoreChange={this.props.handleMoreChange}
          />
        </td>
        <td className="align-middle color-primary">
          {this.props.totals.totalIn}
        </td>
        <td className="align-middle text-danger">0</td>
        <td className="align-middle">{this.props.totals.countOutTotal}</td>
        <td className="align-middle color-primary">
          {/* <DonutChart className="smallDonut" data={dataPie} /> */}
          {this.props.totals.totalSold}
        </td>
        <td className="align-middle color-primary" colSpan="2"></td>
      </tr>
    );
  }
}

export default totalsRow;
