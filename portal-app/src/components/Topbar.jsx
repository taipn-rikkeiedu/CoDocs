import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Topbar() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTopbar, setShowTopbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const searchInputRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowTopbar(false);
      } else {
        setShowTopbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Keep light theme as default since theme toggle is removed
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark');
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className={`topbar ${!showTopbar ? 'topbar-hidden' : ''}`}>
      <div className="topbar-left">
        <Link to="/dashboard" className="topbar-logo">
          <i className="fa-solid fa-layer-group text-blue"></i>
          <span>Portal<span style={{ color: 'var(--accent-blue)' }}>AI</span></span>
        </Link>
      </div>

      {/* Navigation (Desktop - Centered Flat List) */}
      <nav className="topbar-center topbar-nav">
        <NavLink to="/rank-gvtg" className={({ isActive }) => `topbar-nav-link ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-ranking-star"></i> Rank GV
        </NavLink>
        <NavLink to="/rpoint" className={({ isActive }) => `topbar-nav-link ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-star"></i> R-Point
        </NavLink>
        <NavLink to="/khao-thi" className={({ isActive }) => `topbar-nav-link ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-file-signature"></i> Khảo thí
        </NavLink>
        <NavLink to="/sinh-vien" className={({ isActive }) => `topbar-nav-link ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-users"></i> Lớp & SV
        </NavLink>
        <NavLink to="/quy-trinh-lms" className={({ isActive }) => `topbar-nav-link ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-code-compare"></i> Vận hành
        </NavLink>
        <NavLink to="/kpi-master" className={({ isActive }) => `topbar-nav-link ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-chart-pie"></i> KPI Master
        </NavLink>
        <NavLink to="/tools" className={({ isActive }) => `topbar-nav-link ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-calculator"></i> Công Cụ
        </NavLink>
      </nav>

      <div className="topbar-right">
        {/* Global Search Bar (Desktop) */}
        <div className={`topbar-search ${searchFocused ? 'focused' : ''}`}>
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input 
            ref={searchInputRef}
            type="text" 
            placeholder="Tìm kiếm..." 
            onFocus={() => setSearchFocused(true)}
            onBlur={() => {
              // Delay blur slightly to allow clicking on dropdown items
              setTimeout(() => setSearchFocused(false), 200);
            }}
          />
          <div className="search-shortcut">⌘ K</div>

          {/* Search Results Dropdown */}
          <div className="search-dropdown">
            <div className="search-dropdown-header">Gợi ý tìm kiếm</div>
            <div className="search-dropdown-list">
              <Link to="/rank-gvtg" className="search-dropdown-item">
                <i className="fa-solid fa-ranking-star"></i> Tiêu chuẩn Rank Giảng viên
              </Link>
              <Link to="/khao-thi" className="search-dropdown-item">
                <i className="fa-solid fa-file-signature"></i> Quy trình Khảo thí
              </Link>
              <Link to="/quy-trinh-lms" className="search-dropdown-item">
                <i className="fa-solid fa-code-compare"></i> Hướng dẫn dùng LMS
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-search">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
        
        <div className="mobile-nav-links">
          <NavLink to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
            <i className="fa-solid fa-layer-group"></i> Tổng quan Dashboard
          </NavLink>
          <NavLink to="/raw-docs" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
            <i className="fa-solid fa-book-open-reader"></i> Tài Liệu Gốc
          </NavLink>
          <NavLink to="/kpi-master" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
            <i className="fa-solid fa-chart-pie"></i> KPI Master
          </NavLink>
          <NavLink to="/tools" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
            <i className="fa-solid fa-calculator"></i> Công Cụ Tính
          </NavLink>
          
          <div className="mobile-nav-group-title">SỔ TAY & QUY CHẾ</div>
          <Link to="/rank-gvtg" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-item"><i className="fa-solid fa-ranking-star"></i> Rank Giảng viên</Link>
          <Link to="/rpoint" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-item"><i className="fa-solid fa-star"></i> Quy định R-Point</Link>
          <Link to="/khao-thi" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-item"><i className="fa-solid fa-file-signature"></i> Quy trình Khảo thí</Link>
          <Link to="/sinh-vien" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-item"><i className="fa-solid fa-users"></i> Nội quy Sinh viên</Link>
          <Link to="/phong-thi" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-item"><i className="fa-solid fa-person-chalkboard"></i> Nội quy Phòng thi</Link>
          <Link to="/quy-trinh-lms" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-item"><i className="fa-solid fa-code-compare"></i> Quy trình LMS & CM</Link>
          <Link to="/lark-guide" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-item"><i className="fa-solid fa-laptop-file"></i> Cẩm nang Lark Suite</Link>
        </div>
      </div>
    </header>
  );
}
