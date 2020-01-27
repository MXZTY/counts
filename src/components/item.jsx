import React from "react";

//Stateless Functional Component
//for displaying table columns and lifting onRowChange events to counts.jsx when inputs are changed.
const Item = props => {
  const {
    price,
    quantityAvailable,
    countIn,
    add,
    totalIn,
    comp,
    totalSold,
    grossTotal
  } = props.item;

  return (
    <tr key={props.item.id}>
      <td className="price d-flex align-items-center color-default">
        $
        <input
          type="number"
          id={props.item.id + "-price"}
          className={"color-default"}
          value={price.toFixed(2)}
          readOnly="readonly"
        />
      </td>
      <td className="qty">
        <input
          type="number"
          className={"color-default"}
          id={props.item.id + "-qty"}
          value={quantityAvailable}
          readOnly="readonly"
        />
      </td>
      <td className="bordered">
        <input
          type="number"
          className="countIn"
          id={props.item.id + "-countIn"}
          defaultValue={countIn}
          onBlur={props.handleRowChange}
        />
      </td>
      <td className="bordered">
        <input
          type="number"
          className="color-success add"
          id={props.item.id + "-add"}
          defaultValue={add}
          onBlur={props.handleRowChange}
        />
      </td>
      <td className="bordered">
        <input
          type="number"
          className="color-primary totalIn"
          id={props.item.id + "-totalIn"}
          value={totalIn}
          readOnly="readonly"
        />
      </td>
      <td className="comp bordered">
        <input
          type="number"
          className="text-danger comp"
          id={props.item.id + "-comp"}
          defaultValue={comp}
          onBlur={props.handleRowChange}
        />
      </td>
      <td className="bordered">
        <input
          type="number"
          className="countOut"
          id={props.item.id + "-countOut"}
          defaultValue={props.item.countOut}
          onBlur={props.handleRowChange}
        />
      </td>
      <td className="bordered">
        <input
          type="number"
          className="color-primary totalSold"
          id={props.item.id + "-totalSold"}
          value={totalSold}
          readOnly="readonly"
        />
      </td>
      <td className="bordered">
        <input
          type="number"
          className="color-primary grossTotal"
          id={props.item.id + "-grossTotal"}
          defaultValue={grossTotal}
          readOnly="readonly"
        />
      </td>
    </tr>
  );
};
export default Item;
