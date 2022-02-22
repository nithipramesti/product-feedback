import database from "../database/data.json";

import React from "react";
import Feedback from "../components/Feedback";
import { useParams } from "react-router-dom";

export const FeedbackDetail = () => {
  //get route params value
  const params = useParams();

  const feedbackData = database.productRequests.find(
    (el) => el.id === Number(params.id_feedback)
  );

  //calculate total comments & replies in each feedback
  feedbackData.totalComments = feedbackData.comments.length;
  feedbackData.comments.forEach((comment) => {
    feedbackData.totalComments += comment.replies.length;
  });

  //render comments
  const renderComments = () => {
    return feedbackData.comments.map((val) => {
      return (
        <div className="comment">
          <div className="flex">
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

              <div className="add-reply-container hidden">
                <div className="flex flex-space-between flex-top-hrz">
                  <textarea
                    name="comment"
                    id="add-comment"
                    rows="3"
                    placeholder="Type your comment here"
                  ></textarea>
                  <button className="btn btn-primary">Post Reply</button>
                </div>
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
            <div className="add-reply-container hidden">
              <div className="flex flex-space-between flex-top-hrz">
                <textarea
                  name="comment"
                  id="add-comment"
                  rows="3"
                  placeholder="Type your comment here"
                ></textarea>
                <button className="btn btn-primary">Post Reply</button>
              </div>
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
          <a
            className="go-back-link"
            href={feedbackData.status === "suggestion" ? "/" : "/roadmap"}
          >
            <img
              className="suggestion-logo"
              src={`${process.env.PUBLIC_URL}/images/shared/icon-arrow-left.svg`}
            />
            Go Back
          </a>
          <a
            className="btn btn-primary"
            href={`/edit-feedback/${feedbackData.id}`}
          >
            Edit Feedback
          </a>
        </div>

        <Feedback data={feedbackData} />

        <div className="comments-container rounded-corner">
          <h3>{feedbackData.totalComments} Comments</h3>
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
