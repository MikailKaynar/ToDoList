import React from "react";
import classes from  "./Item.module.css"


const Item = props => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={classes.box} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default Item;
