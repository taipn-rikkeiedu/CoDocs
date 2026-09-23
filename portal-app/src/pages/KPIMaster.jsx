import React, { useState, useMemo } from 'react';
import { kpiMasterData } from '../data/kpiMasterData';

const ROLE_CLASS = { 'Trợ giảng': 'role-tro-giang', 'Giảng viên': 'role-giang-vien' };

export const getRankColorClass = (rank) => {
  const r = Number(rank);
  if (r === 1 || r === 2) return 'tag-blue';
  if (r === 3 || r === 4) return 'tag-green';
  if (r === 5 || r === 6) return 'tag-gold';
  if (r === 7 || r === 8) return 'tag-purple';
  return 'tag-gray';
};

export const getRankTextColor = (rank) => {
  const r = Number(rank);
  if (r === 1 || r === 2) return 'var(--accent-blue)';
  if (r === 3 || r === 4) return 'var(--accent-green)';
  if (r === 5 || r === 6) return 'var(--accent-gold)';
  if (r === 7 || r === 8) return 'var(--accent-purple)';
  return 'var(--text-muted)';
};

function TongQuan() {
  return (
    <>
      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-icon"><i className="fa-solid fa-list-ol"></i></div>
          <div className="stat-info">
            <span className="stat-value">249</span>
            <span className="stat-label">Tổng số dòng KPI</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><i className="fa-solid fa-clipboard-check"></i></div>
          <div className="stat-info">
            <span className="stat-value">162</span>
            <span className="stat-label">Nhiệm vụ Review</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><i className="fa-solid fa-key"></i></div>
          <div className="stat-info">
            <span className="stat-value">0</span>
            <span className="stat-label">Số Key Trùng Lặp</span>
          </div>
        </div>
      </div>

      <div className="doc-card">
        <div className="doc-header"><h3 className="doc-title"><i className="fa-solid fa-sitemap"></i> BẢNG ĐỊNH MỨC THEO RANK</h3></div>
        <div className="doc-body">
          <div className="table-responsive">
            <table className="modern-table">
              <thead>
                <tr>
                  <th>Vai trò</th>
                  <th>Rank</th>
                  <th>Tổng KPI</th>
                  <th>Review / Khác</th>
                  <th>Tổng phút chuẩn</th>
                  <th>Tổng giờ chuẩn</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Trợ giảng</td><td><span className={`kpi-badge ${getRankColorClass(0)}`}>0</span></td><td>1</td><td>0 / 1</td><td>0</td><td>0</td></tr>
                <tr><td>Trợ giảng</td><td><span className={`kpi-badge ${getRankColorClass(1)}`}>1</span></td><td>30</td><td>18 / 12</td><td>3140</td><td style={{color: 'var(--accent-blue)', fontWeight: 700}}>52.33</td></tr>
                <tr><td>Trợ giảng</td><td><span className={`kpi-badge ${getRankColorClass(2)}`}>2</span></td><td>30</td><td>18 / 12</td><td>2795</td><td style={{color: 'var(--accent-blue)', fontWeight: 700}}>46.58</td></tr>
                <tr><td>Trợ giảng</td><td><span className={`kpi-badge ${getRankColorClass(3)}`}>3</span></td><td>32</td><td>18 / 14</td><td>2645</td><td style={{color: 'var(--accent-blue)', fontWeight: 700}}>44.08</td></tr>
                
                <tr><td>Giảng viên</td><td><span className={`kpi-badge ${getRankColorClass(0)}`}>0</span></td><td>1</td><td>0 / 1</td><td>0</td><td>0</td></tr>
                <tr><td>Giảng viên</td><td><span className={`kpi-badge ${getRankColorClass(3)}`}>3</span></td><td>32</td><td>18 / 14</td><td>2645</td><td style={{color: 'var(--accent-blue)', fontWeight: 700}}>44.08</td></tr>
                <tr><td>Giảng viên</td><td><span className={`kpi-badge ${getRankColorClass(4)}`}>4</span></td><td>30</td><td>18 / 12</td><td>2405</td><td style={{color: 'var(--accent-blue)', fontWeight: 700}}>40.08</td></tr>
                <tr><td>Giảng viên</td><td><span className={`kpi-badge ${getRankColorClass(5)}`}>5</span></td><td>30</td><td>18 / 12</td><td>2195</td><td style={{color: 'var(--accent-blue)', fontWeight: 700}}>36.58</td></tr>
                <tr><td>Giảng viên</td><td><span className={`kpi-badge ${getRankColorClass(6)}`}>6</span></td><td>21</td><td>18 / 3</td><td>1285</td><td style={{color: 'var(--accent-blue)', fontWeight: 700}}>21.41</td></tr>
                <tr><td>Giảng viên</td><td><span className={`kpi-badge ${getRankColorClass(7)}`}>7</span></td><td>21</td><td>18 / 3</td><td>1285</td><td style={{color: 'var(--accent-blue)', fontWeight: 700}}>21.41</td></tr>
                <tr><td>Giảng viên</td><td><span className={`kpi-badge ${getRankColorClass(8)}`}>8</span></td><td>21</td><td>18 / 3</td><td>1285</td><td style={{color: 'var(--accent-blue)', fontWeight: 700}}>21.41</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="callout-box">
            <i className="fa-solid fa-circle-info"></i>
            <div className="callout-content">
              <strong>Lưu ý:</strong> Tổng phút/giờ chuẩn là tổng định mức khi mỗi KPI của rank được thực hiện 01 lần; không phải định mức bắt buộc trong tháng. Rank 0 để 0 vì người thực hiện tự khai báo giờ thực tế dựa trên công việc phát sinh.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function QuyTac() {
  const taskTypes = [
    { title: 'Review BTTH', unit: 'Session', content: 'Yêu cầu, hướng dẫn, code chạy, kết quả mong đợi, trường hợp lỗi', output: 'Checklist + lỗi/góp ý + kết luận' },
    { title: 'Review bộ câu hỏi', unit: 'Môn học', content: 'Bao phủ kiến thức, đáp án, độ khó, trùng lặp và câu mơ hồ', output: 'Checklist + lỗi/góp ý + kết luận' },
    { title: 'Review mindmap', unit: 'Session', content: 'Cấu trúc, tính đầy đủ và quan hệ giữa các khái niệm', output: 'Checklist + lỗi/góp ý + kết luận' },
    { title: 'Review slide', unit: 'Lesson', content: 'Kiến thức, trình tự sư phạm, ví dụ và hình thức trình bày', output: 'Checklist + lỗi/góp ý + kết luận' },
    { title: 'Review video/popup', unit: 'Lesson', content: 'Nội dung, âm thanh/hình ảnh, đồng bộ và câu hỏi tương tác', output: 'Checklist + lỗi/góp ý + kết luận' },
    { title: 'Review Quiz Session', unit: 'Session', content: 'Câu hỏi, đáp án, độ khó và liên kết mục tiêu buổi học', output: 'Checklist + lỗi/góp ý + kết luận' },
    { title: 'Review Quiz Lesson', unit: 'Lesson', content: 'Câu hỏi, đáp án, lỗi diễn đạt và mức độ phù hợp', output: 'Checklist + lỗi/góp ý + kết luận' },
    { title: 'Review bài đọc', unit: 'Lesson', content: 'Kiến thức, tính dễ hiểu, câu hỏi và đáp án/rubric', output: 'Checklist + lỗi/góp ý + kết luận' },
    { title: 'Review project buổi học', unit: 'Dự án', content: 'Yêu cầu, source code, khả năng chạy, hướng dẫn và kết quả', output: 'Chạy thử + checklist + kết luận' },
    { title: 'Review project môn học', unit: 'Dự án', content: 'Phạm vi, kiến trúc, source code, tài liệu và rubric', output: 'Chạy thử + checklist + kết luận' },
    { title: 'Review kịch bản', unit: 'Buổi học', content: 'Mục tiêu, hoạt động, thời lượng, phương pháp và đánh giá', output: 'Checklist + lỗi/góp ý + kết luận' },
    { title: 'Review mini-project', unit: 'Bài', content: 'Yêu cầu, độ khả thi, độ khó, đáp án và tiêu chí chấm', output: 'Chạy thử + checklist + kết luận' },
    { title: 'Review đề project', unit: 'Đề', content: 'Blueprint, yêu cầu, độ khó, tính khả thi và rubric', output: 'Checklist + phê duyệt' },
    { title: 'Review đề thực hành', unit: 'Đề', content: 'Dữ liệu, yêu cầu, đáp án, thời lượng và khả năng thực hiện', output: 'Làm thử + checklist + kết luận' },
    { title: 'Review đề trắc nghiệm', unit: 'Đề', content: 'Đáp án, phương án nhiễu, độ khó, trùng lặp và câu mơ hồ', output: 'Checklist + thống kê lỗi + kết luận' },
    { title: 'Review đề vấn đáp', unit: 'Đề', content: 'Phạm vi, đáp án hướng dẫn và độ khó tương đương', output: 'Checklist + kết luận' },
    { title: 'Review PM chương trình', unit: 'Chương trình', content: 'Mục tiêu, cấu trúc, lộ trình, thời lượng và chuẩn đầu ra', output: 'Biên bản review + kết luận' },
    { title: 'Review PM môn học', unit: 'Môn học', content: 'CLO, nội dung, phân bổ session, đánh giá và học liệu', output: 'Biên bản review + kết luận' }
  ];

  return (
    <>
      <div className="rules-grid">
        <div className="rule-card">
          <div className="rule-header">
            <div className="rule-icon"><i className="fa-solid fa-file-circle-check"></i></div>
            <div className="rule-title">Minh chứng review</div>
          </div>
          <div className="rule-desc">Bắt buộc có Checklist, danh sách lỗi/góp ý, kết luận Đạt/Đạt có điều kiện/Không đạt, đường dẫn và phiên bản tài nguyên.</div>
        </div>
        
        <div className="rule-card">
          <div className="rule-header">
            <div className="rule-icon"><i className="fa-solid fa-user-shield"></i></div>
            <div className="rule-title">Tính độc lập</div>
          </div>
          <div className="rule-desc">Người review không được phép là người trực tiếp tham gia sản xuất tài nguyên được review.</div>
        </div>
        
        <div className="rule-card">
          <div className="rule-header">
            <div className="rule-icon"><i className="fa-solid fa-rotate-left"></i></div>
            <div className="rule-title">Re-review</div>
          </div>
          <div className="rule-desc">Ghi nhận 50% thời gian của review lần đầu (tối thiểu 15 phút). Không tạo Task Type riêng trong Master.</div>
        </div>
        
        <div className="rule-card">
          <div className="rule-header">
            <div className="rule-icon"><i className="fa-solid fa-person-chalkboard"></i></div>
            <div className="rule-title">Giảng dạy & KT đầu giờ</div>
          </div>
          <div className="rule-desc">Lý thuyết, thực hành, mini-project và chấm KT đầu giờ đều tính 120 phút/buổi/lớp.</div>
        </div>
        
        <div className="rule-card">
          <div className="rule-header">
            <div className="rule-icon"><i className="fa-solid fa-user-tie"></i></div>
            <div className="rule-title">Rank 6-8 & Rank 0</div>
          </div>
          <div className="rule-desc">Rank 6-8 không dạy/vận hành lớp nhưng vẫn review chuyên môn. Rank 0 làm công việc khẩn cấp, tự khai báo giờ.</div>
        </div>
        
        <div className="rule-card">
          <div className="rule-header">
            <div className="rule-icon"><i className="fa-solid fa-key"></i></div>
            <div className="rule-title">Tính duy nhất (Key)</div>
          </div>
          <div className="rule-desc">Key được tạo theo cú pháp Role-Rank-TaskType và phải duy nhất trong toàn bộ bảng Master.</div>
        </div>
      </div>

      <div className="doc-card">
        <div className="doc-header"><h3 className="doc-title"><i className="fa-solid fa-list-check"></i> DANH SÁCH TASK TYPE REVIEW</h3></div>
        <div className="doc-body">
          <div className="task-type-grid">
            {taskTypes.map((item, idx) => (
              <div className="task-type-card" key={idx}>
                <div className="tt-header">
                  <span className="tt-title">{item.title}</span>
                  <span className="tt-badge">{item.unit}</span>
                </div>
                <div className="tt-body">
                  <div className="tt-row">
                    <span className="tt-label"><i className="fa-solid fa-magnifying-glass"></i> Nội dung review chính</span>
                    <span className="tt-content">{item.content}</span>
                  </div>
                  <div className="tt-row" style={{ marginTop: 'auto' }}>
                    <span className="tt-label"><i className="fa-solid fa-arrow-right-to-bracket"></i> Điều kiện đầu ra</span>
                    <span className="tt-output">{item.output}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function KpiList() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [rankFilter, setRankFilter] = useState('');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return kpiMasterData.filter(kpi => {
      if (roleFilter && kpi.role !== roleFilter) return false;
      if (rankFilter && String(kpi.rank) !== rankFilter) return false;
      if (q) {
        const haystack = `${kpi.title} ${kpi.taskType} ${kpi.key}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [search, roleFilter, rankFilter]);

  const grouped = useMemo(() => {
    const groups = new Map();
    filtered.forEach(kpi => {
      const groupKey = `${kpi.role}|${kpi.rank}`;
      if (!groups.has(groupKey)) groups.set(groupKey, { role: kpi.role, rank: kpi.rank, items: [] });
      groups.get(groupKey).items.push(kpi);
    });
    return Array.from(groups.values()).sort((a, b) => (a.role === b.role ? a.rank - b.rank : a.role.localeCompare(b.role)));
  }, [filtered]);

  return (
    <div className="kpi-subtab-pane active">
      <div className="kpi-toolbar">
        <div className="search-input-wrapper">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Tìm kiếm công việc (vd: chấm bài, demo)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select className="kpi-select" value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
          <option value="">Tất cả vai trò</option>
          <option value="Trợ giảng">Trợ giảng</option>
          <option value="Giảng viên">Giảng viên</option>
        </select>
        <select className="kpi-select" value={rankFilter} onChange={(e) => setRankFilter(e.target.value)}>
          <option value="">Tất cả Rank</option>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(r => (
            <option key={r} value={r}>Rank {r}</option>
          ))}
        </select>
      </div>

      {grouped.map(group => (
        <div className="doc-card" key={`${group.role}-${group.rank}`}>
          <div className="doc-header">
            <h3 className="doc-title" style={{ color: getRankTextColor(group.rank) }}>
              <i className="fa-solid fa-users-gear"></i> KPI: {group.role} - Rank {group.rank}
            </h3>
          </div>
          <div className="doc-body">
            <div className="kpi-grid">
              {group.items.map(kpi => (
                <div className="kpi-card" style={{ '--card-accent': getRankTextColor(kpi.rank) }} key={kpi.id}>
                  <div className="kpi-card-header">
                    <div className="kpi-badges">
                      <span className="kpi-badge badge-task">{kpi.taskType}</span>
                      <span className={`kpi-badge ${getRankColorClass(kpi.rank)}`}>Rank {kpi.rank}</span>
                    </div>
                  </div>
                  <h4 className="kpi-title">{kpi.title}</h4>
                  <div className="kpi-meta">
                    <span className="kpi-key">{kpi.key}</span>
                    <span className="kpi-time"><i className="fa-solid fa-stopwatch"></i> {kpi.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div style={{ padding: 20, textAlign: 'center', color: 'var(--text-muted)' }}>
          Không tìm thấy KPI nào phù hợp.
        </div>
      )}
    </div>
  );
}

export default function KPIMaster() {
  const [activeSubTab, setActiveSubTab] = useState('tong-quan');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">KPI Master Giảng viên & Trợ giảng</h1>
        <p className="page-desc">Tổng hợp danh sách KPI trực quan dành cho đội ngũ Giảng viên và Trợ giảng Rikkei Education</p>
      </div>

      <div className="kpi-subnav">
        <button
          className={`kpi-subtab-btn ${activeSubTab === 'tong-quan' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('tong-quan')}
        >
          <i className="fa-solid fa-chart-pie"></i> Tổng Quan
        </button>
        <button
          className={`kpi-subtab-btn ${activeSubTab === 'quy-tac' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('quy-tac')}
        >
          <i className="fa-solid fa-scale-balanced"></i> Quy Tắc Áp Dụng
        </button>
        <button
          className={`kpi-subtab-btn ${activeSubTab === 'kpi-list' ? 'active' : ''}`}
          onClick={() => setActiveSubTab('kpi-list')}
        >
          <i className="fa-solid fa-list-check"></i> Tra Cứu KPI
        </button>
      </div>

      {activeSubTab === 'tong-quan' && <TongQuan />}
      {activeSubTab === 'quy-tac' && <QuyTac />}
      {activeSubTab === 'kpi-list' && <KpiList />}
    </div>
  );
}
