import database from "../database/data.json";
import React from "react";
import Feedback from "../components/Feedback";

export const FeedbackDetail = () => {
  const feedbackData = database.productRequests[1];
  console.log(feedbackData);

  //render comments
  const renderComments = () => {
    return feedbackData.comments.map((val) => {
      return (
        <div className="comment">
          <div className="flex flex-space-between">
            <img
              className="user-img"
              src={process.env.PUBLIC_URL + val.user.image}
            />
            <div className="flex-right">
              <div className="comment-top flex flex-space-between">
                <div className="flex-left">
                  <p className="user-full-name">{val.user.name}</p>
                  <p className="username">{"@" + val.user.username}</p>
                </div>
                <a className="reply-comment-link" href="#">
                  Reply
                </a>
              </div>
              <div className="comment-content">
                <p>{val.content}</p>
              </div>
            </div>
          </div>

          {val.replies.length > 0 && (
            <div className="replies-container">
              {renderReplies(val.replies)}
            </div>
          )}
        </div>
      );
    });
  };

  //render replies
  const renderReplies = (repliesData) => {
    return repliesData.map((val) => {
      return (
        <div className="reply flex flex-space-between">
          <img
            className="user-img"
            src={process.env.PUBLIC_URL + val.user.image}
          />
          <div className="flex-right">
            <div className="comment-top flex flex-space-between">
              <div className="flex-left">
                <p className="user-full-name">{val.user.name}</p>
                <p className="username">{"@" + val.user.username}</p>
              </div>
              <a className="reply-comment-link" href="#">
                Reply
              </a>
            </div>
            <div className="comment-content">
              <p>
                <a href="#" className="replying-to">
                  {"@" + val.replyingTo + " "}
                </a>
                {val.content}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="feedback-detail-page grid-12 container">
      <div className="feedback-detail-container">
        <div className="top-bar flex flex-space-between flex-center-hrz">
          <a className="goback-link" href="#">
            <img
              className="suggestion-logo"
              src={`${process.env.PUBLIC_URL}/images/shared/icon-arrow-left.svg`}
            />
            Go Back
          </a>
          <button className="btn btn-primary">Edit Feedback</button>
        </div>

        <Feedback data={feedbackData} />

        <div className="comments-container rounded-corner">
          <h3>4 Comments</h3>
          {renderComments()}
        </div>

        <div className="add-comment-container rounded-corner">
          <h3>Add Comment</h3>
          <textarea
            name="comment"
            id="add-comment"
            rows="3"
            placeholder="Type your comment here"
          ></textarea>
          <div className="flex flex-space-between flex-center-hrz">
            <p>
              <span>250</span> characters left
            </p>
            <button className="btn btn-primary">Post Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetail;
