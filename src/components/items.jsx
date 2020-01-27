import React, { Component } from "react";
import Item from "./item";
import TotalsRow from "./totalsRow";
import $ from "jquery";

class Items extends Component {
  // this will render the image, and the item grid
  constructor(props) {
    super(props);
    let hasDescription, descriptionShown;
    if (this.props.item.description === "") {
      hasDescription = false;
    } else {
      hasDescription = true;
    }
    this.state = {
      hasDescription: hasDescription,
      descriptionShown: descriptionShown
    };
  }
  render() {
    // const imgURL = this.props.item.img;
    return (
      <div className="container d-flex justify-content-center">
        <div className="imagePreview" id="imagePreview">
          <label>{this.props.item.id.slice(0, -1)}</label>
          <div className="imageContainer" id="imageContainer">
            {this.state.hasDescription ? (
              <button
                className="imageButton"
                onMouseOver={() => this.buildDescriptionSpan()}
                onMouseOut={() => this.removeDescriptionSpan()}
              >
                !
              </button>
            ) : null}
            <div className="imageDescription" id="imageDescription"></div>

            {/* <img
                className="itemImage"
                src={`${process.env.PUBLIC_URL}` + imgURL}
                alt="samplePoster"
              /> */}
          </div>
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
              <TotalsRow
                totals={this.props.grandTotals}
                id={this.props.item.id}
                price={this.props.item.price}
                note={this.props.item.note}
                handleMoreChange={this.props.handleMoreChange}
              />
            </React.Fragment>
          </tbody>
        </table>
      </div>
    );
  }

  removeDescriptionSpan = () => {
    const div = document.getElementById("imageDescription");
    div.remove();
    // const parent = document.getElementById("imageContainer");

    //Having issues with parent div as it is being removed.
    // Need to just remove the innerText and not the div so that events can reoccur without errors.
    // parent.innerHTML(
    //   <div className="imageDescription" id="imageDescription"></div>
    // );
    console.log(div.innerText);
  };
  buildDescriptionSpan = () => {
    const div = document.getElementById("imageDescription");
    div.append(this.props.item.description);
    console.log(div);
  };

  // this is a helper function for returning the table headers
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
}

export default Items;
