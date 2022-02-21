import React from "react";

import database from "../database/data.json";

export const Roadmap = () => {
  //render feedback card
  const renderFeedbackCard = (status) => {
    //get initial data for suggestion feedback
    const data = database.productRequests.filter(
      (val) => val.status === status
    );

    return data.map((val) => {
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
              <p>3</p>
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
          <h3 className="text-light">Suggestions</h3>
        </div>
        <button className="btn btn-primary">+Add Feedback</button>
      </div>

      <div className="roadmap-status-container">
        <h3 className="status-title">Planned (3)</h3>
        <p className="status-subtitle">Ideas prioritized for research</p>

        <div className="feedback-card-container">
          {renderFeedbackCard("planned")}
        </div>
      </div>

      <div className="roadmap-status-container">
        <h3 className="status-title">In-Progress (3)</h3>
        <p className="status-subtitle">Currently being developed</p>

        <div className="feedback-card-container">
          {renderFeedbackCard("in-progress")}
        </div>
      </div>

      <div className="roadmap-status-container">
        <h3 className="status-title">Live (3)</h3>
        <p className="status-subtitle">Released features</p>

        <div className="feedback-card-container">
          {renderFeedbackCard("live")}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
