import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { addItem } from "../actions/topicActions";
export default function TopicModal() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const toggleModal = () => setModal(!modal);
  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      name
    };
    dispatch(addItem(newItem));
    toggleModal();
  };
  return (
    <div>
      <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        onClick={toggleModal}
      >
        Add Topic
      </Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add new topic</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="topic">Topic</Label>
              <Input
                type="text"
                name="name"
                id="topic"
                placeholder="Add New Topic"
                onChange={e => setName(e.target.value)}
                value={name}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add Topic
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
