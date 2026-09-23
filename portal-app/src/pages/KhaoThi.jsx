import React from 'react';

const PHASES = [
  { 
    id: 1, title: 'Ra Đề & Bàn Giao', icon: 'fa-solid fa-file-export', color: 'var(--accent-blue)', 
    tasks: [
      { time: 'T - 15 ngày', desc: 'Phân công cán bộ ra đề' },
      { time: 'T - 7 ngày', desc: 'Soạn thảo & Rà soát đề' },
      { time: 'T - 3 ngày', desc: 'Bàn giao đề chính thức' },
      { time: 'T - 1 giờ', desc: 'Tải đề lên hệ thống RAIA' }
    ]
  },
  { 
    id: 2, title: 'Tổ Chức Coi Thi', icon: 'fa-solid fa-eye', color: 'var(--accent-orange)', 
    tasks: [
      { time: '- 15 phút', desc: 'CBCT có mặt trước giờ thi' },
      { time: 'Đầu giờ', desc: 'Đối chiếu CCCD & phổ biến nội quy' },
      { time: 'Cuối giờ', desc: 'Thu bài, kiểm đếm & ký biên bản' }
    ]
  },
  { 
    id: 3, title: 'Chấm & Phê Duyệt', icon: 'fa-solid fa-pen-nib', color: 'var(--accent-green)', 
    tasks: [
      { time: '≤ 1 ngày', desc: 'Thi Dự án / Vấn đáp' },
      { time: '≤ 5 ngày', desc: 'Thi Tự luận' },
      { time: 'Chốt', desc: 'GĐ Đào tạo phê duyệt kết quả cuối' }
    ]
  },
  { 
    id: 4, title: 'Hậu Khảo Thí', icon: 'fa-solid fa-clipboard-check', color: 'var(--accent-purple)', 
    tasks: [
      { time: 'Phúc khảo', desc: 'Trả kết quả trong ≤ 5 ngày' },
      { time: 'Thi lại', desc: 'Định kỳ Thứ 7 hàng tuần' },
      { time: 'Lệ phí', desc: '300.000đ/học phần' }
    ]
  }
];

export default function KhaoThi() {
  return (
    <section className="page-container">
      <div className="section-title-wrap" style={{ marginTop: 0 }}>
        <div className="section-title"><i className="fa-solid fa-file-signature"></i> QUY TRÌNH KHẢO THÍ CHƯƠNG TRÌNH LIÊN KẾT PTIT</div>
      </div>

      <div className="process-timeline">
        {PHASES.map((phase, index) => (
          <div className="timeline-step" key={phase.id} style={{ '--step-color': phase.color, animationDelay: `${index * 0.15}s` }}>
            <div className="step-indicator">
              <div className="step-icon">
                <i className={phase.icon}></i>
              </div>
              {index < PHASES.length - 1 && <div className="step-connector"></div>}
            </div>
            
            <div className="step-card">
              <h3 className="step-title">Bước {phase.id}: {phase.title}</h3>
              <div className="step-tasks">
                {phase.tasks.map((t, idx) => (
                  <div className="task-row" key={idx}>
                    <span className="task-time">{t.time}</span>
                    <span className="task-desc">{t.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="doc-card" style={{ marginTop: '40px' }}>
        <h3 style={{ marginBottom: '20px', color: 'var(--text-heading)' }}>
          <i className="fa-solid fa-chart-pie" style={{ color: 'var(--primary-red)' }}></i> Cơ Cấu Điểm Học Phần (Chuẩn Đạt Môn ≥ 50/100đ)
        </h3>
        <div className="table-responsive">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Thành phần điểm</th>
                <th>Hình thức đánh giá</th>
                <th>Tỷ lệ thành phần</th>
                <th>Tỷ trọng tổng</th>
                <th>Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              <tr><td rowSpan="2"><b>1. Quá Trình (20%)</b></td><td>Điểm chuyên cần</td><td>50%</td><td><b>10%</b></td><td>Nghỉ 1% trừ 1 điểm</td></tr>
              <tr><td>Kiểm tra đầu giờ</td><td>50%</td><td><b>10%</b></td><td>Trung bình cộng các lần</td></tr>
              <tr><td rowSpan="2"><b>2. Giữa Môn (20%)</b></td><td>Trắc nghiệm</td><td>30%</td><td rowSpan="2"><b>20%</b></td><td rowSpan="2">Thời gian tối đa 120 phút</td></tr>
              <tr><td>Tự luận / Thực hành</td><td>70%</td></tr>
              <tr><td rowSpan="3"><b>3. Cuối Môn (60%)</b></td><td>Trắc nghiệm</td><td>10%</td><td rowSpan="3"><b>60%</b></td><td rowSpan="3" style={{ background: 'var(--primary-red-light)', color: 'var(--primary-red)' }}><b>Chuẩn qua môn:</b><br />Tổng điểm ≥ 50/100đ</td></tr>
              <tr><td>Vấn đáp phỏng vấn</td><td>20%</td></tr>
              <tr><td>Sản phẩm / Đồ án thực hành</td><td>70%</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
