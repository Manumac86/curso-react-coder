import React from 'react';

function List(props) {
  return <ul>
    {props.data.map(element => <li id={element.id} key={element.id}>{element.name}</li>)}
  </ul>
};

export default List;