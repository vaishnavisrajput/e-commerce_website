import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategory, fetchProducts, fetchFilteredProducts } from "./productApi";

export const productAsync = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetchProducts()
        return response.data;

    }
)

export const categoryAsync = createAsyncThunk(
    'category/fetchCategory',
    async () => {
        const response = await fetchCategory()
        return response.data;
    }
)

export const filteredAsync = createAsyncThunk(
    'filtered/fetchFilteredProducts',
    async (category) => {
        const response = await fetchFilteredProducts(category)
        return response.data;
    }
)

const initialState = {
    products: [], //to set the products
    filteredProducts: [], //to set the filter products
    cartProducts: [], //to set the cart products
    productCategory: [], //to set the category
    productDetail: [], //to set the product detail page 
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addCartProduct: (state, action) => {
            const isExist = state.cartProducts.find(product => product.id === action.payload.id);
            if (!isExist) {
                state.cartProducts.push(action.payload);
                return;
            }

        },
        removeCartProduct: (state, action) => {
            state.cartProducts = state.cartProducts.filter((item) => item.id !== action.payload)
        },
        viewProduct: (state, action) => {
            state.productDetail = action.payload
        },
        confirmOrders: (state, action) => {
            state.cartProducts = action.payload;
        },
        emptyCart: (state) => {
            state.cartProducts = []
        }
    },
    extraReducers: (builder) => {
        builder
            // FOR PRODUCTS
            .addCase(productAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(productAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.products = action.payload;
            })
            .addCase(productAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
        // FOR CATEGORY
        builder
            .addCase(categoryAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(categoryAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.productCategory = action.payload;
            })
            .addCase(categoryAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
        // FOR FILTERED PRODUCTS
        builder
            .addCase(filteredAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(filteredAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.filteredProducts = action.payload;
            })
            .addCase(filteredAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})

export const { setProduct, setCategory, addCartProduct, removeCartProduct, viewProduct, confirmOrders, emptyCart } = productSlice.actions
export default productSlice.reducer;