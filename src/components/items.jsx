import React, { Component } from "react";
import Item from "./item";
import TotalsRow from "./totalsRow";

class Items extends Component {
  buildTableHeaders = () => {
    return (
      <thead>
        <tr>
          <th className="borderless" scope="col"></th>
          <th className="borderless" scope="col">
            QTY Avail.
          </th>
          <th scope="col">Count In</th>
          <th scope="col">Add</th>
          <th scope="col">Total In</th>
          <th scope="col">Comp</th>
          <th scope="col">Count Out</th>
          <th scope="col">Total Sold</th>
          <th scope="col" colSpan="2">
            Gross
          </th>
        </tr>
      </thead>
    );
  };

  render() {
    const imgURL = this.props.item.img;
    return (
      <div className="container d-flex justify-content-center">
        <div className="imagePreview">
          <label>
            {this.props.item.id}
            <img
              className="itemImage"
              src={`${process.env.PUBLIC_URL}` + imgURL}
              alt="samplePoster"
            />
          </label>
        </div>
        <table className="table table-borderless">
          {this.buildTableHeaders()}
          <tbody>
            <React.Fragment>
              <Item
                key={this.props.item.id}
                id={this.props.item.id}
                item={this.props.item}
                handleRowChange={this.props.handleRowChange}
              />
              <TotalsRow totals={this.props.grandTotals} />
            </React.Fragment>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Items;