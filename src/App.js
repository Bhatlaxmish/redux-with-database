import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'

function App() {
  const showcart = useSelector((state) => state.ui.cartisvisible)
const cart=useSelector(state=>state.cart);

useEffect(()=>{

  dispatch(fetchcartdata());
},[dispatch]);


  useEffect(() => {

    const touseasync=async()=>{

  const response=await  fetch('https://myreact-da37b-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    }) ;
    if(!response.ok)
    {
      throw new Error('sending data failed');
    }

    const responsedata=await response.json();
    }
/* put method overrides the data stored  post creates another list*/
  }, [cart]);/* the database store the updated data of items  */

  return (
    <Layout>
      {showcart && <Cart />}
      <Products />
    </Layout>
  )
}
/* thunk is a function that delays an action until later */
export default App
