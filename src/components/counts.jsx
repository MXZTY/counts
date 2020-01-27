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

  // this function takes in the item and updates the grand totals to be displayed
  // in the bottom row of the grid.
  updateColumnTotals = inventory => {
    // copy the state into a temporary variable so it can be updated.
    const grandTotals = { ...this.state.grandTotals };

    //set temporary values to track each totalIn value from inventory
    let grandTotalIn = 0;
    let grandComp = 0;
    let grandTotalSold = 0;
    let grandGrossTotal = 0;
    let grandCountOut = 0;

    // iterate through the inventory and add the values to the grand total values.
    inventory.items.filter(item => {
      grandTotalIn = parseInt(grandTotalIn) + parseInt(item.totalIn);
      grandComp = parseInt(grandComp) + parseInt(item.comp);
      grandTotalSold = parseInt(grandTotalSold) + parseInt(item.totalSold);
      grandGrossTotal =
        parseFloat(grandGrossTotal) + parseFloat(item.grossTotal);
      grandCountOut = parseInt(grandCountOut) + parseInt(item.countOut);
      return null;
    });

    //set the new values to the grandTotal state object
    grandTotals.totalIn = grandTotalIn;
    grandTotals.totalSold = grandTotalSold;
    grandTotals.grossTotal = grandGrossTotal.toFixed(2);
    grandTotals.totalComp = grandComp;
    grandTotals.countOutTotal = grandCountOut;

    //update the state
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
    item.grossTotal = parseFloat(totalGross).toFixed(2);
  };

  // this function will handle any changes made to a row and
  // update the state so changes can be propogated down to its children.
  handleRowChange = e => {
    //copy inventory so we can modify it without modifying the state directly
    const tempInventory = { ...inventory };
    let itemToUpdate = "";

    // check if e is an event or an item object.
    if (e.target) {
      // prevent executing row change update by returning null if e has a readonly attribute
      if (e.target.hasAttribute("readonly")) {
        return null;
      }

      //search for the item within the tempInventory
      itemToUpdate = tempInventory.items.find(
        item => item.id === e.target.id.split("-")[0]
      );

      //set the itemToUpdates new value based on the attribute being changed
      itemToUpdate[e.target.id.split("-")[1]] = +e.target.value;
    } else {
      // e is not an event, so we can directly lookup the id in the inventory
      // set it to our current item to recalculate totals.
      itemToUpdate = tempInventory.items.find(item => {
        return item.id === e.id;
      });
    }

    // update the total calculations to be displayed in the row
    this.handleTotalCalculations(itemToUpdate);

    this.updateColumnTotals(tempInventory);

    //lastly, set the state with the newly updated values.
    this.setState({ inventory: tempInventory });

    // update the columnTotals.
    this.updateColumnTotals(tempInventory);
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

    // after setting the new price, update the row so any elements affected are updated.
    this.handleRowChange(item);
  };
}

export default Counts;
