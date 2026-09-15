import React from 'react';

export default function KhaoThi() {
  return (
    <section className="page-container">
      <div className="section-title-wrap" style={{ marginTop: 0 }}>
        <div className="section-title"><i className="fa-solid fa-file-signature"></i> QUY TRÌNH KHẢO THÍ CHƯƠNG TRÌNH LIÊN KẾT PTIT</div>
      </div>

      <div className="lifecycle-steps-grid">
        <div className="lc-step">
          <div className="lc-header"><span className="lc-num">GĐ 1</span><b>Ra Đề & Bàn Giao</b></div>
          <ul>
            <li><b>T - 15 ngày:</b> Phân công CB ra đề</li>
            <li><b>T - 7 ngày:</b> Soạn thảo & Rà soát đề</li>
            <li><b>T - 3 ngày:</b> Bàn giao đề chính thức</li>
            <li><b>T - 1 giờ:</b> Tải đề lên hệ thống RAIA</li>
          </ul>
        </div>
        <div className="lc-step">
          <div className="lc-header"><span className="lc-num">GĐ 2</span><b>Tổ Chức Coi Thi</b></div>
          <ul>
            <li>CBCT có mặt trước giờ thi 15 phút</li>
            <li>Đối chiếu CCCD & phổ biến nội quy</li>
            <li>Thu bài, kiểm đếm & ký biên bản</li>
          </ul>
        </div>
        <div className="lc-step">
          <div className="lc-header"><span className="lc-num">GĐ 3</span><b>Chấm & Phê Duyệt</b></div>
          <ul>
            <li><b>Thi Dự án / Vấn đáp:</b> Chấm trong ≤ 1 ngày</li>
            <li><b>Thi Tự luận:</b> Chấm trong ≤ 5 ngày</li>
            <li>GĐ Đào tạo phê duyệt kết quả cuối</li>
          </ul>
        </div>
        <div className="lc-step">
          <div className="lc-header"><span className="lc-num">GĐ 4</span><b>Hậu Khảo Thí</b></div>
          <ul>
            <li><b>Phúc khảo:</b> Trả kết quả trong ≤ 5 ngày</li>
            <li><b>Thi lại:</b> Định kỳ Thứ 7 hàng tuần</li>
            <li><b>Lệ phí thi lại:</b> 300.000đ/học phần</li>
          </ul>
        </div>
      </div>

      <div className="doc-card">
        <h3><i className="fa-solid fa-chart-pie text-red"></i> Cơ Cấu Điểm Học Phần (Chuẩn Đạt Môn ≥ 50/100đ)</h3>
        <table className="data-table">
          <thead><tr><th>Thành phần điểm</th><th>Hình thức đánh giá</th><th>Tỷ lệ thành phần</th><th>Tỷ trọng tổng</th><th>Ghi chú</th></tr></thead>
          <tbody>
            <tr><td rowSpan="2"><b>1. Quá Trình (20%)</b></td><td>Điểm chuyên cần</td><td>50%</td><td><b>10%</b></td><td>Nghỉ 1% trừ 1 điểm</td></tr>
            <tr><td>Kiểm tra đầu giờ</td><td>50%</td><td><b>10%</b></td><td>Trung bình cộng các lần</td></tr>
            <tr><td rowSpan="2"><b>2. Giữa Môn (20%)</b></td><td>Trắc nghiệm</td><td>30%</td><td rowSpan="2"><b>20%</b></td><td rowSpan="2">Thời gian tối đa 120 phút</td></tr>
            <tr><td>Tự luận / Thực hành</td><td>70%</td></tr>
            <tr><td rowSpan="3"><b>3. Cuối Môn (60%)</b></td><td>Trắc nghiệm</td><td>10%</td><td rowSpan="3"><b>60%</b></td><td rowSpan="3"><b>Chuẩn qua môn:</b><br />Tổng điểm ≥ 50/100 điểm</td></tr>
            <tr><td>Vấn đáp phỏng vấn</td><td>20%</td></tr>
            <tr><td>Sản phẩm / Đồ án thực hành</td><td>70%</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
