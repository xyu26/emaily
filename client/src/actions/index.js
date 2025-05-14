import axios from "axios";
import { FETCH_USER } from "./types";
export const fetchUser = () => async (dispatch) => {
  // Make a request to the server to get the current user
  const res = await axios.get("/api/current_user");
  // Dispatch the action with the user data
  dispatch({ type: FETCH_USER, payload: res.data });
};
