import database from "../database/data.json";

import React, { useEffect, useState } from "react";

import Feedback from "../components/Feedback";

export const Suggestion = () => {
  //get initial data for suggestion feedback
  const initialSuggestionFeedback = database.productRequests.filter(
    (val) => val.status === "suggestion"
  );

  //calculate total comments & replies in each feedback
  initialSuggestionFeedback.forEach((val) => {
    let totalComments = val.comments.length;
    val.comments.forEach((comment) => {
      if (comment.replies) {
        totalComments += comment.replies.length;
      }
    });

    val.totalComments = totalComments;
  });

  //sort suggestion comparison functions
  const compareMostUpvotes = (val1, val2) => {
    return val2.upvotes - val1.upvotes;
  };

  const compareLeastUpvotes = (val1, val2) => {
    return val1.upvotes - val2.upvotes;
  };

  const compareMostComments = (val1, val2) => {
    return val2.totalComments - val1.totalComments;
  };

  const compareLeastComments = (val1, val2) => {
    return val1.totalComments - val2.totalComments;
  };

  //set state for suggestion feedback sorted by default (most upvotes)
  const [suggestionFeedback, setSuggestionFeedback] = useState([]);

  //set state for sort by value
  const [sortByValue, setSortByValue] = useState("most-upvotes");

  //set state for filter by category
  const [filterByCategory, setFilterByCategory] = useState("all");

  //function to sorting suggestion feedback by value
  useEffect(() => {
    switch (sortByValue) {
      case "most-upvotes":
        setSuggestionFeedback(
          initialSuggestionFeedback.sort((a, b) => compareMostUpvotes(a, b))
        );
        break;

      case "least-upvotes":
        setSuggestionFeedback(
          initialSuggestionFeedback.sort((a, b) => compareLeastUpvotes(a, b))
        );
        break;

      case "most-comments":
        setSuggestionFeedback(
          initialSuggestionFeedback.sort((a, b) => compareMostComments(a, b))
        );
        break;

      case "least-comments":
        setSuggestionFeedback(
          initialSuggestionFeedback.sort((a, b) => compareLeastComments(a, b))
        );
        break;
    }

    console.log(sortByValue);
  }, [sortByValue]);

  //function to filtering suggestion feedback by category
  useEffect(() => {
    if (filterByCategory === "all") {
      setSuggestionFeedback(initialSuggestionFeedback);
    } else {
      setSuggestionFeedback(
        initialSuggestionFeedback.filter(
          (val) => val.category === filterByCategory
        )
      );
    }
  }, [filterByCategory]);

  //render suggestion feedback
  const renderSuggestion = () => {
    return suggestionFeedback.map((val) => {
      return <Feedback data={val} />;
    });
  };

  const filterOptions = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  //render filter options
  const renderFilterOptions = () => {
    return filterOptions.map((category) => {
      return (
        <div
          className={`filter-category ${
            filterByCategory === category.toLocaleLowerCase() && "filter-active"
          }`}
          onClick={() => setFilterByCategory(category.toLocaleLowerCase())}
        >
          {category}
        </div>
      );
    });
  };

  return (
    <div className="suggestion-page grid-12 container">
      <div className="side-bar">
        <div
          className="title rounded-corner"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/suggestions/desktop/background-header.png)`,
          }}
        >
          <h2 className="text-light">Frontend Mentor</h2>
          <p className="text-light">Feedback Board</p>
        </div>
        <div className="filter-container rounded-corner">
          {renderFilterOptions()}
        </div>
        <div className="roadmap-container rounded-corner">
          <div className="flex flex-space-between">
            <h3>Roadmap</h3>
            <a href="/roadmap">View</a>
          </div>
          <div className="roadmap-status">
            <div className="status flex" id="planned">
              <div className="status-title">
                <div className="status-color"></div>
                <p>Planned</p>
              </div>
              <p className="status-counter">2</p>
            </div>
            <div className="status flex" id="in-progress">
              <div className="status-title">
                <div className="status-color"></div>
                <p>In-Progress</p>
              </div>
              <p className="status-counter">2</p>
            </div>
            <div className="status flex" id="live">
              <div className="status-title">
                <div className="status-color"></div>
                <p>Live</p>
              </div>
              <p className="status-counter">2</p>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="top-bar flex flex-space-between flex-center-hrz text-light rounded-corner">
          <div className="flex flex-center-hrz">
            <h3 className="text-light">
              <img
                className="suggestion-logo"
                src={`${process.env.PUBLIC_URL}/images/suggestions/icon-suggestions.svg`}
              />
              <span className="text-light">{suggestionFeedback.length}</span>
              &nbsp;Suggestions
            </h3>
            <div className="sort-by-container">
              <label htmlFor="sort-by">Sort by:</label>
              <select
                name="sort-by"
                className="text-light"
                id="sort-by"
                onChange={(e) => setSortByValue(e.target.value)}
              >
                <option value="most-upvotes">Most Upvotes</option>
                <option value="least-upvotes">Least Upvotes</option>
                <option value="most-comments">Most Comments</option>
                <option value="least-comments">Least Comments</option>
              </select>
            </div>
          </div>
          <a href="/add-feedback" className="btn btn-primary">
            +Add Feedback
          </a>
        </div>
        <div className="feedback-container">{renderSuggestion()}</div>
      </main>
    </div>
  );
};

export default Suggestion;
