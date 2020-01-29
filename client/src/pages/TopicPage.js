import React, { Fragment } from "react";
import TopicModal from "../components/TopicModal";
import TopicList from "../components/TopicList";

export default function TopicPage() {
  return (
    <Fragment>
      <TopicModal />
      <TopicList />
    </Fragment>
  );
}
