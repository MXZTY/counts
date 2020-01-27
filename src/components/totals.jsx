import React, { Component } from "react";
import DonutChart from "react-svg-donut-chart";

class Totals extends Component {
  // this function will disable all inputs on the document object by setting its readonly value to true.
  handleClick = () => {
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].setAttribute("readonly", "true");
    }
  };

  render() {
    // currently having issues with react-svg-donut-chart and should try utilizing canvas.js instead.
    const dataPie = [
      {
        title: "test",
        value: 100,
        stroke: "#00c7fc",
        strokeWidth: 3
      }
    ];
    return (
      <div>
        <DonutChart data={dataPie} />
        <h2 className="color-primary">${this.props.grossTotal}</h2>
        <h2 className="color-primary">
          Total Units Sold: {this.props.totalSold}
        </h2>
        <button
          className="btn settleButton bordered"
          onClick={this.handleClick}
        >
          Settle
        </button>
      </div>
    );
  }
}

export default Totals;
