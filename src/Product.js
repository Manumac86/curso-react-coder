import React from 'react';
import { useParams } from 'react-router-dom';

function Product({ data }) {
  const { id } = useParams();
  return (
    <div>
      <h2>Now showing product {data[`${id - 1}`].id}</h2>
    </div>
  );
}

export default Product;