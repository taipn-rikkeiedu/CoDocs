import React from 'react';

import Topbar from './Topbar';
import { useLocation } from 'react-router-dom';

const TITLE_MAP = {
  '/dashboard': 'Tổng Quan Dashboard',
  '/raw-docs': 'Bộ Đọc 7 Tài Liệu Gốc Trực Quan',
  '/tools': 'Bộ 4 Công Cụ Tính Toán Tự Động',
  '/rpoint': 'Điểm R-Point & Điều Kiện Dự Thi',
  '/khao-thi': 'Quy Trình Khảo Thí PTIT',
  '/phong-thi': 'Nội Quy Phòng Thi & Chế Tài',
  '/sinh-vien': '10 Điều Nội Quy Sinh Viên',
  '/rank-gvtg': 'Khung Rank GV & Trợ Giảng',
  '/onboarding': 'Onboarding & Văn Hóa Doanh Nghiệp',
  '/lark-guide': 'Cẩm Nang Thao Tác Lark Suite',
  '/kpi-master': 'KPI Master Giảng Viên & Trợ Giảng'
};

export default function MainLayout({ children }) {
  const location = useLocation();

  return (
    <div className="portal-container">
      <main className="main-content" style={{ marginLeft: 0 }}>
        <Topbar />
        <div className="content-body" id="content-body">
          {children}
        </div>
      </main>
    </div>
  );
}
