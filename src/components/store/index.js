import { createStore } from '@reduxjs/toolkit'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialitemstate = { items: [], totalquantity: 0 }
const testAction = createSlice({
  name: 'testitem',
  initialstate: initialitemstate,
  reducers: {
    additem(state, action) {
      const newitem = action.payload
      const existingitem = state.items.find(
        (item) => item.id === newitem.id,
      ) /* check if same element already exists */

      if (!existingitem) {
        state.items.push({
          id: newitem.id,
          price: newitem.price,
          quantity: 1,
          totalprice: newitem.price,
        })
      } else {
        existingitem.quantity++
        totalprice = totalprice + newitem.price
      }
    },
    removeitem(state, action) {
      const newitem = action.payload
      const itemexits = state.items.find((items) => items.id === newitem.id)
      if (itemexits === 1) {
        state.items = state.items.filter(
          (item) => item.id != newitem.id,
        ) /* remove the perticular element from array */
      } else {
        itemexits.quantity--
        itemexits.totalprice = itemexits.totalprice - itemexits.price
      }
    },
  },
})


const sendcarddata=(cart)=>{

return async(dispatch)=>{
dispatch(

  uiActions.showNotification({
    status:'pnding',
    message:'snding '
  }
)

)}
};
export const fetchdata=()=>{
  return async dispatch =>{
    const fetchdata =async ()=>{
      const response =await fetch('https://myreact-da37b-default-rtdb.firebaseio.com/cart.json');
      if(!response.ok)
      {
        throw new Error('couldnt fetch data');
      }
      const data =await response.json();
      return data;
    };
    try {
     const cartdata=await  fetchdata();
     dispatch(testAction.additem(cartdata));
     

    }catch(error){
      dispatch(testAction.shownotification({


        status:"dfsf",
        title:'eror',

      }))
    };
  };
};


/* const sendrequest=async ()=>{



};
const resposne=await fetch();
if(!Response.ok)
{
  throw new Error('not ok');
}
dispatch(
  uiAction.showNotification({
    status:"wfwe ",
    message:"sf sdf sdfj"
  })
) */

const initialuistate = { cartisvisible: false }
const uiAction = createSlice({
  name: 'ui',
  initialstate: initialuistate,
  reducers: {
    toggle(state) {
      state.cartisvisible = state.cartisvisible
    },
  },
})

const store = configureStore({
  reducer: {
    testitem: testAction.reducer,
    ui: uiAction.reducer,
  },
})

export const uiActions = uiAction.actions
export const testActions = testAction.actions

export default store
