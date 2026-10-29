import React from 'react';

export default function RouteToast({ message, visible }) {
  return (
    <div
      className={`route-toast ${visible ? 'visible' : ''}`}
      id="preview-toast"
      role="status"
      aria-live="polite"
    >
      <span className="route-node-dot" aria-hidden="true" />
      <span id="preview-toast-text">{message}</span>
    </div>
  );
}

