import React from "react";
import { logout } from "../../actions/authActions";
import { NavLink } from "reactstrap";
import { useDispatch } from "react-redux";
import { CLEAR_ITEMS } from "../../actions/types";

export default function Logout() {
  const dispatch = useDispatch();
  return (
    <NavLink
      onClick={() => {
        dispatch(logout());
        dispatch({
          type: CLEAR_ITEMS
        });
      }}
      href="#"
    >
      Logout
    </NavLink>
  );
}
