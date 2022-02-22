import React from "react";

import database from "../database/data.json";

export const Roadmap = () => {
  let data = {};
  const roadmapStatus = ["planned", "in-progress", "live"];
  roadmapStatus.forEach((status) => {
    data[status] = database.productRequests.filter(
      (val) => val.status === status
    );
  });

  //render feedback card
  const renderFeedbackCard = (status) => {
    return data[status].map((val) => {
      //calculate total comments & replies
      let totalComments = val.comments.length;
      val.comments.forEach((comment) => {
        if (comment.replies) {
          totalComments += comment.replies.length;
        }
      });
      val.totalComments = totalComments;

      return (
        <div className={`feedback-card rounded-corner ${status}`}>
          <p className="status flex flex-center-hrz">
            <div className="status-color"></div> {status}
          </p>
          <div className="content">
            <h3>{val.title}</h3>
            <p>{val.description}</p>
          </div>

          <p className="tag rounded-corner">{val.category}</p>

          <div className="flex flex-space-between">
            <div className="upvotes flex flex-center-hrz rounded-corner">
              <img
                className="suggestion-logo"
                src={`${process.env.PUBLIC_URL}/images/shared/icon-arrow-up.svg`}
              />
              <p>{val.upvotes}</p>
            </div>
            <div className="comment-preview flex flex-center-hrz">
              <img
                className="suggestion-logo"
                src={`${process.env.PUBLIC_URL}/images/shared/icon-comments.svg`}
              />
              <p>{val.totalComments}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="roadmap-page grid-12 container">
      <div className="top-bar flex flex-space-between flex-center-hrz text-light rounded-corner">
        <div className="flex flex-center-hrz">
          <h3 className="text-light">Roadmap</h3>
        </div>
        <button className="btn btn-primary">+Add Feedback</button>
      </div>

      <div className="roadmap-status-container">
        <h3 className="status-title">{`Planned (${data["planned"].length})`}</h3>
        <p className="status-subtitle">Ideas prioritized for research</p>

        <div className="feedback-card-container">
          {renderFeedbackCard("planned")}
        </div>
      </div>

      <div className="roadmap-status-container">
        <h3 className="status-title">{`In-Progress (${data["in-progress"].length})`}</h3>
        <p className="status-subtitle">Currently being developed</p>

        <div className="feedback-card-container">
          {renderFeedbackCard("in-progress")}
        </div>
      </div>

      <div className="roadmap-status-container">
        <h3 className="status-title">{`Live (${data["live"].length})`}</h3>
        <p className="status-subtitle">Released features</p>

        <div className="feedback-card-container">
          {renderFeedbackCard("live")}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
