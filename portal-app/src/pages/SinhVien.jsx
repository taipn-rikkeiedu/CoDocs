import React from 'react';

const RULES = [
  { idx: '01', title: 'Đúng giờ học tập', desc: 'Có mặt trước giờ học ít nhất 5 phút. Đi muộn quá 15 phút không được vào lớp.' },
  { idx: '02', title: 'Trang phục & Thẻ', desc: 'Trang phục gọn gàng, lịch sự. Luôn đeo thẻ sinh viên khi vào khuôn viên trường.' },
  { idx: '03', title: 'Tác phong học tập', desc: 'Nghiêm túc, không làm việc riêng, không chơi game hay lướt mạng xã hội trong giờ.' },
  { idx: '04', title: 'Vệ sinh chung', desc: 'Không mang thức ăn nặng mùi vào phòng lab máy tính. Bỏ rác đúng nơi quy định.' },
  { idx: '05', title: 'Bảo vệ tài sản', desc: 'Giữ gìn máy tính, máy chiếu, bàn ghế. Tắt máy tính và điện khi rời phòng học.' },
  { idx: '06', title: 'Văn hóa ứng xử', desc: 'Tôn trọng giảng viên, trợ giảng, cán bộ nhân viên và hòa đồng với bạn bè.' },
  { idx: '07', title: 'Trung thực học thuật', desc: 'Tuyệt đối không gian lận thi cử, sao chép code đồ án hoặc nộp bài hộ.' },
  { idx: '08', title: 'Bảo mật thông tin', desc: 'Không chia sẻ tài khoản LMS, tài nguyên nội bộ hoặc tài liệu mật ra ngoài.' },
  { idx: '09', title: 'An toàn khuôn viên', desc: 'Không mang chất cấm, chất gây cháy nổ. Không hút thuốc trong khuôn viên học viện.' },
  { idx: '10', title: 'Tinh thần đồng đội', desc: 'Chủ động làm việc nhóm, chia sẻ kiến thức và xây dựng văn hóa học tập tích cực.' },
];

export default function SinhVien() {
  return (
    <section className="page-container">
      <div className="section-title-wrap" style={{ marginTop: 0 }}>
        <div className="section-title"><i className="fa-solid fa-user-graduate"></i> 10 ĐIỀU NỘI QUY SINH VIÊN RIKKEI EDUCATION</div>
      </div>

      <div className="rules-10-grid">
        {RULES.map(rule => (
          <div className="rule-item-card" key={rule.idx}>
            <div className="rule-idx">{rule.idx}</div>
            <div className="rule-content">
              <h4>{rule.title}</h4>
              <p>{rule.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
