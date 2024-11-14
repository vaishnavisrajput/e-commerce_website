import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    filteredProducts: [],
    cartProducts: [], 
    productCategory:[],
    productDetail: []
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProduct: (state, action) =>{
            state.products = [...action.payload]
        },
        setCategory: (state, action) => {
            state.productCategory = action.payload
        },
        // addCartProduct: (state, action) => {
        //     if(state.cartProducts.id === action.payload.id){
        //         return state.cartProducts
        //     }
        //     else{
        //         state.cartProducts = [...state.cartProducts, action.payload]

        //     }
        addCartProduct: (state, action) => {
            const isExist = state.cartProducts.find(product => product.id === action.payload.id);
            if(!isExist){
                state.cartProducts.push(action.payload);
                return;
            }
        
        },
        removeCartProduct: (state, action) => {
            console.log(action.payload, 'action')
            state.cartProducts = state.cartProducts.filter((item) => item.id!==action.payload)
        },
        viewProduct: (state, action) => {
            console.log(action.payload)
            state.productDetail = action.payload
        }
    }
})

export const { setProduct, setCategory, addCartProduct, removeCartProduct, viewProduct } = productSlice.actions
export default productSlice.reducer;