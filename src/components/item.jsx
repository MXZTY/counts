import React from "react";

//Stateless Functional Component
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
      <td className="price d-flex align-items-center">
        <input
          id={props.item.id + "-price"}
          value={"$" + price.toFixed(2)}
          readOnly="readonly"
        />
      </td>
      <td className="qty">
        <input
          id={props.item.id + "-qty"}
          value={quantityAvailable}
          readOnly="readonly"
        />
      </td>
      <td className="countIn bordered">
        <input
          id={props.item.id + "-countIn"}
          defaultValue={countIn}
          onBlur={props.handleRowChange}
        />
      </td>
      <td className="add bordered">
        <input
          className="text-success"
          id={props.item.id + "-add"}
          defaultValue={add}
          onBlur={props.handleRowChange}
        />
      </td>
      <td className="totalIn bordered">
        <input
          className="text-primary"
          id={props.item.id + "-totalIn"}
          value={totalIn}
          readOnly="readonly"
        />
      </td>
      <td className="comp bordered">
        <input
          className="text-danger"
          id={props.item.id + "-comp"}
          defaultValue={comp}
          onBlur={props.handleRowChange}
        />
      </td>
      <td className="countOut bordered">
        <input
          id={props.item.id + "-countOut"}
          defaultValue={props.item.countOut}
          onBlur={props.handleRowChange}
        />
      </td>
      <td className="totalSold bordered">
        <input
          className="text-primary"
          id={props.item.id + "-totalSold"}
          value={totalSold}
          readOnly="readonly"
        />
      </td>
      <td className="grossTotal bordered">
        <input
          className="text-primary"
          id={props.item.id + "-grossTotal"}
          defaultValue={grossTotal}
          readOnly="readonly"
        />
      </td>
    </tr>
  );
};
export default Item;
