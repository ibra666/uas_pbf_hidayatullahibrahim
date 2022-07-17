import {
    fetchCart,
    fetchTotal,
    fetchUser,
} from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
    user: userInfo,
    oodItems: null,
    cartShow: false,
    cartItems: cartInfo,
};