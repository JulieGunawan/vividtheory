import React from 'react';
const Dialog = ({ message, onConfirm }) => {
  if (!message) {
    return null;
  }

  return (
    <div className="dialog" onClick={() => onConfirm(false)}>
      <div onClick={(e) => e.stopPropagation()}>
        <h3>{message}</h3>
        <div className="buttons">
          <button onClick={() => onConfirm(true)}>Yes</button>
          <button onClick={() => onConfirm(false)}>No</button>
        </div>
      </div>
    </div>
  );
};
export default Dialog;
