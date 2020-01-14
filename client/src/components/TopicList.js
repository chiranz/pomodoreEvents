import React, { useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, getItems } from "../actions/topicActions";

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
          {topics.map(({ _id, name, createdAt }) => (
            <CSSTransition key={_id} timeout={500} className="fade-topic">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => onDeleteClick(_id)}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
}
