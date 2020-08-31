import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="gifgriditem animate__animated animate__rollIn">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};
