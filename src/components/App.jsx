import React, { Components } from "react";
import { Section } from "./Sections/Section";
import { Notification } from "./Notification/Notification";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { FeedBackStat } from "./Statistics/FeedBackStat";

export class App extends Components {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    }

  onClick = stateName => {
    this.stateName((prevState) => ({
      [stateName]: prevState[stateName] + 1,
  }))
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback() * 100).toFixed(0);
  }

  render() {
    const options = Object.keys(this.state);
      return<>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.onClick} />
          </Section>

          <Section title="Statistics">
            {this.countTotalFeedback() === 0? <Notification message='No feedback given'/>: (<div>
              <FeedBackStat
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}/>
                </div>)}
          </Section>
      </>
}
}