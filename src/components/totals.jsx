import React, { Component } from "react";
import DonutChart from "react-svg-donut-chart";

class Totals extends Component {
  // this function will disable all inputs on the document object by setting its readonly value to true.
  handleClick = () => {
    //lock all of the inputs by setting their readonly attributes to true
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].setAttribute("readonly", "true");
    }

    // lock all of the buttons by setting thier disabled value to true
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("disabled", "true");
    }
  };

  render() {
    // generate the pie chart using the react-svg-donut-chart package.
    // used text-transform: translate styling to insert sibling element into circle.
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
        <h2 className="color-primary totalUnitsSold">
          Total Units Sold: {this.props.totalSold}
        </h2>
        <div className="grandTotalDisplay">
          <h2 className="color-primary">${this.props.grossTotal}</h2>
          <button
            className="btn settleButton bordered"
            onClick={this.handleClick}
          >
            Settle
          </button>
        </div>
      </div>
    );
  }
}

export default Totals;
