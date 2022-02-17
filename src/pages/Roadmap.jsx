import React from "react";

export const Roadmap = () => {
  return (
    <div className="roadmap-page grid-12 container">
      <div className="top-bar flex flex-space-between flex-center-hrz text-light rounded-corner">
        <div className="flex flex-center-hrz">
          <h3 className="text-light">Suggestions</h3>
        </div>
        <button className="btn btn-primary">+Add Feedback</button>
      </div>

      <div className="roadmap-status-container">
        <h3>Planned (3)</h3>
        <p>Ideas prioritized for research</p>

        <div className="feedback-card rounded-corner">
          <p>Planned</p>
          <h3>More comprehensive reports</h3>
          <p>
            It would be great to see a more detailed breakdown of solutions.
          </p>

          <p className="tag">Feature</p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
