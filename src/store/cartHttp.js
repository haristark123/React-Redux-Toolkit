import { uiAction } from "./uiSlice";
import { cartActions } from "./cartSlice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiAction.setLoading(true))
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-foodstore-default-rtdb.firebaseio.com/books.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending Cart data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(uiAction.setLoading(false))
      dispatch(
        uiAction.showNotification({
          status: "Success",
          title: "success...",
          message: "Sent Cart data Successfuly",
        })
      );
    

    } catch (err) {
     dispatch(uiAction.setLoading(false))

      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "error!...",
          message: "Sent Cart data Failed",
        })
      );
    }
  };
};

export const FetchCartData = () => {
  return async (dispatch) => {
    dispatch(uiAction.setLoading(true));
    const getRequest = async () => {
      const response = await fetch(
        "https://react-foodstore-default-rtdb.firebaseio.com/books.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cart = await getRequest();
      dispatch(
        cartActions.replaceCart({
          items: cart.items || [],
          totalQuantity: cart.totalQuantity,
        })
    
      );
      dispatch(uiAction.setLoading(false))
    } catch (err) {
        dispatch(uiAction.setLoading(false))
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "error!...",
          message: "Sent Cart data Failed",
        })
      );
    }
  };
};
