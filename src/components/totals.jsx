import React, { Component } from "react";
import DonutChart from "react-svg-donut-chart";

class Totals extends Component {
  handleClick = () => {
    console.log("locking Inputs");
    const inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].setAttribute("readonly", "true");
    }
  };

  render() {
    const dataPie = [
      {
        defaultTitle: "value",
        defaultLabel: "testing",
        value: 100,
        stroke: "#007bff",
        strokeWidth: 3
      }
    ];
    return (
      <div>
        <DonutChart data={dataPie} />
        <button className="btn btn-lg settleButton" onClick={this.handleClick}>
          Settle
        </button>
      </div>
    );
  }
}

export default Totals;
