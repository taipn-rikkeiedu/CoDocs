import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SEARCH_DATABASE = [
  { id: '1', title: 'Quy trình Khảo thí PTIT', path: '/khao-thi', icon: 'fa-file-signature', type: 'Quy chế' },
  { id: '2', title: 'Quy định R-Point', path: '/rpoint', icon: 'fa-star', type: 'Quy chế' },
  { id: '3', title: 'Nội quy Phòng thi', path: '/phong-thi', icon: 'fa-person-chalkboard', type: 'Quy chế' },
  { id: '4', title: 'Nội quy Sinh viên', path: '/sinh-vien', icon: 'fa-users', type: 'Quy chế' },
  { id: '5', title: 'Tiêu chí Xếp hạng Rank GV/TG', path: '/rank-gvtg', icon: 'fa-ranking-star', type: 'Quy chế' },
  { id: '6', title: 'Sổ tay Onboarding 2026', path: '/onboarding', icon: 'fa-handshake', type: 'Sổ tay' },
  { id: '7', title: 'Cẩm nang sử dụng Lark Suite', path: '/lark-guide', icon: 'fa-laptop-file', type: 'Sổ tay' },
  { id: '8', title: 'Tra cứu danh sách KPI Master', path: '/kpi-master', icon: 'fa-chart-pie', type: 'Công cụ' },
  { id: '9', title: 'Máy tính Thu nhập (Lương)', path: '/tools', icon: 'fa-calculator', type: 'Công cụ' },
  { id: '10', title: 'Máy tính R-Point', path: '/tools', icon: 'fa-calculator', type: 'Công cụ' },
  { id: '11', title: 'Đọc 7 Tài Liệu Gốc (.pdf, .md, .xlsx)', path: '/raw-docs', icon: 'fa-book-open-reader', type: 'Kho lưu trữ' },
];

const TRENDING_TAGS = ['#KPI_Giảng_Viên', '#Tính_Lương', '#Nội_Quy_Sinh_Viên', '#Khảo_Thí'];

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
      if (q.includes('kpi') || q.includes('chấm bài') || q.includes('rank')) {
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
          Bạn cần tra cứu gì hôm nay?
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '48px', fontWeight: 500 }}>
          Hệ thống tra cứu thông minh Rikkei Education Portal
        </p>

        {/* Global Search Bar */}
        <div style={{ position: 'relative' }}>
          <form onSubmit={handleSearch} className="global-search-container">
            <div className="global-search-box">
              <i className="fa-solid fa-sparkles" style={{ color: 'var(--accent-blue)', fontSize: '20px', marginRight: '16px' }}></i>
              <input 
                type="text" 
                className="global-search-input" 
                placeholder="Nhập tên tài liệu, KPI, hoặc quy chế cần tìm..." 
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
                  Không tìm thấy kết quả phù hợp
                </div>
              )}
            </div>
          )}
        </div>

        {/* Trending Tags */}
        <div className="trending-tags-container">
          <span style={{ fontSize: '13px', color: 'var(--text-dim)', marginRight: '12px' }}>Tìm kiếm phổ biến:</span>
          {TRENDING_TAGS.map(tag => (
            <span key={tag} className="trending-tag" onClick={() => handleTagClick(tag)}>
              {tag}
            </span>
          ))}
        </div>

        {/* Quick Shortcuts */}
        <div className="quick-shortcuts" style={{ marginTop: '32px' }}>
          <button className="shortcut-pill" onClick={() => navigate('/raw-docs')}>
            <i className="fa-solid fa-book-open-reader"></i> Đọc 7 Tài Liệu Gốc
          </button>
          <button className="shortcut-pill" onClick={() => navigate('/kpi-master')}>
            <i className="fa-solid fa-chart-pie"></i> KPI Master GV/TG
          </button>
          <button className="shortcut-pill" onClick={() => navigate('/tools')}>
            <i className="fa-solid fa-calculator"></i> 4 Máy Tính Tự Động
          </button>
        </div>
      </div>

    </div>
  );
}
