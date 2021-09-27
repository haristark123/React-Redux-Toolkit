import classes from './CartButton.module.css';
import { uiAction } from '../../store/uiSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const CartButton = (props) => {
  const dispatch = useDispatch()
  const quantity=useSelector(state=>state.cart.totalQuantity)
  const cartToggleHandler=()=>{
    dispatch(uiAction.toggle())
  }
  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;