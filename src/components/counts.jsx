import React, { Component } from "react";
import inventory from "./inventory.json";
import Items from "./items";
import Totals from "./totals";

class Counts extends Component {
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

  updateColumnTotals = item => {
    // console.log("UpdatingColumnTitles... ", item);
    // copy the state into a temporary variable so it can be updated.
    const grandTotals = { ...this.state.grandTotals };

    // console.log("grandTotals......", grandTotals);

    // console.log(this.state.grandTotals.totalComp);
    // update the totals for each item in the temporary "grandTotals" object
    grandTotals.totalIn = item.totalIn;
    grandTotals.totalSold = item.totalSold;
    grandTotals.grossTotals = item.totalGross;
    grandTotals.totalComp = item.totalComp;
    grandTotals.countOutTotal = item.countOut;

    // update the state with the modified values
    this.setState({ grandTotals });
  };

  handleTotalCalculations = item => {
    console.log("Updating Row Totals");
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

  handleRowChange = e => {
    //copy inventory so we can modify it without modifying the state directly
    const tempInventory = { ...inventory };

    //search for the item within the tempInventory
    const itemToUpdate = tempInventory.items.find(
      item => item.id === e.target.id.split("-")[0]
    );

    //set the itemToUpdates new value based on the attribute being changed
    itemToUpdate[e.target.id.split("-")[1]] = +e.target.value;

    this.handleTotalCalculations(itemToUpdate);

    //lastly, set the state with the newly updated values.
    this.setState({ inventory: tempInventory });
  };

  render() {
    return this.state.inventory.items.map(item => {
      return (
        <React.Fragment key={Math.random(100)}>
          <Items
            key={item.id}
            item={item}
            handleRowChange={this.handleRowChange}
            grandTotals={this.state.grandTotals}
          />
          <Totals key={Math.random(100)} />
        </React.Fragment>
      );
    });
  }
}

export default Counts;
