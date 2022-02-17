import React from "react";

export const AddFeedback = () => {
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
            src={`${process.env.PUBLIC_URL}/images/shared/icon-new-feedback.svg`}
          />
          <h2>Add New Feedback</h2>
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
                  <option value="feature">Feature</option>
                  <option value="ui">UI</option>
                  <option value="ux">UX</option>
                  <option value="enhancement">Enhancement</option>
                  <option value="bug">Bug</option>
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
                ></textarea>
              </label>
            </div>

            <div className="btn-container flex flex-justify-end">
              <input className="btn btn-dark" type="button" value="Cancel" />
              <input
                className="btn btn-primary"
                type="submit"
                value="Add Feedback"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFeedback;
