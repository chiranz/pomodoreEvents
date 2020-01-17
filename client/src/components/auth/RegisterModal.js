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
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
export default function RegisterModal() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
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
    if (error.id === "REGISTER_FAIL") {
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
    if (!name || !email || !password || !confirmPassword) {
      setErrMsg("Fields Can't be empty!!");
      return;
    }
    if (password !== confirmPassword) {
      setErrMsg("Password must be equal");
      return;
    }

    const newUser = {
      name,
      email,
      password
    };
    dispatch(register(newUser));
    setEmail("");
    setName("");
    setPassword("");
    setConfirmpassword("");
  };
  return (
    <div>
      <NavLink onClick={toggleModal} href="#">
        Register
      </NavLink>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Register</ModalHeader>
        <ModalBody>
          {errMsg ? <Alert color="danger">{errMsg}</Alert> : null}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </FormGroup>
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
            <FormGroup>
              <Label for="password1">Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Enter your password again"
                onChange={e => setConfirmpassword(e.target.value)}
                value={confirmPassword}
              />
            </FormGroup>
            <Button color="dark" style={{ marginTop: "2rem" }} block>
              Signup
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
