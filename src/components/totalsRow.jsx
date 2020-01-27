import React, { Component } from "react";
import More from "./more";
import DonutChart from "react-svg-donut-chart";

class totalsRow extends Component {
  // this will render the column totals, as well as the More dropdown component
  render() {
    // issues with dataPie should try canvas.js to draw as component doesnt allow inner label.
    console.log(this.props);
    const decimal = this.getDonutValues(
      parseFloat(this.props.totals.totalIn),
      parseFloat(this.props.totals.countOutTotal)
    );

    const dataPie = [
      {
        title: "totalSoldDonut",
        value: decimal,
        stroke: "#00c7fc",
        strokeWidth: 3
      }
    ];
    return (
      <tr className="totalsRow">
        <td className="borderless"></td>
        <td colSpan="3" className="more borderless">
          <More
            price={this.props.price}
            id={this.props.id}
            note={this.props.note}
            handleMoreChange={this.props.handleMoreChange}
          />
        </td>
        <td className="color-primary">{this.props.totals.totalIn}</td>
        <td className="text-danger">{this.props.totals.totalComp}</td>
        <td className="">{this.props.totals.countOutTotal}</td>
        <td className="color-primary totalSoldDonutSection">
          <DonutChart className="smallDonut" data={dataPie} />
          <p>{this.props.totals.totalSold}</p>
        </td>
        <td className="color-primary" colSpan="2">
          ${this.props.totals.grossTotal}
        </td>
      </tr>
    );
  }

  getDonutValues = (totalIn, countOut) => {
    console.log("totalIn", totalIn);
    console.log("countOut", countOut);
    if (totalIn === 0 && countOut === 0) {
      return 0;
    } else if (countOut === 0) {
      return 100;
    } else {
      return 1 - countOut / totalIn;
    }
  };
}

export default totalsRow;
