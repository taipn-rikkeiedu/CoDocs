import React from 'react';

export default function RPoint() {
  return (
    <section className="page-container">
      <div className="section-title-wrap" style={{ marginTop: 0 }}>
        <div className="section-title"><i className="fa-solid fa-bullseye"></i> QUY ĐỊNH ĐIỂM R-POINT & ĐIỀU KIỆN DỰ THI (TB 01/2026)</div>
      </div>

      <div className="gate-grid">
        <div className="gate-card">
          <div className="gate-num">01</div>
          <div className="gate-icon red"><i className="fa-solid fa-bullseye"></i></div>
          <h4>Điểm R-Point ≥ 80/120</h4>
          <p>100đ rèn luyện + 20đ thưởng</p>
        </div>
        <div className="gate-card">
          <div className="gate-num">02</div>
          <div className="gate-icon blue"><i className="fa-solid fa-user-clock"></i></div>
          <h4>Chuyên Cần ≥ 80%</h4>
          <p>Nghỉ 1% bị trừ 2 điểm</p>
        </div>
        <div className="gate-card">
          <div className="gate-num">03</div>
          <div className="gate-icon green"><i className="fa-solid fa-list-check"></i></div>
          <h4>Bài Tập Về Nhà ≥ 80%</h4>
          <p>Thiếu 1% bị trừ 2 điểm</p>
        </div>
        <div className="gate-card">
          <div className="gate-num">04</div>
          <div className="gate-icon gold"><i className="fa-solid fa-laptop-code"></i></div>
          <h4>E-Learning ≤ 3 Bài</h4>
          <p>Chậm ≥ 3 bài bị cấm thi</p>
        </div>
      </div>

      <div className="doc-card">
        <div className="doc-header">
          <h3 className="doc-title"><i className="fa-solid fa-table-list text-blue"></i> Bảng Trừ Điểm & Cộng Thưởng (Thang 120 Điểm)</h3>
        </div>
        <div className="doc-body">
          <table className="data-table">
            <thead><tr><th>Tiêu chí đánh giá</th><th>Điểm tối đa</th><th>Quy định trừ / cộng</th><th>Đơn vị phụ trách</th></tr></thead>
            <tbody>
              <tr className="table-group-header"><td colSpan="4"><b>I. ĐIỂM RÈN LUYỆN (TỐI ĐA 100 ĐIỂM)</b></td></tr>
              <tr><td><b>Chuyên cần học tập</b></td><td>20đ</td><td>Nghỉ 1% số buổi học = Trừ <b>02 điểm</b></td><td>Hệ thống LMS</td></tr>
              <tr><td><b>Hoàn thành bài tập về nhà</b></td><td>20đ</td><td>Thiếu 1% bài tập = Trừ <b>02 điểm</b></td><td>Hệ thống LMS</td></tr>
              <tr><td><b>Chuẩn bị bài E-learning</b></td><td>20đ</td><td>Chậm 1 bài: -5đ | Chậm 2 bài: -10đ | Chậm &ge; 3 bài: <b>0đ (CẤM THI)</b></td><td>Hệ thống LMS</td></tr>
              <tr><td><b>Tuân thủ nội quy học đường</b></td><td>40đ</td><td>Vi phạm Lần 1: -10đ | Lần 2: -20đ | Lần 3: <b>0đ</b></td><td>Giảng viên / Quản lý lớp</td></tr>
              <tr className="table-group-header"><td colSpan="4"><b>II. ĐIỂM THƯỞNG RÈN LUYỆN (TỐI ĐA 20 ĐIỂM)</b></td></tr>
              <tr><td><b>Thưởng tinh thần học tập</b></td><td>10đ</td><td>Tích cực phát biểu xây dựng bài, hỗ trợ bạn học</td><td>Giảng viên bộ môn</td></tr>
              <tr><td><b>Thưởng cán bộ lớp</b></td><td>10đ</td><td>Hoàn thành tốt nhiệm vụ Lớp trưởng, Lớp phó, Nhóm trưởng</td><td>Giảng viên bộ môn</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
