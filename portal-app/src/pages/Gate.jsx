import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Gate({ onUnlock }) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);
  const navigate = useNavigate();

  const handleUnlock = async (e) => {
    e.preventDefault();
    setChecking(true);
    try {
      const res = await fetch('/api/verify-passcode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });
      const data = await res.json();

      if (data.ok) {
        setError(false);
        localStorage.setItem('rikkei_portal_unlocked', 'true');
        if (onUnlock) onUnlock();
        navigate('/dashboard');
      } else {
        setError(true);
        setTimeout(() => setError(false), 500);
      }
    } catch {
      setError(true);
      setTimeout(() => setError(false), 500);
    } finally {
      setChecking(false);
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
          <button type="submit" className="gate-submit-btn" disabled={checking}>
            {checking ? 'Checking...' : 'Unlock'} <i className="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </form>
        {error && <div className="gate-error-text">Passcode is incorrect.</div>}
      </div>
    </div>
  );
}

export default Gate;
