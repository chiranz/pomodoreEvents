import React from "react";
import { logout } from "../../actions/authActions";
import { NavLink } from "reactstrap";
import { useDispatch } from "react-redux";

export default function Logout() {
  const dispatch = useDispatch();
  return (
    <NavLink onClick={() => dispatch(logout())} href="#">
      Logout
    </NavLink>
  );
}
