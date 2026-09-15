import React from 'react';

const LADDER = [
  { rank: 'Rank 1', title: 'TTS Trợ Giảng', desc: '< 6m | ≥ 40đ' },
  { rank: 'Rank 2', title: 'Trợ Giảng Cứng', desc: '≥ 6m | ≥ 55đ' },
  { rank: 'Rank 3', title: 'GV Tập Sự', desc: '≥ 6m TA | ≥ 65đ' },
  { rank: 'Rank 4', title: 'Giảng Viên Cứng', desc: '≥ 1 năm | ≥ 75đ' },
  { rank: 'Rank 5', title: 'GV PM Môn', desc: '20M + 4M + 2M' },
  { rank: 'Rank 6', title: 'PM Chương Trình', desc: '25M + 4M + 3M' },
  { rank: 'Rank 7', title: 'GV Brand Nội Bộ', desc: '30M + 5M + 3M' },
  { rank: 'Rank 8', title: 'GV Brand Thị Trường', desc: '35M + 6M + 4M' },
];

export default function RankGvTg() {
  return (
    <section className="page-container">
      <div className="section-title-wrap" style={{ marginTop: 0 }}>
        <div className="section-title"><i className="fa-solid fa-award"></i> KHUNG TIÊU CHÍ XẾP HẠNG 8 RANK GIẢNG VIÊN & TRỢ GIẢNG</div>
      </div>

      <div className="career-ladder-grid">
        {LADDER.map(item => (
          <div className="ladder-card" key={item.rank}>
            <span className="ladder-badge">{item.rank}</span>
            <b>{item.title}</b>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="doc-card">
        <h3><i className="fa-solid fa-table text-blue"></i> Bảng Ma Trận Tiêu Chuẩn & Đãi Ngộ 8 Rank</h3>
        <table className="data-table">
          <thead><tr><th>Cấp Rank</th><th>Chức danh</th><th>Kinh nghiệm</th><th>Tổng điểm</th><th>Điểm chặn bắt buộc</th><th>Lương cứng</th><th>Phụ cấp</th><th>Thưởng</th></tr></thead>
          <tbody>
            <tr><td><span className="tag tag-blue">Rank 1</span></td><td>TTS Trợ Giảng</td><td>&lt; 6 tháng</td><td>≥ 40đ</td><td>Khác ≥ 5/10</td><td>Thỏa thuận</td><td>-</td><td>-</td></tr>
            <tr><td><span className="tag tag-blue">Rank 2</span></td><td>Trợ Giảng Cứng</td><td>≥ 6 tháng</td><td>≥ 55đ</td><td>Khác ≥ 7/10</td><td>Thỏa thuận</td><td>-</td><td>-</td></tr>
            <tr><td><span className="tag tag-green">Rank 3</span></td><td>GV Tập Sự</td><td>≥ 6m TA</td><td>≥ 65đ</td><td>Sư phạm ≥ 12/20</td><td>Thỏa thuận</td><td>-</td><td>-</td></tr>
            <tr><td><span className="tag tag-green">Rank 4</span></td><td>Giảng Viên Cứng</td><td>≥ 1 năm</td><td>≥ 75đ</td><td>Kết quả lớp ≥ 14/25</td><td>Thỏa thuận</td><td>-</td><td>-</td></tr>
            <tr><td><span className="tag tag-gold">Rank 5</span></td><td>GV PM Môn Học</td><td>≥ 2 năm</td><td>≥ 82đ</td><td>Tài nguyên ≥ 12/20</td><td><b>20.000.000đ</b></td><td>4.000.000đ</td><td>2.000.000đ</td></tr>
            <tr><td><span className="tag tag-gold">Rank 6</span></td><td>PM Chương Trình</td><td>≥ 3 năm</td><td>≥ 88đ</td><td>Khác ≥ 7/10</td><td><b>25.000.000đ</b></td><td>4.000.000đ</td><td>3.000.000đ</td></tr>
            <tr><td><span className="tag tag-purple">Rank 7</span></td><td>GV Brand Nội Bộ</td><td>≥ 4 năm</td><td>≥ 92đ</td><td>Kết quả lớp ≥ 18/25</td><td><b>30.000.000đ</b></td><td>5.000.000đ</td><td>3.000.000đ</td></tr>
            <tr><td><span className="tag tag-purple">Rank 8</span></td><td>GV Brand Thị Trường</td><td>≥ 5 năm</td><td>≥ 95đ</td><td>Khác ≥ 9/10</td><td><b>35.000.000đ</b></td><td>6.000.000đ</td><td>4.000.000đ</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
