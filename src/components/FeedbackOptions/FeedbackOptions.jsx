// import React, { Component } from 'react';
import css from "./FeedbackOptions.module.css";



 const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={css.btnMain}>
            {options.map((option, index) => (
                <button  className={css.btnFeedback}key={index} onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            ))}
        </div>
    )
}


export default FeedbackOptions;
