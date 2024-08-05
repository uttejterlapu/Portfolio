import React from 'react';

const CustomDot = ({ onClick, active }) => {
  const dotStyle = {
    display: 'inline-block',
    height: '12px',
    width: '12px',
    borderRadius: '50%',
    backgroundColor: active ? '#00ADB5' : '#393E46',
    margin: '0 5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div
      style={dotStyle}
      onClick={onClick}
    />
  );
};

export default CustomDot;
