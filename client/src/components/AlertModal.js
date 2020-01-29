import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

export default function AlertModal({
  children,
  message,
  color,
  className,
  size,
  messageHeading,
  actionColor,
  actionName,
  action,
  id
}) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const handleClick = e => {
    e.preventDefault();
    action(id);
    toggleModal();
  };
  return (
    <div>
      <Button
        color={color}
        className={className}
        size={size}
        onClick={toggleModal}
        style={{ outline: "none" }}
      >
        {children}
      </Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{messageHeading}</ModalHeader>
        <ModalBody>
          <div className="d-flex justify-content-between">
            <div>{message}</div>
            <div>
              <Button color={actionColor} onClick={handleClick}>
                {actionName}
              </Button>
              <Button color="dark" className="ml-2" onClick={toggleModal}>
                Close
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
