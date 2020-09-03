import React from 'react';

/**
 * The Input Component.
 * 
 * @param  {Number}    count         The count value to show on the input.
 * @param  {Function}  handleChange  The function to handle the onChange action.
 *
 * @return {JSX}  The JSX element to render.         
 */
function Input(props) {
  console.log(props);
  return (
    <input onChange={props.handleChange} value={props.count}/>
  )
}

export default Input;