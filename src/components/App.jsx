import { Component } from "react";

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions'

import Statistics  from 'components/Statistics/Statistics'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };


  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  handleFeedback = option => {
    this.setState({ [option]: this.state[option] + 1 });
  };



  render() {
    return (
      <>
  
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
        />
        <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percent={this.countPositiveFeedbackPercentage()}
            />

      </>
    );
  }
}

