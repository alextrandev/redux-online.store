import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk("products/products", async () => {
  const res = await axios.get(api);
  return res.data;
});

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  // reducers are use for internal app state management (not from remote)
  reducers: {},
  // extra reducer are for async calls
  extraReducers(builder) {
    builder
    // when fetch return the promise, do the action: update products in state with api payload
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;