import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
} from "./userRedux";
import { publicRequest } from "../requestMethods";
// import axios from "axios";

export const login = async (dispatch, user) => {
  console.log(user);
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/users/login", user);
    console.log(res);
    console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/users/signup", user);
    dispatch(registerSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(registerFailure());
  }
};

// export const registerCall = async (userData) => {
//   const res = await axios.post("https://localhost:5000/api/v1", userData);
//   console.log(res.data);
//   if (res.data) {
//     localStorage.setItem("user", JSON.stringify(res.data));
//   }

//   return res.data;
// };
