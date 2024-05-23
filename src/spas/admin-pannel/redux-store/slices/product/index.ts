import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as selectors from "./product.selectors";
import { ProductState } from "./product.interfaces";
import * as sagas from "./product.sagas";
import * as extraActions from "../../extra-actions";

const initialState: ProductState = {
  list: [],
  current: null,
};

export const productStore = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(extraActions.postProducts.success, (state, action) => {
      state.list = [...state.list, action.payload.data.product];
    });
    builder.addCase(
      extraActions.deleteProductsByProductId.success,
      (state, action) => {
        const productId = action.payload.prepareParams.productId;
        state.list = state.list.filter((product) => product._id != productId);
      },
    );
    builder.addCase(extraActions.getProducts.success, (state, actions) => {
      state.list = actions.payload.data.products;
    });
    builder.addCase(extraActions.getProductsByProductId.request, (state) => {
      state.current = null;
    });
    builder.addCase(
      extraActions.getProductsByProductId.success,
      (state, actions) => {
        state.current = actions.payload.data.product;
      },
    );
    builder.addCase(
      extraActions.patchProductsByProductId.success,
      (state, actions) => {
        state.current = actions.payload.data.product;

        state.list = (state.list ?? []).map((product) => {
          if (product._id === actions.payload.data.product._id) {
            return actions.payload.data.product;
          }
          return product;
        });
      },
    );
  },
});

export { selectors, sagas };
