import database from "../database/data.json";
import React from "react";

export const FeedbackDetail = () => {
  const feedback = database.productRequests[1];
  console.log(feedback);

  return (
    <div className="suggestion-page grid-12 container">
      <main>
        <div className="feedback-container">
          <div className="feedback rounded-corner flex flex-space-between flex-center-hrz">
            <div className="flex flex-top-hrz">
              <div className="upvotes rounded-corner">{feedback.upvotes}</div>
              <div className="content">
                <h3>{feedback.title}</h3>
                <p>{feedback.description}</p>
                <p className="tag rounded-corner">{feedback.category}</p>
              </div>
            </div>
            <div className="comment-preview">
              <p>{feedback.id}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeedbackDetail;
