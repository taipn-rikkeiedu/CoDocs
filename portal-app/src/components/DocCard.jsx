import React from 'react';

export default function DocCard({ title, icon, children }) {
  return (
    <div className="doc-card">
      <div className="doc-header">
        <h3 className="doc-title">
          {icon && <i className={`fa-solid ${icon}`}></i>} {title}
        </h3>
      </div>
      <div className="doc-body">
        {children}
      </div>
    </div>
  );
}
