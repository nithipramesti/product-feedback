import React from "react";

export const EditFeedback = () => {
  return (
    <div className="add-feedback-page container grid-12">
      <div className="add-feedback-container">
        <a className="go-back-link" href="#">
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
            Editing <span>‘Add a dark theme option’</span>
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
                  value="Please add a dark theme option"
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
                  <option value="feature" selected={true}>
                    Feature
                  </option>
                  <option value="ui" selected={false}>
                    UI
                  </option>
                  <option value="ux" selected={false}>
                    UX
                  </option>
                  <option value="enhancement" selected={false}>
                    Enhancement
                  </option>
                  <option value="bug" selected={false}>
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
                  <option value="feature" selected={false}>
                    Suggestion
                  </option>
                  <option value="planned" selected={true}>
                    Planned
                  </option>
                  <option value="in-progress" selected={false}>
                    In Progress
                  </option>
                  <option value="live" selected={false}>
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
                  value="It would help people with light sensitivities and who prefer dark 
                  mode."
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
                  value="Add Feedback"
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
