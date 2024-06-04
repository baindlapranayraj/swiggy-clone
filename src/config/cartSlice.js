import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        cartTotalPrice : 0,
        cartTotalQuantity : 0,
    },
    reducers: {
        addItem: (state, action) => {

            const itemIndex = state.items.findIndex((item) => item.card.info.id == action.payload.card.info.id)

          

            if(itemIndex>=0){
                state.items[itemIndex].cartTotalQuantity+=1;
            }
            else{
                const temp = {...action.payload,cartTotalQuantity : 1}
                state.items.push(action.payload);
            }

        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.card.info.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    }
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart,totalPrice } = cartSlice.actions;
