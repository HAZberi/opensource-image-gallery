import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Noor"
        timeAgo="Today at 4:00PM"
        commentText="React is Awesome"
        source={faker.image.people()}
      />
      <CommentDetail
        author="Saif"
        timeAgo="Today at 8:00PM"
        commentText="Javascript is Awesome"
        //faker.image.avatar is not working broken link
        source={faker.image.people()}
      />
      <CommentDetail
        author="Omer"
        timeAgo="Yesterday at 1:00PM"
        commentText="I am Awesome and its the truth 😂"
        source={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}