import { useDispatch,useSelector } from "react-redux";
import  React from 'react';
import { uiActions } from "../store/index";
import classes from './CartButton.module.css';

const CartButton = (props) => {

const quantityofcart=useSelector(state=>state.testitem.quantity);
  const dispatch=useDispatch();

const mycartHandler=()=>{
  dispatch(uiActions.toggle());
}





  return (
    <button className={classes.button} onClick={mycartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantityofcart}</span>
    </button>
  );
};

export default CartButton;
