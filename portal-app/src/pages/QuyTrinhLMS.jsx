import React, { useState } from 'react';

export default function QuyTrinhLMS() {
  const [activeTab, setActiveTab] = useState('quy-dinh');
  const [copied, setCopied] = useState(false);
  const feedbackCode = "[K26][Session_XX][Lesson_XX][Type]";

  const handleCopy = () => {
    navigator.clipboard.writeText(feedbackCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
      
      {/* Header */}
      <div className="page-header" style={{ marginBottom: '24px' }}>
        <h1 className="page-title" style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <i className="fa-solid fa-code-merge"></i> 
          Quy Trình Phối Hợp Sản Xuất - Kiểm Duyệt Học Liệu
        </h1>
        <p className="page-desc" style={{ marginTop: '8px', fontSize: '1.1rem' }}>
          Hệ thống LMS & Chuyên môn K26 - CNTT
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="kpi-subnav" style={{ marginBottom: '32px' }}>
        <button 
          className={`kpi-subtab-btn ${activeTab === 'quy-dinh' ? 'active' : ''}`}
          onClick={() => setActiveTab('quy-dinh')}
        >
          <i className="fa-solid fa-list-check"></i> Quy định & Trách nhiệm
        </button>
        <button 
          className={`kpi-subtab-btn ${activeTab === 'dieu-kien' ? 'active' : ''}`}
          onClick={() => setActiveTab('dieu-kien')}
        >
          <i className="fa-solid fa-check-double"></i> Điều kiện Hợp lệ
        </button>
        <button 
          className={`kpi-subtab-btn ${activeTab === 'che-tai' ? 'active' : ''}`}
          onClick={() => setActiveTab('che-tai')}
        >
          <i className="fa-solid fa-gavel"></i> Khung Chế tài
        </button>
      </div>

      {/* Tab 1: Quy định & Trách nhiệm */}
      {activeTab === 'quy-dinh' && (
        <div className="tab-content fade-in">
          
          {/* Banner Thông Điệp Cốt Lõi */}
          <div className="callout-box" style={{ background: 'var(--bg-subtle)', border: 'none', borderLeft: '4px solid var(--accent-blue)', padding: '24px', borderRadius: '8px', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ width: '64px', height: '64px', background: 'var(--bg-body)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', color: 'var(--accent-blue)', flexShrink: 0, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <i className="fa-solid fa-bullhorn"></i>
            </div>
            <div>
              <h3 style={{ margin: '0 0 8px 0', color: 'var(--accent-blue)', fontSize: '1.2rem' }}>Thông điệp cốt lõi</h3>
              <p style={{ margin: 0, color: 'var(--text-color)', fontSize: '1.05rem', lineHeight: 1.5 }}>
                Đây là kênh <strong>Feedback trực tiếp</strong> dành cho GV & TG về Tài nguyên học tập K26 - CNTT.<br/> 
                Mọi phản hồi sẽ được xử lý ngay lập tức trên các <strong>TOPIC nhóm</strong> để đảm bảo chất lượng lớp học!
              </p>
            </div>
          </div>

          {/* Sơ đồ Quy trình */}
          <div className="doc-card" style={{ marginBottom: '32px', padding: '24px' }}>
            <h3 style={{ margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '32px', height: '32px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-blue)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-solid fa-diagram-project"></i>
              </div>
              Sơ đồ Quy trình Kiểm duyệt & Hiệu chỉnh Học liệu
            </h3>
            <div style={{ textAlign: 'center', background: 'var(--bg-subtle)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <img 
                src="/images/quy-trinh/image1.jpeg" 
                alt="Sơ đồ quy trình LMS" 
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
              />
            </div>
          </div>

          <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            
            {/* Mục Đích (Icon List) */}
            <div className="stat-card" style={{ padding: '24px', alignItems: 'flex-start' }}>
              <h3 style={{ margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', background: 'rgba(33, 115, 70, 0.1)', color: 'var(--accent-green)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                5 Mục tiêu quản lý
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
                {[
                  { icon: 'fa-gauge-high', text: 'Hiệu chỉnh <strong>đúng tiến độ</strong>', color: 'var(--accent-blue)' },
                  { icon: 'fa-location-dot', text: 'Gửi <strong>đúng người, đúng TOPIC</strong>', color: 'var(--accent-purple)' },
                  { icon: 'fa-shield-halved', text: 'Xử lý lỗi <strong>trước khi lớp học diễn ra</strong>', color: 'var(--accent-orange)' },
                  { icon: 'fa-scale-balanced', text: 'Trách nhiệm <strong>minh bạch</strong>', color: 'var(--text-muted)' },
                  { icon: 'fa-gift', text: 'Có <strong>Khen thưởng & Chế tài</strong> rõ ràng', color: 'var(--accent-green)' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-body)', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <i className={`fa-solid ${item.icon}`} style={{ color: item.color, fontSize: '18px', width: '24px', textAlign: 'center' }}></i>
                    <span dangerouslySetInnerHTML={{ __html: item.text }} style={{ color: 'var(--text-color)' }}></span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trách nhiệm */}
            <div className="stat-card" style={{ padding: '24px', alignItems: 'flex-start', background: 'var(--bg-card)' }}>
              <h3 style={{ margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', background: 'rgba(239, 68, 68, 0.1)', color: 'var(--accent-red)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa-solid fa-clock-rotate-left"></i>
                </div>
                Ưu tiên xử lý khẩn cấp
              </h3>
              
              <div style={{ borderLeft: '4px solid var(--accent-red)', paddingLeft: '16px' }}>
                <p style={{ margin: '0 0 12px 0', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-color)' }}>
                  Lỗi nghiêm trọng sát giờ học!
                </p>
                <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Nếu phát hiện lỗi có nguy cơ <strong>ảnh hưởng trực tiếp đến buổi học sắp diễn ra</strong>, Leader chuyên môn sẽ trực tiếp xác nhận độ khẩn. LMS sẽ ưu tiên xử lý ngay lập tức!
                </p>
              </div>
              
              <div style={{ marginTop: '32px', padding: '16px', background: 'var(--bg-body)', borderRadius: '8px', border: '1px dashed var(--border-color)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <i className="fa-solid fa-circle-check text-green" style={{ fontSize: '24px' }}></i>
                <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Quy trình được sinh ra để hỗ trợ tối đa cho bài giảng của các thầy/cô.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Điều kiện Hợp lệ (Timeline Layout) */}
      {activeTab === 'dieu-kien' && (
        <div className="tab-content fade-in">
          <div className="doc-card" style={{ marginBottom: '32px' }}>
            <div className="doc-body" style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h3 style={{ margin: '0 0 8px 0', color: 'var(--text-color)' }}>Cú pháp bắt buộc</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)' }}>Vui lòng sử dụng cú pháp này ở đầu mỗi phản hồi để hệ thống phân loại dễ dàng.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-subtle)', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--accent-blue)' }}>
                <code style={{ fontSize: '1.2rem', color: 'var(--accent-blue)', fontWeight: 'bold' }}>{feedbackCode}</code>
                <button 
                  onClick={handleCopy}
                  className="btn" 
                  style={{ background: copied ? 'var(--accent-green)' : 'var(--accent-blue)', color: 'white', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}
                >
                  {copied ? <><i className="fa-solid fa-check"></i> Đã Copy</> : <><i className="fa-regular fa-copy"></i> Copy Mã</>}
                </button>
              </div>
            </div>
          </div>

          <h3 style={{ marginBottom: '24px' }}>5 Bước cho một phản hồi hợp lệ:</h3>
          
          <div style={{ position: 'relative', paddingLeft: '30px' }}>
            {/* Timeline Line */}
            <div style={{ position: 'absolute', left: '11px', top: '10px', bottom: '20px', width: '2px', background: 'var(--border-color)' }}></div>
            
            {[
              { title: 'Đúng nơi', desc: <>Reply đúng <strong>TOPIC</strong> của môn học.</> },
              { title: 'Đúng mã', desc: 'Sử dụng đúng cú pháp (Format) quy định ở trên.' },
              { title: 'Rõ ràng', desc: 'Nêu rõ: Nội dung hiện tại, Vấn đề, Đề xuất và Minh chứng (Link, ảnh).' },
              { title: 'Tập trung', desc: <>Mỗi phản hồi chỉ nên tập trung vào <strong>một nhóm nội dung</strong> có liên quan.</> },
              { title: 'Theo sát', desc: <>Người phản hồi phải theo dõi đến khi nội dung được xác nhận <strong>hoàn tất</strong>.</> }
            ].map((step, index) => (
              <div key={index} style={{ position: 'relative', marginBottom: '24px' }}>
                <div style={{ position: 'absolute', left: '-30px', top: '4px', width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', zIndex: 1, border: '4px solid var(--bg-body)' }}>
                  {index + 1}
                </div>
                <div style={{ background: 'var(--bg-card)', padding: '16px 20px', borderRadius: '8px', border: '1px solid var(--border-color)', marginLeft: '16px' }}>
                  <h4 style={{ margin: '0 0 8px 0', color: 'var(--accent-blue)' }}>{step.title}</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(239, 68, 68, 0.05)', borderRadius: '6px', color: 'var(--accent-red)', borderLeft: '3px solid var(--accent-red)' }}>
            <i className="fa-solid fa-triangle-exclamation"></i> <strong>Lưu ý:</strong> Phản hồi chưa đúng định dạng sẽ bị trả lại và không được tính là hợp lệ. Việc xử lý chế tài áp dụng khi cá nhân không bổ sung đúng hạn, tái phạm nhiều lần hoặc ảnh hưởng tiến độ chung.
          </div>
        </div>
      )}

      {/* Tab 3: Khung Chế tài */}
      {activeTab === 'che-tai' && (
        <div className="tab-content fade-in">
          <div className="alert-info" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-blue)', padding: '16px 20px', borderRadius: '8px', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '4px solid var(--accent-blue)' }}>
            <i className="fa-solid fa-circle-info" style={{ fontSize: '20px' }}></i>
            <span style={{ fontSize: '1.05rem' }}>Dưới đây là chi tiết các khung chế tài áp dụng cho Giảng viên, Trợ giảng, Leader và LMS. Mức phạt lũy tiến theo số lần vi phạm.</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Mục 4: Trợ giảng */}
            <div className="doc-card">
              <div className="doc-header" style={{ background: 'var(--bg-subtle)' }}>
                <h3 className="doc-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--bg-body)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)' }}>
                    <i className="fa-solid fa-user-graduate"></i>
                  </div>
                  4. Khung Chế Tài Dành Cho Trợ Giảng
                </h3>
              </div>
              <div className="doc-body" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h4 style={{ margin: '0 0 12px 0', color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa-solid fa-triangle-exclamation text-orange"></i> 4.1. Vi phạm quy trình thông thường
                  </h4>
                  <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                      <thead>
                        <tr style={{ background: 'var(--bg-subtle)', borderBottom: '2px solid var(--border-color)' }}>
                          <th style={{ padding: '12px 16px' }}>Mã</th><th style={{ padding: '12px 16px' }}>Hành vi</th><th style={{ padding: '12px 16px' }}>Lần 1</th><th style={{ padding: '12px 16px' }}>Lần 2</th><th style={{ padding: '12px 16px' }}>Lần 3</th><th style={{ padding: '12px 16px' }}>Lần 4/tái phạm</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-TG-01</td><td style={{ padding: '12px 16px' }}>Chậm xác nhận tiếp nhận nhiệm vụ</td><td style={{ padding: '12px 16px' }}>Nhắc nhở</td><td style={{ padding: '12px 16px' }}>Trừ 50.000đ</td><td style={{ padding: '12px 16px' }}>Trừ 100.000đ và 0,1 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 200.000đ, xem xét dừng phân công kiểm duyệt</td></tr>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-TG-02</td><td style={{ padding: '12px 16px' }}>Feedback sai TOPIC, sai mã hoặc thiếu thông tin sau khi đã được yêu cầu bổ sung</td><td style={{ padding: '12px 16px' }}>Nhắc nhở, yêu cầu bổ sung</td><td style={{ padding: '12px 16px' }}>Trừ 50.000đ</td><td style={{ padding: '12px 16px' }}>Trừ 100.000đ và 0,1 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 200.000đ, đánh giá lại năng lực phối hợp</td></tr>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-TG-03</td><td style={{ padding: '12px 16px' }}>Chậm kiểm tra lại hoặc không xác nhận kết quả hiệu chỉnh</td><td style={{ padding: '12px 16px' }}>Nhắc nhở</td><td style={{ padding: '12px 16px' }}>Trừ 50.000đ</td><td style={{ padding: '12px 16px' }}>Trừ 100.000đ và 0,1 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 200.000đ, dừng phân công nhiệm vụ tương tự</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 12px 0', color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa-solid fa-bolt text-red"></i> 4.2. Vi phạm ảnh hưởng đến chất lượng hoặc tiến độ
                  </h4>
                  <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                      <thead>
                        <tr style={{ background: 'var(--bg-subtle)', borderBottom: '2px solid var(--border-color)' }}>
                          <th style={{ padding: '12px 16px' }}>Mã</th><th style={{ padding: '12px 16px' }}>Hành vi</th><th style={{ padding: '12px 16px' }}>Lần 1</th><th style={{ padding: '12px 16px' }}>Lần 2</th><th style={{ padding: '12px 16px' }}>Lần 3</th><th style={{ padding: '12px 16px' }}>Lần 4/tái phạm</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-TG-04</td><td style={{ padding: '12px 16px' }}>Chậm kiểm duyệt học liệu theo KPI Master</td><td style={{ padding: '12px 16px' }}>Nhắc nhở hệ thống</td><td style={{ padding: '12px 16px' }}>Trừ 100.000đ</td><td style={{ padding: '12px 16px' }}>Trừ 300.000đ và 0,2 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 0,5 HSNX, đình chỉ công tác kiểm duyệt/sản xuất học liệu</td></tr>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-TG-05</td><td style={{ padding: '12px 16px' }}>Kiểm duyệt qua loa, bỏ sót lỗi rõ ràng hoặc feedback không thể thực hiện</td><td style={{ padding: '12px 16px' }}>Nhắc nhở và kiểm duyệt lại</td><td style={{ padding: '12px 16px' }}>Trừ 100.000đ</td><td style={{ padding: '12px 16px' }}>Trừ 300.000đ và 0,2 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 0,5 HSNX, đánh giá lại năng lực chuyên môn</td></tr>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-TG-06</td><td style={{ padding: '12px 16px' }}>Tự ý chỉnh sửa học liệu đã duyệt hoặc xác nhận "Đạt" sai thực tế</td><td style={{ padding: '12px 16px' }}>Nhắc nhở hệ thống</td><td style={{ padding: '12px 16px' }}>Trừ 100.000đ</td><td style={{ padding: '12px 16px' }}>Trừ 300.000đ và 0,2 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 0,5 HSNX, đình chỉ công tác sản xuất/kiểm duyệt</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Mục 5: Giảng viên */}
            <div className="doc-card">
              <div className="doc-header" style={{ background: 'var(--bg-subtle)' }}>
                <h3 className="doc-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--bg-body)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>
                    <i className="fa-solid fa-person-chalkboard"></i>
                  </div>
                  5. Khung Chế Tài Dành Cho Giảng Viên
                </h3>
              </div>
              <div className="doc-body" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h4 style={{ margin: '0 0 12px 0', color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa-solid fa-triangle-exclamation text-orange"></i> 5.1. Vi phạm quy trình thông thường
                  </h4>
                  <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                      <thead>
                        <tr style={{ background: 'var(--bg-subtle)', borderBottom: '2px solid var(--border-color)' }}>
                          <th style={{ padding: '12px 16px' }}>Mã</th><th style={{ padding: '12px 16px' }}>Hành vi</th><th style={{ padding: '12px 16px' }}>Lần 1</th><th style={{ padding: '12px 16px' }}>Lần 2</th><th style={{ padding: '12px 16px' }}>Lần 3</th><th style={{ padding: '12px 16px' }}>Lần 4/tái phạm</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-GV-01</td><td style={{ padding: '12px 16px' }}>Chậm xác nhận tiếp nhận nhiệm vụ</td><td style={{ padding: '12px 16px' }}>Nhắc nhở</td><td style={{ padding: '12px 16px' }}>Trừ 100.000đ</td><td style={{ padding: '12px 16px' }}>Trừ 200.000đ và 0,1 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 300.000đ, xem xét lại phân công kiểm duyệt</td></tr>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-GV-02</td><td style={{ padding: '12px 16px' }}>Feedback sai TOPIC, sai mã hoặc thiếu thông tin sau khi đã được yêu cầu bổ sung</td><td style={{ padding: '12px 16px' }}>Nhắc nhở, yêu cầu bổ sung</td><td style={{ padding: '12px 16px' }}>Trừ 100.000đ</td><td style={{ padding: '12px 16px' }}>Trừ 200.000đ và 0,1 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 300.000đ, đánh giá lại năng lực phối hợp</td></tr>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-GV-03</td><td style={{ padding: '12px 16px' }}>Chậm kiểm tra lại hoặc không xác nhận kết quả hiệu chỉnh</td><td style={{ padding: '12px 16px' }}>Nhắc nhở</td><td style={{ padding: '12px 16px' }}>Trừ 100.000đ</td><td style={{ padding: '12px 16px' }}>Trừ 200.000đ và 0,1 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 300.000đ, xem xét lại việc phân công môn học</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 12px 0', color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa-solid fa-bolt text-red"></i> 5.2. Vi phạm ảnh hưởng đến chất lượng hoặc tiến độ
                  </h4>
                  <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                      <thead>
                        <tr style={{ background: 'var(--bg-subtle)', borderBottom: '2px solid var(--border-color)' }}>
                          <th style={{ padding: '12px 16px' }}>Mã</th><th style={{ padding: '12px 16px' }}>Hành vi</th><th style={{ padding: '12px 16px' }}>Lần 1</th><th style={{ padding: '12px 16px' }}>Lần 2</th><th style={{ padding: '12px 16px' }}>Lần 3</th><th style={{ padding: '12px 16px' }}>Lần 4/tái phạm</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-GV-04</td><td style={{ padding: '12px 16px' }}>Chậm kiểm duyệt học liệu theo KPI Master</td><td style={{ padding: '12px 16px' }}>Nhắc nhở hệ thống</td><td style={{ padding: '12px 16px' }}>Trừ 200.000đ</td><td style={{ padding: '12px 16px' }}>Trừ 500.000đ và 0,2 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 0,5 HSNX và hạ 01 Rank đào tạo</td></tr>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-GV-05</td><td style={{ padding: '12px 16px' }}>Kiểm duyệt qua loa, bỏ sót lỗi chuyên môn hoặc feedback không thể thực hiện</td><td style={{ padding: '12px 16px' }}>Nhắc nhở và kiểm duyệt lại</td><td style={{ padding: '12px 16px' }}>Trừ 200.000đ</td><td style={{ padding: '12px 16px' }}>Trừ 500.000đ và 0,2 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 0,5 HSNX, đánh giá lại năng lực chuyên môn</td></tr>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-GV-06</td><td style={{ padding: '12px 16px' }}>Tự ý chỉnh sửa học liệu đã duyệt hoặc xác nhận "Đạt" sai thực tế</td><td style={{ padding: '12px 16px' }}>Nhắc nhở hệ thống</td><td style={{ padding: '12px 16px' }}>Trừ 200.000đ</td><td style={{ padding: '12px 16px' }}>Trừ 500.000đ và 0,2 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 0,5 HSNX, hạ 01 Rank đào tạo</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Mục 6: Leader / LMS */}
            <div className="doc-card">
              <div className="doc-header" style={{ background: 'var(--bg-subtle)' }}>
                <h3 className="doc-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--bg-body)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)' }}>
                    <i className="fa-solid fa-user-shield"></i>
                  </div>
                  6. Khung Kiểm Soát Dành Cho Leader Chuyên Môn & Đội Ngũ LMS
                </h3>
              </div>
              <div className="doc-body" style={{ padding: '24px' }}>
                <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                    <thead>
                      <tr style={{ background: 'var(--bg-subtle)', borderBottom: '2px solid var(--border-color)' }}>
                        <th style={{ padding: '12px 16px' }}>Mã</th><th style={{ padding: '12px 16px' }}>Hành vi</th><th style={{ padding: '12px 16px' }}>Lần 1</th><th style={{ padding: '12px 16px' }}>Lần 2</th><th style={{ padding: '12px 16px' }}>Lần 3</th><th style={{ padding: '12px 16px' }}>Lần 4/tái phạm</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-LD-01</td><td style={{ padding: '12px 16px' }}>Leader chậm tiếp nhận hoặc phân công kiểm duyệt</td><td style={{ padding: '12px 16px' }}>Nhắc nhở</td><td style={{ padding: '12px 16px' }}>Ghi nhận 01 lỗi quy trình</td><td style={{ padding: '12px 16px' }}>Trừ 0,1 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 0,2 HSNX, báo cáo quản lý trực tiếp</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-LD-02</td><td style={{ padding: '12px 16px' }}>Không theo dõi, đôn đốc hoặc xử lý khi nhiệm vụ có nguy cơ trễ</td><td style={{ padding: '12px 16px' }}>Nhắc nhở</td><td style={{ padding: '12px 16px' }}>Ghi nhận 01 lỗi quy trình</td><td style={{ padding: '12px 16px' }}>Trừ 0,1 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 0,2 HSNX, đánh giá lại vai trò điều phối</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-LMS-01</td><td style={{ padding: '12px 16px' }}>Chậm xác nhận tiếp nhận feedback hợp lệ</td><td style={{ padding: '12px 16px' }}>Nhắc nhở</td><td style={{ padding: '12px 16px' }}>Ghi nhận 01 lỗi quy trình</td><td style={{ padding: '12px 16px' }}>Trừ 0,1 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 0,2 HSNX, báo cáo quản lý trực tiếp</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-LMS-02</td><td style={{ padding: '12px 16px' }}>Hiệu chỉnh quá 01 ngày làm việc mà không thông báo lý do</td><td style={{ padding: '12px 16px' }}>Nhắc nhở</td><td style={{ padding: '12px 16px' }}>Ghi nhận 01 lỗi tiến độ</td><td style={{ padding: '12px 16px' }}>Trừ 0,2 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 0,5 HSNX, xem xét lại phân công</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-LMS-03</td><td style={{ padding: '12px 16px' }}>Hiệu chỉnh sai yêu cầu, thiếu nội dung hoặc phát sinh lỗi mới</td><td style={{ padding: '12px 16px' }}>Yêu cầu sửa lại</td><td style={{ padding: '12px 16px' }}>Ghi nhận 01 lỗi chất lượng</td><td style={{ padding: '12px 16px' }}>Trừ 0,2 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 0,5 HSNX, đánh giá lại năng lực thực hiện</td></tr>
                      <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>FB-LMS-04</td><td style={{ padding: '12px 16px' }}>Tự ý đóng phản hồi khi chưa có xác nhận của GV/TG</td><td style={{ padding: '12px 16px' }}>Nhắc nhở</td><td style={{ padding: '12px 16px' }}>Ghi nhận 01 lỗi quy trình</td><td style={{ padding: '12px 16px' }}>Trừ 0,2 HSNX</td><td style={{ padding: '12px 16px' }}>Trừ 0,5 HSNX, xem xét lại quyền xử lý</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Mục 7: Vi phạm nghiêm trọng */}
            <div className="doc-card" style={{ border: '1px solid rgba(239, 68, 68, 0.3)' }}>
              <div className="doc-header" style={{ background: 'rgba(239, 68, 68, 0.05)' }}>
                <h3 className="doc-title" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--accent-red)' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--bg-body)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-red)' }}>
                    <i className="fa-solid fa-skull-crossbones"></i>
                  </div>
                  7. Vi Phạm Nghiêm Trọng
                </h3>
              </div>
              <div className="doc-body" style={{ padding: '24px' }}>
                <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                    <thead>
                      <tr style={{ background: 'rgba(239, 68, 68, 0.05)', borderBottom: '2px solid rgba(239, 68, 68, 0.3)', color: 'var(--accent-red)' }}>
                        <th style={{ padding: '12px 16px' }}>Mã</th><th style={{ padding: '12px 16px' }}>Hành vi</th><th style={{ padding: '12px 16px' }}>Lần 1</th><th style={{ padding: '12px 16px' }}>Tái phạm</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(239, 68, 68, 0.3)' }}><td style={{ padding: '12px 16px', color: 'var(--accent-red)', fontWeight: 'bold' }}>CRIT-FB</td><td style={{ padding: '12px 16px', color: 'var(--accent-red)' }}>Cố tình che giấu lỗi, xác nhận sai thực tế, xóa hoặc làm sai lệch lịch sử phản hồi, tiến độ hoặc chỉ số chất lượng</td><td style={{ padding: '12px 16px' }}>Phạt 1.000.000đ và hạ 01 Rank đào tạo hoặc xử lý tương đương theo vị trí</td><td style={{ padding: '12px 16px', fontWeight: 'bold' }}>Chuyển Hội đồng kỷ luật, xem xét đình chỉ nhiệm vụ hoặc chấm dứt hợp đồng theo quy định</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Basic styles for animation */}
      <style>{`
        .fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
