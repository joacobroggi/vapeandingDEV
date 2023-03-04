import { createSlice } from "@reduxjs/toolkit";

const ordenSlice = createSlice({
  name: "orden",
  initialState: {
    productos: [],
    total: 0,
    envio: 0,
    pago: '',
    direccion: '',
    apartamento: '',
    telefono: '',
    nombre: '',
    userId: '',
    hasOrdered: false

  },
  reducers: {
    addOrden: (state, action) => {
      state.total = action.payload.total;
      state.productos = action.payload.productos;
      state.envio = action.payload.envio;
      state.pago = action.payload.pago;
      state.direccion = action.payload.direccion;
      state.apartamento = action.payload.apartamento;
      state.telefono = action.payload.telefono;
      state.nombre = action.payload.nombre + ' ' + action.payload.apellido;
      state.userId = action.payload.userId;
      state.hasOrdered = action.payload.hasOrdered;
    },
    removeOrden: (state, action)=> {
        state.total = 0;
        state.productos = [];
        state.envio = 0;
        state.pago = '';
        state.direccion = '';
        state.apartamento = '';
        state.telefono = '';
     
    }
  },
});

export const { addOrden } = ordenSlice.actions;
export default ordenSlice.reducer;