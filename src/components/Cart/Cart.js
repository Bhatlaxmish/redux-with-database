import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {



  const listofitems= useSelector(state=>state.testitem.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {listofitems.map(item=><CartItem>


          item={{title:item.name,quantity:item.quantity,total:item.totalprice,price:item.price}}
        </CartItem>)}
        <CartItem
        key={item.id}
          item={{ id:item.id,title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
