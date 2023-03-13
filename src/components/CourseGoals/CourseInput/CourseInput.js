import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);

    const isInputValid = !!event.target.value.trim().length
    setIsValid(isInputValid);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    const isInputValid = !!enteredValue.trim().length
    setIsValid(isInputValid);
    if (!isInputValid) {
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input
            style={{
              borderColor: !isValid ? 'red' : '#ccc',
              background: !isValid ? 'salmon' : 'transparent'
             }}
            type="text"
            onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
