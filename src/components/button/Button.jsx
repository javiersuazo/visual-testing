import React from 'react';
import './button.css'; // Import the CSS file for the button

export const Button = (props) => {
  return (
    <button className="my-button" onClick={props.onClick}>
      PRESS ME 1
    </button>
  );
}
