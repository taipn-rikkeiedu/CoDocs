import React, { useState } from 'react';

export default function QuyTrinhLMS() {
  const [activeTab, setActiveTab] = useState('quy-dinh');
  const [roleTab, setRoleTab] = useState('tg');
  const [copied, setCopied] = useState(false);
  const feedbackCode = "[K26][Session_XX][Lesson_XX][Type]";

  const handleCopy = () => {
    navigator.clipboard.writeText(feedbackCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  const ruleData = {
    tg: [
      {
        title: "4.1. Vi phạm quy trình thông thường",
        icon: "fa-triangle-exclamation",
        color: "var(--accent-orange)",
        rules: [
          {
            code: "FB-TG-01", action: "Chậm xác nhận tiếp nhận nhiệm vụ",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở" },
              { label: "Lần 2", text: "Trừ 50.000đ" },
              { label: "Lần 3", text: "Trừ 100.000đ và 0,1 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 200.000đ, xem xét dừng phân công kiểm duyệt" }
            ]
          },
          {
            code: "FB-TG-02", action: "Feedback sai TOPIC, sai mã hoặc thiếu thông tin sau khi đã được yêu cầu bổ sung",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở, yêu cầu bổ sung" },
              { label: "Lần 2", text: "Trừ 50.000đ" },
              { label: "Lần 3", text: "Trừ 100.000đ và 0,1 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 200.000đ, đánh giá lại năng lực phối hợp" }
            ]
          },
          {
            code: "FB-TG-03", action: "Chậm kiểm tra lại hoặc không xác nhận kết quả hiệu chỉnh",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở" },
              { label: "Lần 2", text: "Trừ 50.000đ" },
              { label: "Lần 3", text: "Trừ 100.000đ và 0,1 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 200.000đ, dừng phân công nhiệm vụ tương tự" }
            ]
          }
        ]
      },
      {
        title: "4.2. Vi phạm ảnh hưởng đến chất lượng hoặc tiến độ",
        icon: "fa-bolt",
        color: "var(--accent-red)",
        rules: [
          {
            code: "FB-TG-04", action: "Chậm kiểm duyệt học liệu theo KPI Master",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở hệ thống" },
              { label: "Lần 2", text: "Trừ 100.000đ" },
              { label: "Lần 3", text: "Trừ 300.000đ và 0,2 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 0,5 HSNX, đình chỉ công tác kiểm duyệt/sản xuất học liệu" }
            ]
          },
          {
            code: "FB-TG-05", action: "Kiểm duyệt qua loa, bỏ sót lỗi rõ ràng hoặc feedback không thể thực hiện",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở và kiểm duyệt lại" },
              { label: "Lần 2", text: "Trừ 100.000đ" },
              { label: "Lần 3", text: "Trừ 300.000đ và 0,2 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 0,5 HSNX, đánh giá lại năng lực chuyên môn" }
            ]
          },
          {
            code: "FB-TG-06", action: "Tự ý chỉnh sửa học liệu đã duyệt hoặc xác nhận \"Đạt\" sai thực tế",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở hệ thống" },
              { label: "Lần 2", text: "Trừ 100.000đ" },
              { label: "Lần 3", text: "Trừ 300.000đ và 0,2 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 0,5 HSNX, đình chỉ công tác sản xuất/kiểm duyệt" }
            ]
          }
        ]
      }
    ],
    gv: [
      {
        title: "5.1. Vi phạm quy trình thông thường",
        icon: "fa-triangle-exclamation",
        color: "var(--accent-orange)",
        rules: [
          {
            code: "FB-GV-01", action: "Chậm xác nhận tiếp nhận nhiệm vụ",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở" },
              { label: "Lần 2", text: "Trừ 100.000đ" },
              { label: "Lần 3", text: "Trừ 200.000đ và 0,1 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 300.000đ, xem xét lại phân công kiểm duyệt" }
            ]
          },
          {
            code: "FB-GV-02", action: "Feedback sai TOPIC, sai mã hoặc thiếu thông tin sau khi đã được yêu cầu bổ sung",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở, yêu cầu bổ sung" },
              { label: "Lần 2", text: "Trừ 100.000đ" },
              { label: "Lần 3", text: "Trừ 200.000đ và 0,1 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 300.000đ, đánh giá lại năng lực phối hợp" }
            ]
          },
          {
            code: "FB-GV-03", action: "Chậm kiểm tra lại hoặc không xác nhận kết quả hiệu chỉnh",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở" },
              { label: "Lần 2", text: "Trừ 100.000đ" },
              { label: "Lần 3", text: "Trừ 200.000đ và 0,1 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 300.000đ, xem xét lại việc phân công môn học" }
            ]
          }
        ]
      },
      {
        title: "5.2. Vi phạm ảnh hưởng đến chất lượng hoặc tiến độ",
        icon: "fa-bolt",
        color: "var(--accent-red)",
        rules: [
          {
            code: "FB-GV-04", action: "Chậm kiểm duyệt học liệu theo KPI Master",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở hệ thống" },
              { label: "Lần 2", text: "Trừ 200.000đ" },
              { label: "Lần 3", text: "Trừ 500.000đ và 0,2 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 0,5 HSNX và hạ 01 Rank đào tạo" }
            ]
          },
          {
            code: "FB-GV-05", action: "Kiểm duyệt qua loa, bỏ sót lỗi chuyên môn hoặc feedback không thể thực hiện",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở và kiểm duyệt lại" },
              { label: "Lần 2", text: "Trừ 200.000đ" },
              { label: "Lần 3", text: "Trừ 500.000đ và 0,2 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 0,5 HSNX, đánh giá lại năng lực chuyên môn" }
            ]
          },
          {
            code: "FB-GV-06", action: "Tự ý chỉnh sửa học liệu đã duyệt hoặc xác nhận \"Đạt\" sai thực tế",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở hệ thống" },
              { label: "Lần 2", text: "Trừ 200.000đ" },
              { label: "Lần 3", text: "Trừ 500.000đ và 0,2 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 0,5 HSNX, hạ 01 Rank đào tạo" }
            ]
          }
        ]
      }
    ],
    lms: [
      {
        title: "6. Khung Kiểm Soát Dành Cho Leader Chuyên Môn & Đội Ngũ LMS",
        icon: "fa-user-shield",
        color: "var(--accent-green)",
        rules: [
          {
            code: "FB-LD-01", action: "Leader chậm tiếp nhận hoặc phân công kiểm duyệt",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở" },
              { label: "Lần 2", text: "Ghi nhận 01 lỗi quy trình" },
              { label: "Lần 3", text: "Trừ 0,1 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 0,2 HSNX, báo cáo quản lý trực tiếp" }
            ]
          },
          {
            code: "FB-LD-02", action: "Không theo dõi, đôn đốc hoặc xử lý khi nhiệm vụ có nguy cơ trễ",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở" },
              { label: "Lần 2", text: "Ghi nhận 01 lỗi quy trình" },
              { label: "Lần 3", text: "Trừ 0,1 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 0,2 HSNX, đánh giá lại vai trò điều phối" }
            ]
          },
          {
            code: "FB-LMS-01", action: "Chậm xác nhận tiếp nhận feedback hợp lệ",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở" },
              { label: "Lần 2", text: "Ghi nhận 01 lỗi quy trình" },
              { label: "Lần 3", text: "Trừ 0,1 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 0,2 HSNX, báo cáo quản lý trực tiếp" }
            ]
          },
          {
            code: "FB-LMS-02", action: "Hiệu chỉnh quá 01 ngày làm việc mà không thông báo lý do",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở" },
              { label: "Lần 2", text: "Ghi nhận 01 lỗi tiến độ" },
              { label: "Lần 3", text: "Trừ 0,2 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 0,5 HSNX, xem xét lại phân công" }
            ]
          },
          {
            code: "FB-LMS-03", action: "Hiệu chỉnh sai yêu cầu, thiếu nội dung hoặc phát sinh lỗi mới",
            penalties: [
              { label: "Lần 1", text: "Yêu cầu sửa lại" },
              { label: "Lần 2", text: "Ghi nhận 01 lỗi chất lượng" },
              { label: "Lần 3", text: "Trừ 0,2 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 0,5 HSNX, đánh giá lại năng lực thực hiện" }
            ]
          },
          {
            code: "FB-LMS-04", action: "Tự ý đóng phản hồi khi chưa có xác nhận của GV/TG",
            penalties: [
              { label: "Lần 1", text: "Nhắc nhở" },
              { label: "Lần 2", text: "Ghi nhận 01 lỗi quy trình" },
              { label: "Lần 3", text: "Trừ 0,2 HSNX" },
              { label: "Lần 4/tái phạm", text: "Trừ 0,5 HSNX, xem xét lại quyền xử lý" }
            ]
          }
        ]
      }
    ],
    critical: [
      {
        title: "7. Vi Phạm Nghiêm Trọng",
        icon: "fa-skull-crossbones",
        color: "var(--accent-red)",
        rules: [
          {
            code: "CRIT-FB", action: "Cố tình che giấu lỗi, xác nhận sai thực tế, xóa hoặc làm sai lệch lịch sử phản hồi, tiến độ hoặc chỉ số chất lượng",
            penalties: [
              { label: "Lần 1", text: "Phạt 1.000.000đ và hạ 01 Rank đào tạo hoặc xử lý tương đương theo vị trí" },
              { label: "Tái phạm", text: "Chuyển Hội đồng kỷ luật, xem xét đình chỉ nhiệm vụ hoặc chấm dứt hợp đồng theo quy định" }
            ]
          }
        ]
      }
    ]
  };

  const getSeverityColor = (index, total) => {
    if (total === 2) return index === 0 ? 'var(--accent-orange)' : 'var(--accent-red)';
    if (index === 0) return 'var(--accent-green)';
    if (index === 1) return 'var(--accent-orange)';
    if (index === 2) return 'var(--accent-red)';
    return '#991b1b'; // dark red
  };

  const PenaltyCard = ({ rule }) => (
    <div className="penalty-card-wrapper" style={{ background: 'var(--bg-body)', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', transition: 'all 0.3s ease' }}>
      <div style={{ background: 'var(--bg-subtle)', padding: '16px', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <span style={{ background: 'var(--bg-card)', color: 'var(--accent-blue)', padding: '6px 10px', borderRadius: '6px', fontSize: '0.9rem', fontWeight: 'bold', border: '1px solid var(--border-color)', whiteSpace: 'nowrap', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
          {rule.code}
        </span>
        <h4 style={{ margin: 0, color: 'var(--text-color)', fontSize: '1.05rem', lineHeight: 1.5 }}>
          {rule.action}
        </h4>
      </div>
      <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        {rule.penalties.map((p, i) => (
          <div key={i} className="penalty-level-card" style={{ display: 'flex', flexDirection: 'column', gap: '8px', background: 'var(--bg-card)', padding: '16px', borderRadius: '8px', borderTop: `4px solid ${getSeverityColor(i, rule.penalties.length)}`, boxShadow: '0 1px 3px rgba(0,0,0,0.04)', transition: 'all 0.2s ease' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {p.label}
            </div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-color)', lineHeight: 1.4 }}>
              {p.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

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
                  <div key={i} className="step-card" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-body)', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <i className={`fa-solid ${item.icon}`} style={{ color: item.color, fontSize: '18px', width: '24px', textAlign: 'center' }}></i>
                    <span dangerouslySetInnerHTML={{ __html: item.text }} style={{ color: 'var(--text-color)' }}></span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trách nhiệm */}
            <div className="doc-card" style={{ padding: '0', overflow: 'hidden', border: '1px solid rgba(239, 68, 68, 0.3)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.02) 100%)', padding: '20px 24px', borderBottom: '1px solid rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--accent-red)', color: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)', flexShrink: 0 }}>
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <div>
                  <h3 style={{ margin: '0 0 4px 0', color: 'var(--accent-red)', fontSize: '1.25rem', fontWeight: 'bold' }}>
                    Ưu tiên xử lý khẩn cấp!
                  </h3>
                  <div style={{ display: 'inline-block', background: 'rgba(239, 68, 68, 0.1)', color: 'var(--accent-red)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Lỗi sát giờ học
                  </div>
                </div>
              </div>
              
              <div style={{ padding: '24px', background: 'var(--bg-card)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ margin: '0 0 24px 0', color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem' }}>
                  Nếu phát hiện lỗi có nguy cơ <strong style={{ color: 'var(--text-color)' }}>ảnh hưởng trực tiếp đến buổi học sắp diễn ra</strong>, Leader chuyên môn sẽ trực tiếp xác nhận độ khẩn. LMS sẽ ưu tiên xử lý ngay lập tức!
                </p>
                
                <div style={{ marginTop: 'auto', background: 'var(--bg-subtle)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--accent-green)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <i className="fa-solid fa-handshake-angle" style={{ fontSize: '28px', color: 'var(--accent-green)' }}></i>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-color)', lineHeight: 1.5, fontStyle: 'italic' }}>
                    "Quy trình được sinh ra để hỗ trợ tối đa cho bài giảng của các thầy/cô."
                  </span>
                </div>
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
                <div className="step-card" style={{ background: 'var(--bg-card)', padding: '16px 20px', borderRadius: '8px', border: '1px solid var(--border-color)', marginLeft: '16px' }}>
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

          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setRoleTab('tg')} 
              style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', background: roleTab === 'tg' ? 'var(--accent-blue)' : 'var(--bg-subtle)', color: roleTab === 'tg' ? 'white' : 'var(--text-color)', transition: 'all 0.2s' }}
            >
              <i className="fa-solid fa-user-graduate"></i> Trợ Giảng
            </button>
            <button 
              onClick={() => setRoleTab('gv')} 
              style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', background: roleTab === 'gv' ? 'var(--accent-purple)' : 'var(--bg-subtle)', color: roleTab === 'gv' ? 'white' : 'var(--text-color)', transition: 'all 0.2s' }}
            >
              <i className="fa-solid fa-person-chalkboard"></i> Giảng Viên
            </button>
            <button 
              onClick={() => setRoleTab('lms')} 
              style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', background: roleTab === 'lms' ? 'var(--accent-green)' : 'var(--bg-subtle)', color: roleTab === 'lms' ? 'white' : 'var(--text-color)', transition: 'all 0.2s' }}
            >
              <i className="fa-solid fa-user-shield"></i> Leader & LMS
            </button>
            <button 
              onClick={() => setRoleTab('critical')} 
              style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', background: roleTab === 'critical' ? 'var(--accent-red)' : 'var(--bg-subtle)', color: roleTab === 'critical' ? 'white' : 'var(--accent-red)', transition: 'all 0.2s' }}
            >
              <i className="fa-solid fa-skull-crossbones"></i> Vi Phạm Nghiêm Trọng
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', animation: 'fadeIn 0.3s ease-in-out' }}>
            {ruleData[roleTab].map((section, idx) => (
              <div key={idx} className="doc-card" style={roleTab === 'critical' ? { border: '1px solid rgba(239, 68, 68, 0.3)' } : {}}>
                <div className="doc-header" style={{ background: roleTab === 'critical' ? 'rgba(239, 68, 68, 0.05)' : 'var(--bg-subtle)' }}>
                  <h3 className="doc-title" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: roleTab === 'critical' ? 'var(--accent-red)' : 'inherit' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--bg-body)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: section.color }}>
                      <i className={`fa-solid ${section.icon}`}></i>
                    </div>
                    {section.title}
                  </h3>
                </div>
                <div className="doc-body" style={{ padding: '24px' }}>
                  {section.rules.map((rule, ruleIdx) => (
                    <PenaltyCard key={ruleIdx} rule={rule} />
                  ))}
                </div>
              </div>
            ))}
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
        .penalty-card-wrapper:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.08) !important;
          border-color: var(--accent-blue) !important;
        }
        .penalty-level-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.06) !important;
          filter: brightness(0.96);
        }
        body.theme-dark .penalty-level-card:hover {
          filter: brightness(1.15);
        }
      `}</style>
    </div>
  );
}
