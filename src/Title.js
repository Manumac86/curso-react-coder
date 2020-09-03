import React from 'react';

function Title(props) {
  
  console.log(props);
  return (
    <div className="Title">
      {props.title}
      {props.children}
    </div>
  )
}

export default Title;