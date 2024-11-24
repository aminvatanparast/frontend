import {store} from "../store/page.js";

export const logout = async () => {
  store.dispatch({ type: 'LOGOUT' });
  localStorage.clear();
  window.location = `${process.env.PUBLIC_URL}/auth/login`;
};
