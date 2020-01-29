import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from "reactstrap";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
export default function LoginModal() {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(null);
  const error = useSelector(state => state.errorReducer);
  const isAuthenticated = useSelector(
    state => state.authReducer.isAuthenticated
  );
  const dispatch = useDispatch();
  const toggleModal = () => {
    setModal(!modal);
    dispatch(clearErrors());
  };
  useEffect(() => {
    if (error.id === "LOGIN_FAIL") {
      setErrMsg(error.msg.msg);
    } else {
      setErrMsg(null);
    }
  }, [error]);
  // If authenticated close modal
  useEffect(() => {
    if (modal) {
      if (isAuthenticated) {
        toggleModal();
      }
    }
  }, [isAuthenticated]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      setErrMsg("Fields Can't be empty!!");
      return;
    }

    const newUser = {
      email,
      password
    };
    dispatch(login(newUser));
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <NavLink onClick={toggleModal} href="#">
        Login
      </NavLink>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          {errMsg ? <Alert color="danger">{errMsg}</Alert> : null}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email"
                id="email"
                placeholder="example@email.com"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="make it secure"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </FormGroup>
            <Button color="dark" style={{ marginTop: "2rem" }} block>
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
