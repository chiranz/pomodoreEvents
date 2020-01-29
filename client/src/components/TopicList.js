import React, { useEffect } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, getItems } from "../actions/topicActions";
import AlertModal from "./AlertModal";

export default function TopicList() {
  const topics = useSelector(state => state.topicReducer.topics);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, []);
  function onDeleteClick(id) {
    dispatch(deleteItem(id));
  }
  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="topic-list">
          {topics.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} className="fade-topic ">
              <ListGroupItem>
                <div className="d-flex justify-content-between align-center">
                  <div>{name}</div>
                  <AlertModal
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => onDeleteClick(_id)}
                    id={_id}
                    message="Are you sure to delete this topic?"
                    messageHeading="Delete Topic"
                    actionColor="danger"
                    action={onDeleteClick}
                    actionName="Delete"
                  >
                    Remove
                  </AlertModal>
                </div>
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
}
