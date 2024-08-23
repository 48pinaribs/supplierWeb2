import React from 'react';

function DisplayLocation({ location }) {
  return (
    <div>
      <p> {location.pathname}</p>
    </div>
  );
}

export default DisplayLocation;
