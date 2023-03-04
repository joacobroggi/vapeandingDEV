import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "carrito",
  initialState: {
    productos: [],
    total: 0,
    envio: 0
  },
  reducers: {
    addProducto: (state, action) => {
      state.cantidad += action.payload.cantidad;
      state.productos.push(action.payload);
      state.total += action.payload.precio;
    },
    removeProducto: (state, action) => {
      let array = state.productos;
      array.forEach((element) => {
        if (element.claveUnica === action.payload) {
          let index = array.indexOf(element);
          console.log(index);
          array.splice(index, 1);
          state.total -= element.precio;
        }
      });
    },
    addEnvio: (state, action)=> {
      state.envio = action.payload;
    }
  },
});

export const { addProducto, removeProducto, addEnvio } = cartSlice.actions;
export default cartSlice.reducer;
