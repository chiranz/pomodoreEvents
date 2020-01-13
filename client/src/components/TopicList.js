import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import { useSelector } from "react-redux";

export default function TopicList() {
  const topics = useSelector(state => state.topics);
  return (
    <Container>
      <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        onClick={() => {
          const name = prompt("Enter Topic");
          if (name) {
            const topic = {
              id: uuid(),
              weight: Math.floor(Math.random() * 20),
              name,
              createdAt: new Date()
            };
            return;
          }
        }}
      >
        Add Topic
      </Button>
      <ListGroup>
        <TransitionGroup className="topic-list">
          {topics.map(({ id, name, createdAt }) => (
            <CSSTransition key={id} timeout={500} className="fade-topic">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    const newTopics = topics.filter(topic => topic.id !== id);
                    console.log(newTopics);
                  }}
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
