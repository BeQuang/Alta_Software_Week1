import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import validateProduct from "../fake.api";

export type Product = { title: string; price: number; id: string };
export enum ValidationState {
  Fulfilled,
  Pending,
  Rejected,
}
type ProductSliceState = {
  products: Product[];
  validationState?: ValidationState;
  errorMessage?: string;
};
const initialProducts: Product[] = [
  { title: "TV", price: 1000, id: "TV" },
  { title: "Fan", price: 500, id: "Fan" },
  { title: "Chair", price: 100, id: "Chair" },
];
const initialState: ProductSliceState = {
  products: initialProducts,
  validationState: undefined,
  errorMessage: undefined,
};

export const addProductAsync = createAsyncThunk(
  "products/addNewProduct",
  async (initialProduct: Product) => {
    const product = await validateProduct(initialProduct);
    return product;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => ({
      ...state,
      products: state.products.filter(
        (product) => product.id !== action.payload
      ),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(addProductAsync.fulfilled, (state, action) => ({
      ...state,
      ValidationState: ValidationState.Fulfilled,
      errorMessage: undefined,
      products: [...state.products, action.payload],
    }));
    builder.addCase(addProductAsync.rejected, (state, action) => ({
      ...state,
      validationState: ValidationState.Rejected,
      errorMessage: action.error.message,
    }));
    builder.addCase(addProductAsync.pending, (state, action) => ({
      ...state,
      validationState: ValidationState.Pending,
      errorMessage: undefined,
    }));
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export const getProductSelector = (state: RootState) => state.products.products;
export const getErrorMessage = (state: RootState) =>
  state.products.errorMessage;
export default productSlice.reducer;
