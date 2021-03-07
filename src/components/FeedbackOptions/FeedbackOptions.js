import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={s.buttons}>
      <button
        type="button"
        name="good"
        onClick={onLeaveFeedback}
        className={s.button}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={onLeaveFeedback}
        className={s.button}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        onClick={onLeaveFeedback}
        className={s.button}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
