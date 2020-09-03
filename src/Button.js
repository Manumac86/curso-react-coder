import React from 'react';

/**
 * The Button component.
 *
 * @param  {Object}    props
 *
 * @return {JSX}       The Button to render.
 */
function Button(props) {
  return <button onClick={props.onClick}>{props.sign}</button> 
};

export default Button;
