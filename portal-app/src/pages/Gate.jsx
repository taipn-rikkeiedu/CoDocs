import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Gate({ onUnlock }) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleUnlock = (e) => {
    e.preventDefault();
    const correctPasscode = import.meta.env.VITE_APP_PASSCODE || 'Rikkei@2026';
    
    if (passcode === correctPasscode) {
      setError(false);
      localStorage.setItem('rikkei_portal_unlocked', 'true');
      if (onUnlock) onUnlock();
      navigate('/dashboard');
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="gate-container">
      <div className="gate-glass-panel">
        <div className="gate-logo">
          <div className="logo-icon-wrapper">
            <i className="fa-solid fa-lock"></i>
          </div>
          <h2>Rikkei Education Portal</h2>
          <p>Restricted Access. Please enter the passcode.</p>
        </div>
        
        <form onSubmit={handleUnlock} className={`gate-form ${error ? 'shake' : ''}`}>
          <div className="input-group">
            <i className="fa-solid fa-key"></i>
            <input 
              type="password" 
              placeholder="Enter passcode..."
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              autoFocus
            />
          </div>
          <button type="submit" className="gate-submit-btn">
            Unlock <i className="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </form>
        {error && <div className="gate-error-text">Passcode is incorrect.</div>}
      </div>
    </div>
  );
}

export default Gate;
