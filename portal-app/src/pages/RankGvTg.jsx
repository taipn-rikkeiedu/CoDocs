import React from 'react';

const LADDER = [
  { rank: 'Rank 1', title: 'TTS Trợ Giảng', desc: '< 6m | ≥ 40đ', color: 'tag-blue', hex: '#3b82f6', icon: 'fa-solid fa-seedling' },
  { rank: 'Rank 2', title: 'Trợ Giảng Cứng', desc: '≥ 6m | ≥ 55đ', color: 'tag-blue', hex: '#3b82f6', icon: 'fa-solid fa-leaf' },
  { rank: 'Rank 3', title: 'GV Tập Sự', desc: '≥ 6m TA | ≥ 65đ', color: 'tag-green', hex: '#10b981', icon: 'fa-solid fa-chalkboard-user' },
  { rank: 'Rank 4', title: 'Giảng Viên Cứng', desc: '≥ 1 năm | ≥ 75đ', color: 'tag-green', hex: '#10b981', icon: 'fa-solid fa-graduation-cap' },
  { rank: 'Rank 5', title: 'GV PM Môn', desc: '20M + 4M + 2M', color: 'tag-gold', hex: '#f59e0b', icon: 'fa-solid fa-book-open-reader' },
  { rank: 'Rank 6', title: 'PM Chương Trình', desc: '25M + 4M + 3M', color: 'tag-gold', hex: '#f59e0b', icon: 'fa-solid fa-layer-group' },
  { rank: 'Rank 7', title: 'GV Brand Nội Bộ', desc: '30M + 5M + 3M', color: 'tag-purple', hex: '#8b5cf6', icon: 'fa-solid fa-award' },
  { rank: 'Rank 8', title: 'GV Brand Thị Trường', desc: '35M + 6M + 4M', color: 'tag-purple', hex: '#8b5cf6', icon: 'fa-solid fa-gem' },
];

export default function RankGvTg() {
  return (
    <section className="page-container">
      <div className="section-title-wrap" style={{ marginTop: 0 }}>
        <div className="section-title"><i className="fa-solid fa-award"></i> KHUNG TIÊU CHUẨN XẾP HẠNG 8 RANK GIẢNG VIÊN & TRỢ GIẢNG</div>
      </div>

      <div className="career-ladder-grid">
        {LADDER.map(item => (
          <div className="ladder-card" key={item.rank} style={{ '--ladder-color': item.hex }}>
            <div className="ladder-icon">
              <i className={item.icon}></i>
            </div>
            <span className={`ladder-badge ${item.color}`}>{item.rank}</span>
            <b>{item.title}</b>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="doc-card" style={{ padding: '0', overflow: 'hidden' }}>
        <h3 style={{ padding: '24px 24px 16px', margin: 0, borderBottom: '1px solid var(--border-color)' }}>
          <i className="fa-solid fa-table text-blue"></i> Bảng Ma Trận Tiêu Chuẩn & Đãi Ngộ 8 Rank
        </h3>
        <div className="rank-matrix-wrapper" style={{ margin: 0, border: 'none', borderRadius: 0, boxShadow: 'none' }}>
          <table className="rank-matrix-table">
            <thead><tr><th>Cấp Rank</th><th>Chức danh</th><th>Kinh nghiệm</th><th>Tổng điểm</th><th>Điểm chặn bắt buộc</th><th>Lương cứng</th><th>Phụ cấp</th><th>Thưởng</th></tr></thead>
            <tbody>
              <tr><td><span className="tag tag-blue">Rank 1</span></td><td className="col-title">TTS Trợ Giảng</td><td>&lt; 6 tháng</td><td className="col-req">≥ 40đ</td><td>Khác ≥ 5/10</td><td>Thỏa thuận</td><td>-</td><td>-</td></tr>
              <tr><td><span className="tag tag-blue">Rank 2</span></td><td className="col-title">Trợ Giảng Cứng</td><td>≥ 6 tháng</td><td className="col-req">≥ 55đ</td><td>Khác ≥ 7/10</td><td>Thỏa thuận</td><td>-</td><td>-</td></tr>
              <tr><td><span className="tag tag-green">Rank 3</span></td><td className="col-title">GV Tập Sự</td><td>≥ 6m TA</td><td className="col-req">≥ 65đ</td><td>Sư phạm ≥ 12/20</td><td>Thỏa thuận</td><td>-</td><td>-</td></tr>
              <tr><td><span className="tag tag-green">Rank 4</span></td><td className="col-title">Giảng Viên Cứng</td><td>≥ 1 năm</td><td className="col-req">≥ 75đ</td><td>Kết quả lớp ≥ 14/25</td><td>Thỏa thuận</td><td>-</td><td>-</td></tr>
              <tr><td><span className="tag tag-gold">Rank 5</span></td><td className="col-title">GV PM Môn Học</td><td>≥ 2 năm</td><td className="col-req">≥ 82đ</td><td>Tài nguyên ≥ 12/20</td><td className="col-money">20.000.000đ</td><td className="col-bonus">4.000.000đ</td><td className="col-bonus">2.000.000đ</td></tr>
              <tr><td><span className="tag tag-gold">Rank 6</span></td><td className="col-title">PM Chương Trình</td><td>≥ 3 năm</td><td className="col-req">≥ 88đ</td><td>Khác ≥ 7/10</td><td className="col-money">25.000.000đ</td><td className="col-bonus">4.000.000đ</td><td className="col-bonus">3.000.000đ</td></tr>
              <tr><td><span className="tag tag-purple">Rank 7</span></td><td className="col-title">GV Brand Nội Bộ</td><td>≥ 4 năm</td><td className="col-req">≥ 92đ</td><td>Kết quả lớp ≥ 18/25</td><td className="col-money">30.000.000đ</td><td className="col-bonus">5.000.000đ</td><td className="col-bonus">3.000.000đ</td></tr>
              <tr><td><span className="tag tag-purple">Rank 8</span></td><td className="col-title">GV Brand Thị Trường</td><td>≥ 5 năm</td><td className="col-req">≥ 95đ</td><td>Khác ≥ 9/10</td><td className="col-money">35.000.000đ</td><td className="col-bonus">6.000.000đ</td><td className="col-bonus">4.000.000đ</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
