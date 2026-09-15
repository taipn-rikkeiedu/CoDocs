import React, { useState, useMemo } from 'react';

function RPointCalculator() {
  const [absence, setAbsence] = useState(5);
  const [homework, setHomework] = useState(10);
  const [elearning, setElearning] = useState(0);
  const [violations, setViolations] = useState(0);
  const [bonusStudy, setBonusStudy] = useState(5);
  const [bonusCadre, setBonusCadre] = useState(0);

  const result = useMemo(() => {
    const absencePercent = parseFloat(absence) || 0;
    const hwIncompletePercent = parseFloat(homework) || 0;
    const elearningOption = parseInt(elearning) || 0;
    const violationOption = parseInt(violations) || 0;
    const bStudy = Math.min(10, Math.max(0, parseFloat(bonusStudy) || 0));
    const bCadre = Math.min(10, Math.max(0, parseFloat(bonusCadre) || 0));

    const scoreAttendance = Math.max(0, 20 - absencePercent * 2);
    const scoreHomework = Math.max(0, 20 - hwIncompletePercent * 2);

    let scoreElearning = 20;
    if (elearningOption === 1) scoreElearning = 15;
    else if (elearningOption === 2) scoreElearning = 10;
    else if (elearningOption >= 3) scoreElearning = 0;

    let scoreViolation = 40;
    if (violationOption === 1) scoreViolation = 30;
    else if (violationOption === 2) scoreViolation = 20;
    else if (violationOption >= 3) scoreViolation = 0;

    const scoreTraining = scoreAttendance + scoreHomework + scoreElearning + scoreViolation;
    const scoreBonus = bStudy + bCadre;
    const totalRPoint = Math.min(120, scoreTraining + scoreBonus);

    const passAttendance = 100 - absencePercent >= 80;
    const passHomework = 100 - hwIncompletePercent >= 80;
    const passElearning = elearningOption < 3;
    const passTotalRP = totalRPoint >= 80;
    const isEligible = passAttendance && passHomework && passElearning && passTotalRP;

    return { totalRPoint, scoreTraining, scoreBonus, passAttendance, passHomework, passElearning, isEligible, absencePercent, hwIncompletePercent, elearningOption };
  }, [absence, homework, elearning, violations, bonusStudy, bonusCadre]);

  return (
    <div className="tool-card">
      <div className="tool-header">
        <div className="tool-icon red-gradient"><i className="fa-solid fa-bullseye"></i></div>
        <div className="tool-title">
          <h3>1. Tính Điểm R-Point & ĐK Thi</h3>
          <p>Chuẩn TB 01/2026 (Thang 120 điểm)</p>
        </div>
      </div>

      <div className="form-group">
        <label>Tỷ lệ nghỉ học (% số buổi):</label>
        <input type="number" value={absence} min="0" max="100" onChange={(e) => setAbsence(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Tỷ lệ chưa hoàn thành BTVN (%):</label>
        <input type="number" value={homework} min="0" max="100" onChange={(e) => setHomework(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Số bài E-learning bị chậm hạn:</label>
        <select value={elearning} onChange={(e) => setElearning(e.target.value)}>
          <option value="0">Không chậm bài nào (Đầy đủ 20đ)</option>
          <option value="1">Chậm 1 bài (Trừ 5đ -&gt; còn 15đ)</option>
          <option value="2">Chậm 2 bài (Trừ 10đ -&gt; còn 10đ)</option>
          <option value="3">Chậm ≥ 3 bài (0đ - CẤM THI)</option>
        </select>
      </div>
      <div className="form-group">
        <label>Vi phạm nội quy học đường:</label>
        <select value={violations} onChange={(e) => setViolations(e.target.value)}>
          <option value="0">Không vi phạm (Đầy đủ 40đ)</option>
          <option value="1">Vi phạm 1 lần (Trừ 10đ -&gt; còn 30đ)</option>
          <option value="2">Vi phạm 2 lần (Trừ 20đ -&gt; còn 20đ)</option>
          <option value="3">Vi phạm ≥ 3 lần (0đ)</option>
        </select>
      </div>
      <div className="form-group">
        <label>Điểm thưởng học tập tích cực (0 - 10đ):</label>
        <input type="number" value={bonusStudy} min="0" max="10" onChange={(e) => setBonusStudy(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Điểm thưởng cán bộ lớp (0 - 10đ):</label>
        <input type="number" value={bonusCadre} min="0" max="10" onChange={(e) => setBonusCadre(e.target.value)} />
      </div>

      <div className="calc-result-box">
        <div className="result-header">
          <span>KẾT QUẢ ĐÁNH GIÁ:</span>
          <span className={`result-badge ${result.isEligible ? 'pass' : 'fail'}`}>
            {result.isEligible ? '✅ ĐỦ ĐIỀU KIỆN DỰ THI' : '❌ MẤT TƯ CÁCH DỰ THI (CẤM THI)'}
          </span>
        </div>
        <div className="result-details">
          <div className="res-item">
            <span className="lbl">Tổng điểm R-Point:</span>
            <span className="val text-blue">{result.totalRPoint.toFixed(1)} / 120 đ</span>
          </div>
          <div className="res-item">
            <span className="lbl">Điểm rèn luyện / thưởng:</span>
            <span className="val">{result.scoreTraining.toFixed(1)}đ rèn luyện + {result.scoreBonus.toFixed(1)}đ thưởng</span>
          </div>
          <div className="res-item">
            <span className="lbl">Điều kiện Chuyên cần:</span>
            <span className={`val ${result.passAttendance ? 'text-green' : 'text-red'}`}>
              {result.passAttendance ? `Đạt (${(100 - result.absencePercent).toFixed(0)}%)` : `Không Đạt (${(100 - result.absencePercent).toFixed(0)}% < 80%)`}
            </span>
          </div>
          <div className="res-item">
            <span className="lbl">Điều kiện BTVN:</span>
            <span className={`val ${result.passHomework ? 'text-green' : 'text-red'}`}>
              {result.passHomework ? `Đạt (${(100 - result.hwIncompletePercent).toFixed(0)}%)` : `Không Đạt (${(100 - result.hwIncompletePercent).toFixed(0)}% < 80%)`}
            </span>
          </div>
          <div className="res-item">
            <span className="lbl">Điều kiện E-learning:</span>
            <span className={`val ${result.passElearning ? 'text-green' : 'text-red'}`}>
              {result.passElearning ? `Đạt (Chậm ${result.elearningOption} bài)` : 'CẤM THI (Chậm ≥ 3 bài)'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CourseGradeCalculator() {
  const [attendance, setAttendance] = useState(10);
  const [quiz, setQuiz] = useState(8.0);
  const [midterm, setMidterm] = useState(75);
  const [finalScore, setFinalScore] = useState(80);

  const result = useMemo(() => {
    const attScore = (parseFloat(attendance) || 0) * 10;
    const quizScore = (parseFloat(quiz) || 0) * 10;
    const midScore = parseFloat(midterm) || 0;
    const finScore = parseFloat(finalScore) || 0;

    const processScore = attScore * 0.5 + quizScore * 0.5;
    const totalScore = processScore * 0.2 + midScore * 0.2 + finScore * 0.6;
    const scale10Score = totalScore / 10;

    let letterGrade = 'F (Trượt môn)';
    let letterClass = 'text-red';
    if (totalScore >= 85) { letterGrade = 'Loại Xuất sắc (A)'; letterClass = 'text-green'; }
    else if (totalScore >= 80) { letterGrade = 'Loại Giỏi (B+)'; letterClass = 'text-green'; }
    else if (totalScore >= 70) { letterGrade = 'Loại Khá (B)'; letterClass = 'text-blue'; }
    else if (totalScore >= 65) { letterGrade = 'Loại Trung bình khá (C+)'; letterClass = 'text-blue'; }
    else if (totalScore >= 50) { letterGrade = 'Loại Trung bình (C - Đạt môn)'; letterClass = 'text-gold'; }

    return { totalScore, scale10Score, letterGrade, letterClass, isPass: totalScore >= 50 };
  }, [attendance, quiz, midterm, finalScore]);

  return (
    <div className="tool-card">
      <div className="tool-header">
        <div className="tool-icon blue-gradient"><i className="fa-solid fa-graduation-cap"></i></div>
        <div className="tool-title">
          <h3>2. Tính Điểm Học Phần PTIT</h3>
          <p>Cơ cấu 20% Quá trình - 20% Giữa kỳ - 60% Cuối kỳ</p>
        </div>
      </div>

      <div className="form-group">
        <label>Điểm Chuyên cần (Hệ 10đ):</label>
        <input type="number" value={attendance} min="0" max="10" step="0.5" onChange={(e) => setAttendance(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Điểm TB Kiểm tra đầu giờ (Hệ 10đ):</label>
        <input type="number" value={quiz} min="0" max="10" step="0.5" onChange={(e) => setQuiz(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Điểm Kiểm tra Giữa môn (Thang 100đ):</label>
        <input type="number" value={midterm} min="0" max="100" onChange={(e) => setMidterm(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Điểm Thi Kết thúc môn (Thang 100đ):</label>
        <input type="number" value={finalScore} min="0" max="100" onChange={(e) => setFinalScore(e.target.value)} />
      </div>

      <div className="calc-result-box">
        <div className="result-header">
          <span>KẾT QUẢ HỌC PHẦN:</span>
          <span className={`result-badge ${result.isPass ? 'pass' : 'fail'}`}>
            {result.isPass ? '✅ ĐẠT HỌC PHẦN (PASS)' : '❌ KHÔNG ĐẠT (PHẢI THI LẠI)'}
          </span>
        </div>
        <div className="result-details">
          <div className="res-item">
            <span className="lbl">Điểm Tổng Kết (Thang 100):</span>
            <span className="val text-blue">{result.totalScore.toFixed(1)} / 100 đ</span>
          </div>
          <div className="res-item">
            <span className="lbl">Điểm Quy Đổi Hệ 10:</span>
            <span className="val">{result.scale10Score.toFixed(2)} / 10.0</span>
          </div>
          <div className="res-item">
            <span className="lbl">Xếp loại học lực:</span>
            <span className={`val ${result.letterClass}`}>{result.letterGrade}</span>
          </div>
          <div className="res-item">
            <span className="lbl">Ghi chú:</span>
            <span className="val">Chuẩn đạt môn là từ 50/100 điểm trở lên.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const RANKS = [
  { rank: 8, name: 'RANK 8 - GV BRAND THỊ TRƯỜNG', minScore: 95, minExp: 5, salary: '35.000.000 VNĐ', allowance: '6.000.000 VNĐ', bonus: '4.000.000 VNĐ' },
  { rank: 7, name: 'RANK 7 - GV BRAND NỘI BỘ', minScore: 92, minExp: 4, salary: '30.000.000 VNĐ', allowance: '5.000.000 VNĐ', bonus: '3.000.000 VNĐ' },
  { rank: 6, name: 'RANK 6 - PM CHƯƠNG TRÌNH', minScore: 88, minExp: 3, salary: '25.000.000 VNĐ', allowance: '4.000.000 VNĐ', bonus: '3.000.000 VNĐ' },
  { rank: 5, name: 'RANK 5 - GV PM MÔN HỌC', minScore: 82, minExp: 2, salary: '20.000.000 VNĐ', allowance: '4.000.000 VNĐ', bonus: '2.000.000 VNĐ' },
  { rank: 4, name: 'RANK 4 - GIẢNG VIÊN CỨNG', minScore: 75, minExp: 1, salary: 'Thỏa thuận theo giờ', allowance: 'Theo lớp', bonus: 'Hiệu quả đào tạo' },
  { rank: 3, name: 'RANK 3 - GV TẬP SỰ', minScore: 65, minExp: 0.6, salary: 'Thỏa thuận', allowance: '-', bonus: '-' },
  { rank: 2, name: 'RANK 2 - TRỢ GIẢNG CỨNG', minScore: 55, minExp: 0.6, salary: 'Thỏa thuận', allowance: '-', bonus: '-' },
  { rank: 1, name: 'RANK 1 - TTS TRỢ GIẢNG', minScore: 40, minExp: 0.2, salary: 'Thỏa thuận', allowance: '-', bonus: '-' },
];

function RankEvaluator() {
  const [exp, setExp] = useState(0.2);
  const [skill, setSkill] = useState(18);
  const [pedagogy, setPedagogy] = useState(18);
  const [results, setResults] = useState(22);
  const [resource, setResource] = useState(16);
  const [dev, setDev] = useState(12);

  const result = useMemo(() => {
    const expVal = parseFloat(exp) || 0;
    const totalScore = (parseFloat(skill) || 0) + (parseFloat(pedagogy) || 0) + (parseFloat(results) || 0) + (parseFloat(resource) || 0) + (parseFloat(dev) || 0);
    const achievedRank = RANKS.find(r => totalScore >= r.minScore && expVal >= r.minExp) || null;
    return { totalScore, achievedRank };
  }, [exp, skill, pedagogy, results, resource, dev]);

  return (
    <div className="tool-card">
      <div className="tool-header">
        <div className="tool-icon gold-gradient"><i className="fa-solid fa-award"></i></div>
        <div className="tool-title">
          <h3>3. Đánh Giá Rank GV - Trợ Giảng</h3>
          <p>Khung 8 cấp bậc Rank & Thu nhập</p>
        </div>
      </div>

      <div className="form-group">
        <label>Kinh nghiệm giảng dạy tại Rikkei Edu:</label>
        <select value={exp} onChange={(e) => setExp(e.target.value)}>
          <option value="0.2">Dưới 6 tháng (TTS Trợ Giảng)</option>
          <option value="0.6">Từ 6 tháng đến dưới 1 năm</option>
          <option value="1">Từ 1 năm đến dưới 2 năm</option>
          <option value="2">Từ 2 năm đến dưới 3 năm</option>
          <option value="3">Từ 3 năm đến dưới 4 năm</option>
          <option value="4">Từ 4 năm đến dưới 5 năm</option>
          <option value="5">Từ 5 năm trở lên</option>
        </select>
      </div>
      <div className="form-group">
        <label>Năng lực Chuyên môn (Tối đa 20đ):</label>
        <input type="number" value={skill} min="0" max="20" onChange={(e) => setSkill(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Kỹ năng Sư phạm (Tối đa 20đ):</label>
        <input type="number" value={pedagogy} min="0" max="20" onChange={(e) => setPedagogy(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Kết quả Lớp học & Tỷ lệ Đỗ (Tối đa 25đ):</label>
        <input type="number" value={results} min="0" max="25" onChange={(e) => setResults(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Đóng góp Học liệu & Tài nguyên (Tối đa 20đ):</label>
        <input type="number" value={resource} min="0" max="20" onChange={(e) => setResource(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Đào tạo nội bộ & Phát triển (Tối đa 15đ):</label>
        <input type="number" value={dev} min="0" max="15" onChange={(e) => setDev(e.target.value)} />
      </div>

      <div className="calc-result-box">
        <div className="result-header">
          <span>CẤP BẬC ĐẠT ĐƯỢC:</span>
          <span className={`result-badge ${result.achievedRank ? 'gold' : 'fail'}`}>
            {result.achievedRank ? result.achievedRank.name : 'CHƯA ĐẠT CHUẨN RANK (DƯỚI 40Đ)'}
          </span>
        </div>
        <div className="result-details">
          <div className="res-item">
            <span className="lbl">Tổng điểm đánh giá:</span>
            <span className="val text-blue">{result.totalScore.toFixed(1)} / 100 đ</span>
          </div>
          <div className="res-item">
            <span className="lbl">Mức lương cứng định mức:</span>
            <span className="val text-green">{result.achievedRank ? result.achievedRank.salary : 'Thỏa thuận'}</span>
          </div>
          <div className="res-item">
            <span className="lbl">Phụ cấp trách nhiệm:</span>
            <span className="val">{result.achievedRank ? result.achievedRank.allowance : '-'}</span>
          </div>
          <div className="res-item">
            <span className="lbl">Thưởng hiệu quả / lớp:</span>
            <span className="val">{result.achievedRank ? result.achievedRank.bonus : '-'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LateFeeCalculator() {
  const [shift, setShift] = useState('800');
  const [time, setTime] = useState('08:12');

  const result = useMemo(() => {
    if (!time) return null;
    const [hours, minutes] = time.split(':').map(Number);
    const arrivalMinutes = hours * 60 + minutes;

    let shiftStartMinutes = 8 * 60;
    let graceCutoffMinutes = 8 * 60 + 15;
    if (shift === '700') {
      shiftStartMinutes = 7 * 60;
      graceCutoffMinutes = 7 * 60 + 15;
    } else if (shift === '830') {
      shiftStartMinutes = 8 * 60 + 30;
      graceCutoffMinutes = 8 * 60 + 45;
    }

    if (arrivalMinutes <= shiftStartMinutes) {
      return {
        status: 'pass', badgeText: '✅ ĐÚNG GIỜ / ĐẾN SỚM',
        minutes: '0 phút', compensate: 'Không cần làm bù', fine: '0 VNĐ',
        rule: 'Chấp hành đúng giờ làm việc chuẩn theo văn hóa Rikkei Education.',
      };
    }

    const lateMinutes = arrivalMinutes - shiftStartMinutes;
    const isBefore15m = arrivalMinutes <= graceCutoffMinutes;
    const blocks = Math.ceil(lateMinutes / 5);
    const fineAmount = blocks * 20000;
    const compensateMinutes = lateMinutes * 2;
    const minutesText = `${lateMinutes} phút (${blocks} block 5 phút)`;

    if (isBefore15m) {
      return {
        status: 'warn', badgeText: '⚠️ ĐI MUỘN DƯỚI 15 PHÚT',
        minutes: minutesText,
        compensate: `Làm bù ${compensateMinutes} phút (x2) cuối ngày`,
        fine: `${fineAmount.toLocaleString('vi-VN')} VNĐ (Phương án thay thế)`,
        rule: 'Đi muộn dưới 15p: Được chọn làm bù x2 HOẶC nộp phạt 20k/mỗi 5 phút.',
      };
    }
    return {
      status: 'fail', badgeText: '🛑 ĐI MUỘN TRÊN 15 PHÚT',
      minutes: minutesText,
      compensate: 'KHÔNG ĐƯỢC LÀM BÙ',
      fine: `${fineAmount.toLocaleString('vi-VN')} VNĐ (Bắt buộc)`,
      rule: 'Đi muộn quá 15 phút không được áp dụng làm bù, bắt buộc nộp phạt 20k/mỗi 5 phút.',
    };
  }, [shift, time]);

  return (
    <div className="tool-card">
      <div className="tool-header">
        <div className="tool-icon purple-gradient"><i className="fa-solid fa-clock"></i></div>
        <div className="tool-title">
          <h3>4. Tính Phạt Đi Muộn & Làm Bù</h3>
          <p>Khung chế tài 20k/5p & Làm bù x2</p>
        </div>
      </div>

      <div className="form-group">
        <label>Khung ca làm việc:</label>
        <select value={shift} onChange={(e) => setShift(e.target.value)}>
          <option value="800">08h00 – 17h30 (Khối BO / Văn phòng)</option>
          <option value="700">07h00 – 16h00 (Khối Đào tạo)</option>
          <option value="830">08h30 – 18h00 (Mùa Hè - Thu)</option>
        </select>
      </div>
      <div className="form-group">
        <label>Giờ bạn có mặt (Chấm công):</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>

      {result && (
        <div className="calc-result-box">
          <div className="result-header">
            <span>TRẠNG THÁI:</span>
            <span className={`result-badge ${result.status}`}>{result.badgeText}</span>
          </div>
          <div className="result-details">
            <div className="res-item">
              <span className="lbl">Số phút muộn:</span>
              <span className="val text-red">{result.minutes}</span>
            </div>
            <div className="res-item">
              <span className="lbl">Phương án 1 (Làm bù x2):</span>
              <span className="val text-green">{result.compensate}</span>
            </div>
            <div className="res-item">
              <span className="lbl">Phương án 2 (Nộp phạt):</span>
              <span className="val text-red">{result.fine}</span>
            </div>
            <div className="res-item">
              <span className="lbl">Quy tắc áp dụng:</span>
              <span className="val">{result.rule}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Tools() {
  const [search, setSearch] = useState('');
  
  const q = search.trim().toLowerCase();
  
  const showRPoint = !q || 'tính điểm r-point & đk thi'.includes(q) || 'rpoint'.includes(q);
  const showGrade = !q || 'tính điểm học phần ptit'.includes(q) || 'grade'.includes(q) || 'điểm'.includes(q);
  const showRank = !q || 'đánh giá rank gv - trợ giảng'.includes(q) || 'rank'.includes(q);
  const showLate = !q || 'tính phạt đi muộn & làm bù'.includes(q) || 'phạt'.includes(q) || 'muộn'.includes(q) || 'late'.includes(q);

  return (
    <section className="page-container">
      <div className="section-title-wrap" style={{ marginTop: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="section-title"><i className="fa-solid fa-calculator"></i> BỘ 4 CÔNG CỤ TÍNH TOÁN & TRA CỨU TỰ ĐỘNG</div>
        
        <div className="local-toolbar" style={{ margin: 0, padding: '8px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fa-solid fa-magnifying-glass" style={{ color: 'var(--text-muted)' }}></i>
            <input 
              type="text" 
              className="local-search-input" 
              placeholder="Tìm công cụ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="tools-grid">
        {showRPoint && <RPointCalculator />}
        {showGrade && <CourseGradeCalculator />}
        {showRank && <RankEvaluator />}
        {showLate && <LateFeeCalculator />}
      </div>
      
      {(!showRPoint && !showGrade && !showRank && !showLate) && (
        <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
          Không tìm thấy công cụ nào phù hợp với từ khóa "{search}".
        </div>
      )}
    </section>
  );
}
