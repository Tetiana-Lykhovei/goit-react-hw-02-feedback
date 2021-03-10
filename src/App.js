import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";

import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  onLeaveFeedback = (ev) => {
    const name = ev.target.name;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const onLeaveFeedback = this.onLeaveFeedback;

    return (
      <div className="App">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        {countTotalFeedback > 0 ? (
          <Section title={"Statistics"}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message={"No feedback given"} />
        )}
      </div>
    );
  }
}

export default App;
