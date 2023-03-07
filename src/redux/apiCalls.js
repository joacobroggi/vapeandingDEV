import { loginFailure, loginStart, loginSuccess } from "./userReducer";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, email) => {
    dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/iniciarSesion", email);
        dispatch(loginSuccess(res.data));
  } catch (err) {
        dispatch(loginFailure());
        console.log(err);
  }
};