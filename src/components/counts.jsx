import React, { Component } from "react";
import inventory from "./inventory.json";
import Items from "./items";
import Totals from "./totals";

class Counts extends Component {
  //this is the parent state which will need to be updated when an event is lifted from a sub component
  state = {
    inventory: inventory,
    grandTotals: {
      totalIn: 0,
      totalComp: 0,
      totalSold: 0,
      grossTotal: 0.0,
      countOutTotal: 0
    }
  };

  // return multiple instances of an item but only 1 instance of totals, so return an array.
  render() {
    return [
      this.state.inventory.items.map(item => {
        return (
          <Items
            key={item.id}
            item={item}
            handleRowChange={this.handleRowChange}
            grandTotals={this.state.grandTotals}
            handleMoreChange={this.handleMoreChange}
          />
        );
      }),
      <div key="totalsSection" className="container totalDonut">
        <h2 className="color-default">TOTAL</h2>
        <Totals
          grossTotal={this.state.grandTotals.grossTotal}
          totalSold={this.state.grandTotals.totalSold}
        />
      </div>
    ];
  }

  // this function takes in the item and updates the grand totals to be displayed in the bottom row of the grid.
  updateColumnTotals = item => {
    // copy the state into a temporary variable so it can be updated.
    const grandTotals = { ...this.state.grandTotals };

    // update the totals for each item in the temporary "grandTotals" object
    grandTotals.totalIn = item.totalIn;
    grandTotals.totalSold = item.totalSold;
    grandTotals.grossTotals = item.totalGross;
    grandTotals.totalComp = item.totalComp;
    grandTotals.countOutTotal = item.countOut;

    // update the state with the modified values
    this.setState({ grandTotals });
  };

  // this function is for calculating the totalIn, TotalSold, and TotalGross values.
  // it then called updateColumnTotals so that the changes reflect the new values.
  handleTotalCalculations = item => {
    //create temp variables to update state with.
    const totalIn = +item.countIn + item.add;
    const totalSold = +totalIn - item.countOut - item.comp;
    const totalGross = +totalSold * item.price;

    //set the items values
    item.totalIn = totalIn;
    item.totalSold = totalSold;
    item.grossTotal = +totalGross;

    this.updateColumnTotals(item);
  };

  // this function will handle any changes made to a row and
  // update the state so changes can be propogated down to its children.
  handleRowChange = e => {
    // prevent executing row change update by returning null if e has a readonly attribute
    if (e.target.hasAttribute("readonly")) {
      return null;
    }

    //copy inventory so we can modify it without modifying the state directly
    const tempInventory = { ...inventory };

    //search for the item within the tempInventory
    const itemToUpdate = tempInventory.items.find(
      item => item.id === e.target.id.split("-")[0]
    );
    //set the itemToUpdates new value based on the attribute being changed
    itemToUpdate[e.target.id.split("-")[1]] = +e.target.value;

    // update the total calculations to be displayed in the row
    this.handleTotalCalculations(itemToUpdate);

    //lastly, set the state with the newly updated values.
    this.setState({ inventory: tempInventory });
  };

  // this function is for handling any changes made to the item price or notes
  handleMoreChange = (price, note, id) => {
    const tempInventory = { ...inventory };

    //grab the index from the id-1.
    const parsedId = parseInt(id.slice(-1)) - 1;

    const item = tempInventory.items[parsedId];
    item.note = note;
    item.price = +price;
    this.setState(tempInventory);
  };
}

export default Counts;
