import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.buttons}>
      {options.map((option) => (
        <button
          type="button"
          name={option}
          key={option}
          className={s.button}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
