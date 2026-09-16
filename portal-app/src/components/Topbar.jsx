import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Topbar() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('theme-dark');
      document.body.classList.remove('theme-light');
    } else {
      document.body.classList.add('theme-light');
      document.body.classList.remove('theme-dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <Link to="/dashboard" className="topbar-logo">
          <i className="fa-solid fa-layer-group text-blue"></i>
          <span>Portal<span style={{ color: 'var(--accent-blue)' }}>AI</span></span>
        </Link>
        
        <nav className="topbar-nav" style={{ marginLeft: '32px' }}>
          
          <div className="topbar-dropdown">
            <div className="topbar-nav-link" style={{ cursor: 'pointer' }}>
              <i className="fa-solid fa-book"></i> Sổ Tay & Quy Chế <i className="fa-solid fa-chevron-down" style={{ fontSize: '10px' }}></i>
            </div>
            <div className="topbar-dropdown-content">
              <Link to="/khao-thi" className="topbar-dropdown-item"><i className="fa-solid fa-file-signature"></i> Quy trình Khảo thí</Link>
              <Link to="/rpoint" className="topbar-dropdown-item"><i className="fa-solid fa-star"></i> Quy định R-Point</Link>
              <Link to="/phong-thi" className="topbar-dropdown-item"><i className="fa-solid fa-person-chalkboard"></i> Nội quy Phòng thi</Link>
              <Link to="/sinh-vien" className="topbar-dropdown-item"><i className="fa-solid fa-users"></i> Nội quy Sinh viên</Link>
              <Link to="/rank-gvtg" className="topbar-dropdown-item"><i className="fa-solid fa-ranking-star"></i> Rank Giảng viên</Link>
              <Link to="/onboarding" className="topbar-dropdown-item"><i className="fa-solid fa-handshake"></i> Onboarding 2026</Link>
              <Link to="/lark-guide" className="topbar-dropdown-item"><i className="fa-solid fa-laptop-file"></i> Cẩm nang Lark Suite</Link>
              <Link to="/quy-trinh-lms" className="topbar-dropdown-item"><i className="fa-solid fa-code-compare"></i> Quy trình LMS & CM</Link>
            </div>
          </div>

          <NavLink to="/raw-docs" className={({ isActive }) => `topbar-nav-link ${isActive ? 'active' : ''}`}>
            <i className="fa-solid fa-book-open-reader"></i> Tài Liệu Gốc
          </NavLink>
          <NavLink to="/kpi-master" className={({ isActive }) => `topbar-nav-link ${isActive ? 'active' : ''}`}>
            <i className="fa-solid fa-chart-pie"></i> KPI Master
          </NavLink>
          <NavLink to="/tools" className={({ isActive }) => `topbar-nav-link ${isActive ? 'active' : ''}`}>
            <i className="fa-solid fa-calculator"></i> Công Cụ Tính
          </NavLink>
        </nav>
      </div>

      <div className="topbar-right" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <button onClick={toggleTheme} className="theme-toggle-btn" title="Chuyển đổi giao diện Sáng/Tối">
          {theme === 'light' ? <i className="fa-regular fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '13px' }}>
          <i className="fa-solid fa-circle-check text-green"></i> 
          <span>Đã đồng bộ</span>
        </div>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>
          GV
        </div>
      </div>
    </header>
  );
}
