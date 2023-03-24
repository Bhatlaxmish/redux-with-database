import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { testActions } from '../store/index';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
  const { title, price, description ,id} = props;
  
  const addtocartHandler=()=>{
       dispatch(testActions.additem({
      id,
      title,
      price,
      // description,
    }));
  }
  

  // const dispatch=useDispatch();

  
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addtocartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
