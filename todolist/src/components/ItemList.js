import classes from "./ItemList.module.css";
import React from "react";
import Item from "./Item";

const ItemList = (props) => {

  return (
    <ul className={classes.down}>
      
      {props.items.map((item) => (
        <Item key={item.id} id={item.id} onDelete={props.onDeleteItem}>
          {item.text}
        </Item>
      ))}
    </ul>
  );
};
export default ItemList;
