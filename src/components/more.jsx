import React, { Component } from "react";

class More extends Component {
  state = {
    showMenu: false,
    newPrice: 0,
    newNote: ""
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-lg moreButton bordered"
          onClick={() => this.showMenu(this.state.showMenu)}
        >
          More
        </button>

        {this.state.showMenu ? (
          <div className="menu d-flex justify-content-center flex-wrap">
            <h4>More Options</h4>
            <ul className="d-flex justify-content-center flex-wrap">
              <li id="price" className="menuItem d-flex justify-content-around">
                <label className="label d-flex flex-column">Item price</label>
                <input
                  id={"priceInput"}
                  className="d-flex flex-column"
                  title={"price"}
                  defaultValue={this.props.price}
                />
              </li>
              <li className="menuItem d-flex justify-content-around">
                <label className="label d-flex flex-column">Note</label>
                <input
                  id={"noteInput"}
                  className="d-flex flex-column"
                  defaultValue={this.props.note}
                />
              </li>
            </ul>
            <button
              className="btn btn-md submit"
              onClick={() => this.handleMoreChange(this.state.showMore)}
            >
              submit
            </button>
          </div>
        ) : null}
      </div>
    );
  }

  // this function will take the new inputs of price and note and lift the event up to counts.jsx so state can be updated.
  handleMoreChange(e) {
    const newPrice = document.getElementById("priceInput").value;
    const newNote = document.getElementById("noteInput").value;
    this.setState({
      showMenu: false,
      newPrice: newPrice,
      newNote: newNote
    });

    this.props.handleMoreChange(newPrice, newNote, this.props.id);
  }

  // this function will set a boolean value in the state for determining if the dropdown menu should be visible or not.
  showMenu(e) {
    let shouldShow = null;
    if (e) {
      shouldShow = false;
    } else {
      shouldShow = true;
    }

    this.setState({ showMenu: shouldShow });
  }
}

export default More;
