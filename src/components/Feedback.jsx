import React from "react";

export const Feedback = (props) => {
  return (
    <div className="feedback rounded-corner flex flex-space-between flex-center-hrz">
      <div className="flex flex-top-hrz">
        <div className="upvotes rounded-corner">
          <img
            className="suggestion-logo"
            src={`${process.env.PUBLIC_URL}/images/shared/icon-arrow-up.svg`}
          />
          <p>{props.data.upvotes}</p>
        </div>
        <div className="content">
          <h3>{props.data.title}</h3>
          <p>{props.data.description}</p>
          <p className="tag rounded-corner">{props.data.category}</p>
        </div>
      </div>
      <div className="comment-preview flex flex-center-hrz">
        <img
          className="suggestion-logo"
          src={`${process.env.PUBLIC_URL}/images/shared/icon-comments.svg`}
        />
        <p>{props.data.totalComments}</p>
      </div>
    </div>
  );
};

export default Feedback;
