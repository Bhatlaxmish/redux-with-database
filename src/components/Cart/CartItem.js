import classes from './CartItem.module.css';
import {useDispatch,useSelector} from'react-redux';
import { testActions } from '../store/index';



const CartItem = (props) => {
  const { title, quantity, total, price ,id} = props.item;

const count=useSelector(state=>state.testitem.count);
  const dispatch=useDispatch();
const onadditemHandler=()=>{
dispatch(testActions.additem({id,title,price,}));
};

const onremoveitemHandler=()=>{
dispatch(testActions.removeitem(id));
};




  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onremoveitemHandler}>-</button>
          <button onClick={onadditemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
