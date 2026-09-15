import React from 'react';

const VALUES_5T = [
  { num: 'T1', title: 'TIN CẬY', desc: 'Cam kết chuẩn mực đào tạo cao nhất' },
  { num: 'T2', title: 'TẬN TÂM', desc: 'Lấy thành công của học viên làm trọng tâm' },
  { num: 'T3', title: 'THỰC TIỄN', desc: 'Gắn liền lăng kính doanh nghiệp & dự án' },
  { num: 'T4', title: 'THÍCH ỨNG', desc: 'Đổi mới công nghệ & phương pháp liên tục' },
  { num: 'T5', title: 'TINH GỌN', desc: 'Tối ưu lộ trình, tập trung giá trị thực chất' },
];

export default function Onboarding() {
  return (
    <section className="page-container">
      <div className="section-title-wrap" style={{ marginTop: 0 }}>
        <div className="section-title"><i className="fa-solid fa-rocket"></i> SỔ TAY ONBOARDING & VĂN HÓA DOANH NGHIỆP 2026</div>
      </div>

      <div className="values-5t-grid">
        {VALUES_5T.map(v => (
          <div className="value-5t-card" key={v.num}>
            <div className="val-num">{v.num}</div>
            <h4>{v.title}</h4>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="doc-card">
        <h3><i className="fa-solid fa-clock text-red"></i> Quy Định Thời Gian & Chế Tài Đi Muộn</h3>
        <table className="data-table">
          <thead><tr><th>Khung giờ làm việc</th><th>Thời điểm đến</th><th>Hình thức xử lý</th><th>Quy định chi tiết</th></tr></thead>
          <tbody>
            <tr>
              <td rowSpan="2"><b>Khối BO (08h00 - 17h30)</b><br />Khối ĐT (07h00 - 16h00)</td>
              <td>Đến muộn <b>dưới 15 phút</b></td>
              <td><span className="tag tag-gold">Làm bù x2 HOẶC Nộp phạt</span></td>
              <td>Làm bù x2 thời gian muộn cuối ngày hoặc nộp phạt 20.000đ/mỗi 5 phút.</td>
            </tr>
            <tr>
              <td>Đến muộn <b>sau 15 phút</b></td>
              <td><span className="tag tag-red">Nộp phạt 20k/5p (CẤM BÙ)</span></td>
              <td>Bắt buộc nộp phạt 20.000đ/mỗi 5 phút muộn, không được phép làm bù.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
