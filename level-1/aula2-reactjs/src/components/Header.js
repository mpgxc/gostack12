import React from 'react';

export default ({ title, children }) => {
  return (
    <>
      <h1>Opa {title}</h1>
      <h2>Eita Hein</h2>
      {children}
    </>
  );
}

