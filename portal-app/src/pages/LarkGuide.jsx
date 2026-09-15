import React from 'react';

const MODULES = [
  { icon: 'fa-fingerprint', gradient: 'green-gradient', title: '1. Chấm Công Attendance', desc: 'Mở Lark -> Workplace -> Attendance. Kết nối wifi văn phòng để chấm công vào/ra hàng ngày. Ca sáng và chiều phải hiển thị màu xanh lá.' },
  { icon: 'fa-file-pen', gradient: 'blue-gradient', title: '2. Đơn Bổ Sung Công (Tách Ca)', desc: 'Nếu quên chấm 1 ca (sáng hoặc chiều), bắt buộc tách làm 2 đơn riêng biệt. Thời hạn gửi đơn tối đa trong vòng 3 ngày làm việc.' },
  { icon: 'fa-calendar-days', gradient: 'gold-gradient', title: '3. Lark Calendar & Họp', desc: 'Tạo lịch họp, mời thành viên, tự động book phòng họp thông minh. Đính kèm tài liệu Lark Docs trực tiếp vào sự kiện họp.' },
  { icon: 'fa-file-shield', gradient: 'purple-gradient', title: '4. Lark Approval & Quy Trình', desc: 'Nộp đơn xin nghỉ phép năm, đơn công tác, đề nghị thanh toán tạm ứng qua Module Approval. Theo dõi phê duyệt tự động thời gian thực.' },
];

export default function LarkGuide() {
  return (
    <section className="page-container">
      <div className="section-title-wrap" style={{ marginTop: 0 }}>
        <div className="section-title"><i className="fa-solid fa-comments"></i> CẨM NANG HƯỚNG DẪN THAO TÁC LARK SUITE</div>
      </div>

      <div className="portal-grid">
        {MODULES.map(m => (
          <div className="portal-card" key={m.title}>
            <div className={`card-icon-box ${m.gradient}`}><i className={`fa-solid ${m.icon}`}></i></div>
            <h3>{m.title}</h3>
            <p>{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
