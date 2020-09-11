import React from 'react';
import { NavLink } from 'react-router-dom';

function List(props) {
  return <ul>
    {props.data.map(element => <li id={element.id} key={element.id}><NavLink to={`/product/${element.id}`}>{element.name}</NavLink></li>)}
  </ul>
};

export default List;