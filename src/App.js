import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { sendCartData, FetchCartData } from "./store/cartHttp";
import Notification from "./components/UI/notification";

let x=true; 

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector(state=>state.ui.notification)
  const loading=useSelector(state=>state.ui.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    if (x){
      x=false;
      return
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  useEffect(() => {
   
    dispatch(FetchCartData());
  }, [dispatch]);

  return (
    <>
    {loading && <Notification  notification={{...notification}}/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
