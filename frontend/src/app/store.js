import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "redux/auth.slice";
import { cartReducer } from "redux/cart.slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
    }
});

export default store;