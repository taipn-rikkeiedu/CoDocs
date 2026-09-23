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

      <div className="doc-card" style={{ marginTop: '40px', padding: '0', overflow: 'hidden' }}>
        <div className="doc-header" style={{ padding: '24px 24px 16px', borderBottom: '1px solid var(--border-color)' }}>
          <h3 className="doc-title" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fa-solid fa-chart-pie" style={{ color: 'var(--primary-red)' }}></i> Cơ Cấu Điểm Học Phần (Chuẩn Đạt Môn ≥ 50/100đ)
          </h3>
        </div>
        <div className="rank-matrix-wrapper" style={{ margin: 0, border: 'none', borderRadius: 0, boxShadow: 'none' }}>
          <table className="rank-matrix-table" style={{ tableLayout: 'fixed' }}>
            <colgroup>
              <col style={{ width: '35%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '25%' }} />
            </colgroup>
            <thead>
              <tr>
                <th style={{ paddingLeft: '40px' }}>Hình thức đánh giá</th>
                <th style={{ textAlign: 'center' }}>Tỷ lệ thành phần</th>
                <th style={{ textAlign: 'center' }}>Tỷ trọng tổng</th>
                <th style={{ textAlign: 'center' }}>Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-group-header"><td colSpan="4"><b style={{ color: 'var(--accent-blue)' }}>1. Quá Trình (20%)</b></td></tr>
              <tr>
                <td className="col-title" style={{ paddingLeft: '40px' }}><i className="fa-solid fa-user-check" style={{ color: 'var(--accent-blue)', width: '24px' }}></i> Điểm chuyên cần</td>
                <td className="col-money" style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{ minWidth: '35px', textAlign: 'right' }}>50%</span>
                    <div style={{ flexGrow: 1, maxWidth: '50px', height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden' }}><div style={{ width: '50%', height: '100%', background: 'var(--accent-blue)' }}></div></div>
                  </div>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <b style={{ minWidth: '35px', textAlign: 'right' }}>10%</b>
                    <div style={{ flexGrow: 1, maxWidth: '50px', height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden' }}><div style={{ width: '10%', height: '100%', background: 'var(--accent-blue)' }}></div></div>
                  </div>
                </td>
                <td style={{ textAlign: 'center' }}><span style={{ background: 'var(--primary-red-light)', color: 'var(--primary-red)', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' }}>Nghỉ 1% trừ 1 điểm</span></td>
              </tr>
              <tr>
                <td className="col-title" style={{ paddingLeft: '40px' }}><i className="fa-solid fa-stopwatch" style={{ color: 'var(--accent-blue)', width: '24px' }}></i> Kiểm tra đầu giờ</td>
                <td className="col-money" style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{ minWidth: '35px', textAlign: 'right' }}>50%</span>
                    <div style={{ flexGrow: 1, maxWidth: '50px', height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden' }}><div style={{ width: '50%', height: '100%', background: 'var(--accent-blue)' }}></div></div>
                  </div>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <b style={{ minWidth: '35px', textAlign: 'right' }}>10%</b>
                    <div style={{ flexGrow: 1, maxWidth: '50px', height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden' }}><div style={{ width: '10%', height: '100%', background: 'var(--accent-blue)' }}></div></div>
                  </div>
                </td>
                <td style={{ textAlign: 'center' }}><span style={{ background: 'var(--bg-subtle)', color: 'var(--text-muted)', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '500' }}>Trung bình cộng các lần</span></td>
              </tr>
              
              <tr className="table-group-header"><td colSpan="4"><b style={{ color: 'var(--accent-orange)' }}>2. Giữa Môn (20%)</b></td></tr>
              <tr>
                <td className="col-title" style={{ paddingLeft: '40px' }}><i className="fa-solid fa-list-ul" style={{ color: 'var(--accent-orange)', width: '24px' }}></i> Trắc nghiệm</td>
                <td className="col-money" style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{ minWidth: '35px', textAlign: 'right' }}>30%</span>
                    <div style={{ flexGrow: 1, maxWidth: '50px', height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden' }}><div style={{ width: '30%', height: '100%', background: 'var(--accent-orange)' }}></div></div>
                  </div>
                </td>
                <td rowSpan="2" style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                    <b>20%</b>
                    <div style={{ width: '100%', maxWidth: '60px', height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden' }}><div style={{ width: '20%', height: '100%', background: 'var(--accent-orange)' }}></div></div>
                  </div>
                </td>
                <td rowSpan="2" style={{ verticalAlign: 'middle', textAlign: 'center' }}><span style={{ background: 'var(--bg-subtle)', color: 'var(--text-muted)', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '500' }}><i className="fa-regular fa-clock"></i> Tối đa 120 phút</span></td>
              </tr>
              <tr>
                <td className="col-title" style={{ paddingLeft: '40px' }}><i className="fa-solid fa-pen-ruler" style={{ color: 'var(--accent-orange)', width: '24px' }}></i> Tự luận / Thực hành</td>
                <td className="col-money" style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{ minWidth: '35px', textAlign: 'right' }}>70%</span>
                    <div style={{ flexGrow: 1, maxWidth: '50px', height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden' }}><div style={{ width: '70%', height: '100%', background: 'var(--accent-orange)' }}></div></div>
                  </div>
                </td>
              </tr>

              <tr className="table-group-header"><td colSpan="4"><b style={{ color: 'var(--primary-red)' }}>3. Cuối Môn (60%)</b></td></tr>
              <tr>
                <td className="col-title" style={{ paddingLeft: '40px' }}><i className="fa-solid fa-list-ul" style={{ color: 'var(--primary-red)', width: '24px' }}></i> Trắc nghiệm</td>
                <td className="col-money" style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{ minWidth: '35px', textAlign: 'right' }}>10%</span>
                    <div style={{ flexGrow: 1, maxWidth: '50px', height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden' }}><div style={{ width: '10%', height: '100%', background: 'var(--primary-red)' }}></div></div>
                  </div>
                </td>
                <td rowSpan="3" style={{ verticalAlign: 'middle', textAlign: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                    <b>60%</b>
                    <div style={{ width: '100%', maxWidth: '60px', height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden' }}><div style={{ width: '60%', height: '100%', background: 'var(--primary-red)' }}></div></div>
                  </div>
                </td>
                <td rowSpan="3" style={{ background: 'var(--primary-red-light)', verticalAlign: 'middle', textAlign: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
                    <span style={{ fontWeight: '600', color: 'var(--primary-red)', fontSize: '13px', textTransform: 'uppercase' }}>Chuẩn Qua Môn</span>
                    <span style={{ fontWeight: '800', color: 'var(--primary-red)', fontSize: '20px' }}>≥ 50<span style={{ fontSize: '14px', fontWeight: '600' }}>/100đ</span></span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="col-title" style={{ paddingLeft: '40px' }}><i className="fa-solid fa-comments" style={{ color: 'var(--primary-red)', width: '24px' }}></i> Vấn đáp phỏng vấn</td>
                <td className="col-money" style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{ minWidth: '35px', textAlign: 'right' }}>20%</span>
                    <div style={{ flexGrow: 1, maxWidth: '50px', height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden' }}><div style={{ width: '20%', height: '100%', background: 'var(--primary-red)' }}></div></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="col-title" style={{ paddingLeft: '40px' }}><i className="fa-solid fa-laptop-code" style={{ color: 'var(--primary-red)', width: '24px' }}></i> Sản phẩm / Đồ án</td>
                <td className="col-money" style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span style={{ minWidth: '35px', textAlign: 'right' }}>70%</span>
                    <div style={{ flexGrow: 1, maxWidth: '50px', height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden' }}><div style={{ width: '70%', height: '100%', background: 'var(--primary-red)' }}></div></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
