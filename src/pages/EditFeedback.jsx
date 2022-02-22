import database from "../database/data.json";

import React from "react";
import { useParams } from "react-router-dom";

export const EditFeedback = () => {
  //get route params value
  const params = useParams();

  const feedbackData = database.productRequests.find(
    (el) => el.id === Number(params.id_feedback)
  );

  return (
    <div className="add-feedback-page container grid-12">
      <div className="add-feedback-container">
        <a
          className="go-back-link"
          href={`/feedback-detail/${feedbackData.id}`}
        >
          <img
            className="suggestion-logo"
            src={`${process.env.PUBLIC_URL}/images/shared/icon-arrow-left.svg`}
          />
          Go Back
        </a>

        <div className="add-feedback-card rounded-corner">
          <img
            className="add-icon"
            src={`${process.env.PUBLIC_URL}/images/shared/icon-edit-feedback.svg`}
          />
          <h2>
            Editing <span>{`'${feedbackData.title}'`}</span>
          </h2>
          <form>
            <div className="input-container">
              <label htmlFor="feedback-title">
                <p className="label-title">Feedback Title</p>
                <p className="label-subtitle">
                  Add a short, descriptive headline
                </p>
                <input
                  className="input-field"
                  type="text"
                  id="feedback-title"
                  value={feedbackData.title}
                />
              </label>
            </div>

            <div className="input-container">
              <label htmlFor="feedback-category">
                <p className="label-title">Category</p>
                <p className="label-subtitle">
                  Choose a category for your feedback
                </p>
                <select
                  className="input-field"
                  name="feedback-category"
                  id="feedback-category"
                >
                  <option
                    value="feature"
                    selected={
                      feedbackData.category === "feature" ? true : false
                    }
                  >
                    Feature
                  </option>
                  <option
                    value="ui"
                    selected={feedbackData.category === "ui" ? true : false}
                  >
                    UI
                  </option>
                  <option
                    value="ux"
                    selected={feedbackData.category === "ux" ? true : false}
                  >
                    UX
                  </option>
                  <option
                    value="enhancement"
                    selected={
                      feedbackData.category === "enhancement" ? true : false
                    }
                  >
                    Enhancement
                  </option>
                  <option
                    value="bug"
                    selected={feedbackData.category === "bug" ? true : false}
                  >
                    Bug
                  </option>
                </select>
              </label>
            </div>

            <div className="input-container">
              <label htmlFor="update-status">
                <p className="label-title">Update Status</p>
                <p className="label-subtitle">Change feedback state</p>
                <select
                  className="input-field"
                  name="feedback-category"
                  id="feedback-category"
                >
                  <option
                    value="suggestion"
                    selected={
                      feedbackData.status === "suggestion" ? true : false
                    }
                  >
                    Suggestion
                  </option>
                  <option
                    value="planned"
                    selected={feedbackData.status === "planned" ? true : false}
                  >
                    Planned
                  </option>
                  <option
                    value="in-progress"
                    selected={
                      feedbackData.status === "in-progress" ? true : false
                    }
                  >
                    In Progress
                  </option>
                  <option
                    value="live"
                    selected={feedbackData.status === "live" ? true : false}
                  >
                    Live
                  </option>
                </select>
              </label>
            </div>

            <div className="input-container">
              <label htmlFor="feedback-detail">
                <p className="label-title">Feedback Detail</p>
                <p className="label-subtitle">
                  Include any specific comments on what should be improved,
                  added, etc.
                </p>
                <textarea
                  className="input-field"
                  name="feedback-detail"
                  id="feedback-detail"
                  rows="4"
                  value={feedbackData.description}
                ></textarea>
              </label>
            </div>

            <div className="btn-container flex flex-space-between">
              <input className="btn btn-danger" type="button" value="Delete" />

              <div className="flex-right">
                <input className="btn btn-dark" type="button" value="Cancel" />
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Edit Feedback"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditFeedback;
