import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SEARCH_DATABASE = [
  { id: '1', title: 'Quy trÃ¬nh Kháº£o thÃ­ PTIT', path: '/khao-thi', icon: 'fa-file-signature', type: 'Quy cháº¿' },
  { id: '2', title: 'Quy Ä‘á»‹nh R-Point', path: '/rpoint', icon: 'fa-star', type: 'Quy cháº¿' },
  { id: '3', title: 'Ná»™i quy PhÃ²ng thi', path: '/phong-thi', icon: 'fa-person-chalkboard', type: 'Quy cháº¿' },
  { id: '4', title: 'Ná»™i quy Sinh viÃªn', path: '/sinh-vien', icon: 'fa-users', type: 'Quy cháº¿' },
  { id: '5', title: 'TiÃªu chÃ­ Xáº¿p háº¡ng Rank GV/TG', path: '/rank-gvtg', icon: 'fa-ranking-star', type: 'Quy cháº¿' },
  { id: '6', title: 'Sá»• tay Onboarding 2026', path: '/onboarding', icon: 'fa-handshake', type: 'Sá»• tay' },
  { id: '7', title: 'Cáº©m nang sá»­ dá»¥ng Lark Suite', path: '/lark-guide', icon: 'fa-laptop-file', type: 'Sá»• tay' },
  { id: '8', title: 'Tra cá»©u danh sÃ¡ch KPI Master', path: '/kpi-master', icon: 'fa-chart-pie', type: 'CÃ´ng cá»¥' },
  { id: '9', title: 'MÃ¡y tÃ­nh Thu nháº­p (LÆ°Æ¡ng)', path: '/tools', icon: 'fa-calculator', type: 'CÃ´ng cá»¥' },
  { id: '10', title: 'MÃ¡y tÃ­nh R-Point', path: '/tools', icon: 'fa-calculator', type: 'CÃ´ng cá»¥' },
  { id: '11', title: 'Äá»c 7 TÃ i Liá»‡u Gá»‘c (.pdf, .md, .xlsx)', path: '/raw-docs', icon: 'fa-book-open-reader', type: 'Kho lÆ°u trá»¯' },
];

const TRENDING_TAGS = ['#KPI_Giáº£ng_ViÃªn', '#TÃ­nh_LÆ°Æ¡ng', '#Ná»™i_Quy_Sinh_ViÃªn', '#Kháº£o_ThÃ­'];

export default function Dashboard() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (query.trim() === '') {
      setSuggestions([]);
    } else {
      const q = query.toLowerCase();
      const filtered = SEARCH_DATABASE.filter(item => 
        item.title.toLowerCase().includes(q) || item.type.toLowerCase().includes(q)
      );
      setSuggestions(filtered.slice(0, 5)); // show top 5
    }
  }, [query]);

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    // If there is an exact match or first suggestion, go to it
    if (suggestions.length > 0) {
      navigate(suggestions[0].path);
    } else {
      // fallback
      const q = query.toLowerCase();
      if (q.includes('kpi') || q.includes('cháº¥m bÃ i') || q.includes('rank')) {
        navigate('/kpi-master');
      } else if (q.includes('r-point') || q.includes('point')) {
        navigate('/tools');
      } else {
        navigate('/raw-docs');
      }
    }
  };

  const handleSelectSuggestion = (path) => {
    navigate(path);
  };

  const handleTagClick = (tag) => {
    const cleanTag = tag.replace('#', '').replace(/_/g, ' ');
    setQuery(cleanTag);
    setShowDropdown(true);
  };

  return (
    <div style={{ height: 'calc(100vh - 70px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Central Content */}
      <div style={{ zIndex: 10, textAlign: 'center', width: '100%', maxWidth: '720px' }} ref={wrapperRef}>
        
        {/* Title */}
        <h1 style={{ fontSize: '48px', fontWeight: 900, marginBottom: '16px', fontFamily: 'var(--font-heading)', background: 'linear-gradient(135deg, var(--text-heading) 0%, var(--text-muted) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Báº¡n cáº§n tra cá»©u gÃ¬ hÃ´m nay?
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '48px', fontWeight: 500 }}>
          Há»‡ thá»‘ng tra cá»©u thÃ´ng minh Rikkei Education Portal
        </p>

        {/* Global Search Bar */}
        <div style={{ position: 'relative' }}>
          <form onSubmit={handleSearch} className="global-search-container">
            <div className="global-search-box">
              <i className="fa-solid fa-sparkles" style={{ color: 'var(--accent-blue)', fontSize: '20px', marginRight: '16px' }}></i>
              <input 
                type="text" 
                className="global-search-input" 
                placeholder="Nháº­p tÃªn tÃ i liá»‡u, KPI, hoáº·c quy cháº¿ cáº§n tÃ¬m..." 
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                autoFocus
              />
              <button type="submit" className="global-search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>

          {/* Autocomplete Dropdown */}
          {showDropdown && query.trim() !== '' && (
            <div className="autocomplete-dropdown">
              {suggestions.length > 0 ? (
                suggestions.map((item) => (
                  <div key={item.id} className="autocomplete-item" onClick={() => handleSelectSuggestion(item.path)}>
                    <i className={`fa-solid ${item.icon}`} style={{ color: 'var(--text-muted)', width: '24px' }}></i>
                    <span style={{ flex: 1, textAlign: 'left' }}>{item.title}</span>
                    <span className="autocomplete-type-badge">{item.type}</span>
                  </div>
                ))
              ) : (
                <div className="autocomplete-item" style={{ color: 'var(--text-dim)', justifyContent: 'center' }}>
                  KhÃ´ng tÃ¬m tháº¥y káº¿t quáº£ phÃ¹ há»£p
                </div>
              )}
            </div>
          )}
        </div>

        {/* Trending Tags */}
        <div className="trending-tags-container">
          <span style={{ fontSize: '13px', color: 'var(--text-dim)', marginRight: '12px' }}>TÃ¬m kiáº¿m phá»• biáº¿n:</span>
          {TRENDING_TAGS.map(tag => (
            <span key={tag} className="trending-tag" onClick={() => handleTagClick(tag)}>
              {tag}
            </span>
          ))}
        </div>

        {/* Quick Shortcuts */}
        <div className="quick-shortcuts" style={{ marginTop: '32px' }}>
          <button className="shortcut-pill" onClick={() => navigate('/raw-docs')}>
            <i className="fa-solid fa-book-open-reader"></i> Äá»c 7 TÃ i Liá»‡u Gá»‘c
          </button>
          <button className="shortcut-pill" onClick={() => navigate('/kpi-master')}>
            <i className="fa-solid fa-chart-pie"></i> KPI Master GV/TG
          </button>
          <button className="shortcut-pill" onClick={() => navigate('/tools')}>
            <i className="fa-solid fa-calculator"></i> 4 MÃ¡y TÃ­nh Tá»± Äá»™ng
          </button>
        </div>
      </div>

    </div>
  );
}


