import React from 'react';

export default function PhongThi() {
  return (
    <section className="page-container">
      <div className="section-title-wrap" style={{ marginTop: 0 }}>
        <div className="section-title"><i className="fa-solid fa-person-shelter"></i> NỘI QUY PHÒNG THI & CHẾ TÀI XỬ LÝ VI PHẠM</div>
      </div>

      <div className="doc-card">
        <h3><i className="fa-solid fa-shield-halved text-red"></i> 4 Mức Kỷ Luật Khảo Thí Leo Thang</h3>
        <table className="data-table">
          <thead><tr><th>Mức kỷ luật</th><th>Hành vi vi phạm</th><th>Mức trừ điểm</th><th>Hình thức chế tài</th></tr></thead>
          <tbody>
            <tr><td><span className="tag tag-blue">1. Nhắc nhở</span></td><td>Nhìn bài bạn, mất trật tự lần đầu</td><td>0%</td><td>Nhắc nhở công khai tại phòng thi</td></tr>
            <tr><td><span className="tag tag-gold">2. Khiển trách</span></td><td>Tái phạm nhắc nhở, mang tài liệu chưa mở</td><td><b>Trừ 25%</b></td><td>Lập biên bản khiển trách</td></tr>
            <tr><td><span className="tag tag-red">3. Cảnh cáo</span></td><td>Mở tài liệu, trao đổi bài, tra cứu trái phép</td><td><b>Trừ 50%</b></td><td>Lập biên bản cảnh cáo</td></tr>
            <tr><td><span className="tag tag-red" style={{ background: '#b91c1c', color: '#fff' }}>4. Đình chỉ thi</span></td><td>Dùng điện thoại, AI/ChatGPT, nhờ thi hộ</td><td><b>Điểm 0</b></td><td><b>HỦY KẾT QUẢ, CẤM THI LẠI</b> (Học lại)</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
