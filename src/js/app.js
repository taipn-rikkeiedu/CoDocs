/* ==========================================================================
       DATA DICTIONARY: FULL STRUCTURED VISUAL DATA FOR 7 OFFICIAL DOCUMENTS
       ========================================================================== */
    const rawDocsData = {
      'onboarding-pdf': {
        id: 'onboarding-pdf',
        title: 'Sổ Tay Onboarding & Hội Nhập Nhân Sự 2026',
        code: 'RE-OB-03',
        type: 'PDF',
        size: '30.2 MB',
        pages: '41 trang',
        orig_file: 'Onboarding Rikkei Education 2026.pdf',
        desc: 'Tài liệu đào tạo hội nhập toàn diện dành cho nhân sự mới, giới thiệu hệ sinh thái Rikkeisoft, Rikkei Education, cơ chế chính sách nhân sự, văn hóa 5T - 7C - 5S và lộ trình Newbie.',
        chapters: [
          {
            title: 'Chương 1: Tổng Quan Tập Đoàn Rikkeisoft & Ban Lãnh Đạo',
            icon: 'fa-building-flag',
            content: `
              <div class="v-callout blue">
                <b>Thành lập năm 2012:</b> Rikkeisoft đã vươn lên trở thành một trong những tập đoàn công nghệ hàng đầu Việt Nam với hơn 10 năm phát triển, cung cấp dịch vụ CNTT cho các thị trường lớn tại Mỹ, Châu Âu, Nhật Bản và Châu Á - Thái Bình Dương.
              </div>
              <h4 style="margin: 12px 0 6px;">Ban Điều Hành Rikkeisoft:</h4>
              <ul style="padding-left: 18px; margin-bottom: 12px;">
                <li><b>Tạ Sơn Tùng (1988):</b> Chủ tịch Hội đồng Quản trị (Chủ tịch HĐQT)</li>
                <li><b>Đặng Thái Hòa (1988):</b> Tổng Giám đốc Rikkeisoft</li>
                <li><b>Phan Thế Dũng (1989):</b> Phó Chủ tịch Cấp cao</li>
                <li><b>Bùi Quang Huy (1988):</b> Giám đốc Rikkei Japan</li>
                <li><b>Bùi Hoàng Tùng (1977):</b> Giám đốc Rikkei Tech (Hoa Kỳ)</li>
                <li><b>Nguyễn Quang Kỷ (1989):</b> Giám đốc Rikkei Thái Lan</li>
              </ul>
              <h4 style="margin: 12px 0 6px;">Hệ Sinh Thái 9 Đơn Vị Thành Viên:</h4>
              <p>Rikkeisoft, Rikkei Education, RKTech (Mỹ), Rikkei Japan, Rikkei Korea, Rikkei Thailand, Rikkei Digital, Rikkei AI, Rikkei Venture Builder.</p>
            `
          },
          {
            title: 'Chương 2: Hệ Sinh Thái Đào Tạo Rikkei Education & Giá Trị Cốt Lõi 5T',
            icon: 'fa-graduation-cap',
            content: `
              <div class="v-callout red">
                <b>Sứ mệnh:</b> Đào tạo và phát triển nguồn nhân lực công nghệ thông tin và ngôn ngữ chất lượng cao, phục vụ thị trường toàn cầu.
              </div>
              <h4 style="margin: 12px 0 6px;">Ban Điều Hành Rikkei Education:</h4>
              <ul style="padding-left: 18px; margin-bottom: 12px;">
                <li><b>Nguyễn Viết Lâm:</b> Phó TGĐ Rikkeisoft, Tổng Giám đốc Rikkei Education</li>
                <li><b>Trịnh Khắc Linh:</b> Phó Giám đốc Rikkei Education, Giám đốc Rikkei Academy</li>
                <li><b>Nguyễn Hương Giang:</b> Phó Giám đốc Rikkei Education, Giám đốc Mankai Academy</li>
                <li><b>Nguyễn Quy Quang:</b> Phó Giám đốc, Giám đốc Đào tạo Rikkei Education</li>
                <li><b>Đào Trọng Hiếu:</b> Phó Giám đốc RKTsunagu</li>
              </ul>
              <h4 style="margin: 12px 0 6px;">Giá Trị Cốt Lõi 5T:</h4>
              <p><b>1. Tin cậy</b> (Chuẩn mực đào tạo cao nhất) | <b>2. Tận tâm</b> (Lấy học viên làm trọng tâm) | <b>3. Thực tiễn</b> (Dự án thực tế) | <b>4. Thích ứng</b> (Đổi mới liên tục) | <b>5. Tinh gọn</b> (Tối ưu lộ trình hiệu quả).</p>
            `
          },
          {
            title: 'Chương 3: Quy Định Về Thời Gian Làm Việc, Đi Muộn & Bổ Sung Công',
            icon: 'fa-clock',
            content: `
              <table class="data-table" style="margin: 10px 0;">
                <thead><tr><th>Khối</th><th>Giờ làm việc</th><th>Nghỉ trưa</th><th>Chế tài đi muộn</th></tr></thead>
                <tbody>
                  <tr><td><b>Khối Đào tạo</b></td><td>07h00 - 16h00</td><td>11h30 - 13h00</td><td>Trước 07h15: Làm bù x2 hoặc phạt 20k/5p.<br>Sau 07h15: Phạt 20k/5p (CẤM BÙ).</td></tr>
                  <tr><td><b>Khối BO / VP</b></td><td>08h00 - 17h30</td><td>12h00 - 13h30</td><td>Trước 08h15: Làm bù x2 hoặc phạt 20k/5p.<br>Sau 08h15: Phạt 20k/5p (CẤM BÙ).</td></tr>
                </tbody>
              </table>
              <div class="v-callout gold">
                <b>📌 Quy trình Bổ sung công 4 bước:</b> (1) Báo Leader ➔ (2) Tạo đơn trên Lark trong vòng 3 ngày ➔ (3) Kiểm tra lại bảng công ➔ (4) Phòng Nhân sự phê duyệt.
              </div>
            `
          },
          {
            title: 'Chương 4: Chế Độ Phúc Lợi, Nghỉ Phép & Kỳ Trả Lương',
            icon: 'fa-money-bill-wave',
            content: `
              <ul style="padding-left: 18px; line-height: 1.7;">
                <li><b>Kỳ trả lương:</b> Ngày <b>mùng 5 hàng tháng</b> qua tài khoản ngân hàng <b>ACB</b>. (Nhân sự thử việc làm ≥ 10 công nhận trong kỳ lương gần nhất).</li>
                <li><b>Nghỉ phép năm:</b> 12 ngày phép/năm cho nhân sự đủ 12 tháng. Phép năm chưa dùng hết được dồn tối đa 12 ngày sang năm sau, hạn dùng đến <b>30/06</b>.</li>
                <li><b>Tháng lương 13:</b> Nhân sự làm đủ ≥ 12 tháng hưởng 1 tháng lương bình quân.</li>
                <li><b>Đãi ngộ khác:</b> Khám sức khỏe định kỳ hàng năm, Teambuilding, Year End Party, Sinh nhật công ty.</li>
              </ul>
            `
          },
          {
            title: 'Chương 5: Văn Hóa Doanh Nghiệp - 7C Giao Tiếp & 5S Nơi Làm Việc',
            icon: 'fa-heart',
            content: `
              <p><b>7C trong Giao tiếp:</b> Clear (Rõ ràng), Concise (Ngắn gọn), Concrete (Cụ thể), Correct (Chính xác), Coherent (Chặt chẽ), Complete (Đầy đủ), Courteous (Lịch sự).</p>
              <p style="margin-top: 8px;"><b>Quy tắc 5S:</b> Seiri (Sàng lọc) ➔ Seiton (Sắp xếp) ➔ Seiso (Sạch sẽ) ➔ Seiketsu (Săn sóc) ➔ Shitsuke (Sẵn sàng).</p>
            `
          },
          {
            title: 'Chương 6: Hành Trình Hội Nhập Của Nhân Sự Mới (Newbie Journey)',
            icon: 'fa-user-check',
            content: `
              <div class="v-flow-step-bar">
                <span class="v-step-pill"><span class="step-idx">1</span> Làm quen Lark</span>
                <i class="fa-solid fa-arrow-right v-step-arrow"></i>
                <span class="v-step-pill"><span class="step-idx">2</span> Gia nhập Group</span>
                <i class="fa-solid fa-arrow-right v-step-arrow"></i>
                <span class="v-step-pill"><span class="step-idx">3</span> Đăng ký vé xe</span>
                <i class="fa-solid fa-arrow-right v-step-arrow"></i>
                <span class="v-step-pill"><span class="step-idx">4</span> Thi Quiz Onboarding</span>
              </div>
              <div class="v-callout green">
                <b>Chuẩn thi Quiz Onboarding:</b> Thực tập sinh (TTS) yêu cầu đạt <b>6/6 điểm</b>; Nhân viên thử việc yêu cầu đạt từ <b>12/14 điểm trở lên</b>.
              </div>
            `
          }
        ]
      },

      'khao-thi-md': {
        id: 'khao-thi-md',
        title: 'Quy Trình Khảo Thí PTIT (13 Điều & 11 Phụ Lục)',
        code: 'RE-KT-01',
        type: 'MD',
        size: '55.6 KB',
        pages: '938 dòng',
        orig_file: 'QUY TRÌNH KHẢO THÍ PTIT ĐANG THỰC THI.md',
        desc: 'Văn bản quy định quản lý hoạt động khảo thí chương trình đào tạo liên kết giữa Học viện CNBCVT (PTIT) và Rikkeisoft cùng 11 phụ lục nghiệp vụ chi tiết.',
        chapters: [
          {
            title: 'Phần I: 13 Điều Quy Định Quản Lý Hoạt Động Khảo Thí',
            icon: 'fa-gavel',
            content: `
              <ul style="padding-left: 18px; line-height: 1.7;">
                <li><b>Điều 1 - 3:</b> Mục đích, phạm vi và đối tượng áp dụng (QLĐT, Giảng viên, Trợ giảng, Cán bộ khảo thí, Sinh viên).</li>
                <li><b>Điều 4:</b> 6 nguyên tắc cốt lõi: Khách quan, chuẩn đầu ra, bảo mật đề thi, phân công rõ trách nhiệm, lưu trữ hồ sơ, ứng dụng công nghệ RAIA.</li>
                <li><b>Điều 5 - 6:</b> Nội dung công tác khảo thí và kế hoạch tổ chức kiểm tra thi.</li>
                <li><b>Điều 7:</b> Trách nhiệm của các bên: QLĐT, Trưởng bộ môn, Giảng viên, Cán bộ coi thi, Cán bộ giám sát, Cán bộ chấm thi.</li>
                <li><b>Điều 8:</b> Quy trình 3 bước công bố điểm: GV duyệt điểm ➔ GĐ Đào tạo phê duyệt ➔ QLĐT công bố điểm cho sinh viên.</li>
                <li><b>Điều 9 - 10:</b> Quyền phúc khảo và quy định tổ chức thi bổ sung / thi lại.</li>
                <li><b>Điều 11 - 13:</b> Khen thưởng, xử lý vi phạm kỷ luật và điều khoản thi hành.</li>
              </ul>
            `
          },
          {
            title: 'Phụ Lục 1: Đánh Giá Học Phần & Quy Chế R-Point',
            icon: 'fa-chart-pie',
            content: `
              <p><b>Cơ cấu điểm:</b> Quá trình 20% + Giữa kỳ 20% + Cuối kỳ 60%. Chuẩn qua môn: <b>≥ 50/100 điểm</b>.</p>
              <p style="margin-top: 8px;"><b>4 Điều kiện dự thi R-Point:</b> R-Point ≥ 80/120đ, Chuyên cần ≥ 80%, BTVN ≥ 80%, Chậm E-learning ≤ 3 bài.</p>
            `
          },
          {
            title: 'Phụ Lục 2: Công Tác Ra Đề Thi & Bảo Mật Tuyệt Đối',
            icon: 'fa-lock',
            content: `
              <div class="v-flow-step-bar">
                <span class="v-step-pill"><span class="step-idx">T-15</span> Phân công CB ra đề</span>
                <i class="fa-solid fa-arrow-right v-step-arrow"></i>
                <span class="v-step-pill"><span class="step-idx">T-7</span> Soạn & Rà soát đề</span>
                <i class="fa-solid fa-arrow-right v-step-arrow"></i>
                <span class="v-step-pill"><span class="step-idx">T-3</span> Bàn giao đề chính thức</span>
                <i class="fa-solid fa-arrow-right v-step-arrow"></i>
                <span class="v-step-pill"><span class="step-idx">T-1h</span> Gán đề vào phần mềm RAIA</span>
              </div>
              <div class="v-callout red">
                <b>Bảo mật đề thi:</b> Đề thi thuộc danh mục tài liệu mật. Tuyệt đối không gửi qua email cá nhân hoặc mạng xã hội. Vi phạm sẽ bị xử lý kỷ luật nghiêm khắc.
              </div>
            `
          },
          {
            title: 'Phụ Lục 3 - 4: Quy Trình Tổ Chức Thi Giữa Kỳ & Cuối Kỳ',
            icon: 'fa-list-check',
            content: `
              <ul style="padding-left: 18px; line-height: 1.7;">
                <li>Cán bộ coi thi có mặt trước 15 phút, kiểm tra danh sách và đối chiếu CCCD.</li>
                <li>Hướng dẫn sinh viên mở phần mềm chống gian lận RAIA trước khi làm bài.</li>
                <li><b>Thời hạn chấm thi:</b> Hình thức thi Dự án / Vấn đáp cập nhật điểm trong vòng <b>01 ngày</b>; Hình thức Tự luận cập nhật trong vòng <b>05 ngày làm việc</b>.</li>
                <li>Giảng viên kiểm duyệt kết quả trong vòng <b>07 ngày làm việc</b>.</li>
              </ul>
            `
          },
          {
            title: 'Phụ Lục 5 - 6: Quy Trình Phúc Khảo & Lệ Phí Thi Lại',
            icon: 'fa-money-bill-transfer',
            content: `
              <table class="data-table">
                <thead><tr><th>Nội dung</th><th>Thời hạn / Mức phí</th><th>Quy định chi tiết</th></tr></thead>
                <tbody>
                  <tr><td><b>Phúc khảo điểm</b></td><td>Tối đa <b>05 ngày làm việc</b></td><td>Sinh viên gửi đơn online qua Lark form + nộp bản cứng tại phòng QLĐT.</td></tr>
                  <tr><td><b>Lệ phí thi lại</b></td><td><b>300.000 VNĐ / lần / môn</b></td><td>Áp dụng khi điểm học phần &lt; 50đ hoặc vắng thi không có lý do.</td></tr>
                  <tr><td><b>Miễn lệ phí thi lại</b></td><td><b>0 VNĐ (Miễn phí)</b></td><td>Có đơn xin hoãn thi nộp trước ≥ 3 ngày hoặc gặp sự cố kỹ thuật có biên bản.</td></tr>
                </tbody>
              </table>
            `
          },
          {
            title: 'Phụ Lục 7 - 11: Ngoại Ngữ, Xử Lý Sự Cố & Chế Độ Họp',
            icon: 'fa-language',
            content: `
              <ul style="padding-left: 18px; line-height: 1.7;">
                <li><b>Tiếng Nhật Riki:</b> Điểm đạt môn ≥ 70/100đ, tỷ lệ chuyên cần Offline đạt &gt; 90%.</li>
                <li><b>Tiếng Anh Jaxtina:</b> Điểm đạt môn ≥ 60/100đ.</li>
                <li><b>Lưu trữ hồ sơ:</b> Dữ liệu điểm lưu trữ tối thiểu <b>05 năm</b>, bài thi tự luận lưu trữ <b>02 năm</b>.</li>
                <li><b>Chế độ họp:</b> Họp định kỳ vào <b>tuần thứ 2 hàng tháng</b> (30 phút); Họp khẩn cấp triệu tập ngay khi có sự cố lộ đề hoặc lỗi hệ thống.</li>
              </ul>
            `
          }
        ]
      },

      'rank-gvtg-xlsx': {
        id: 'rank-gvtg-xlsx',
        title: 'Khung Tiêu Chí Xếp Loại 8 Rank GV & Trợ Giảng',
        code: 'RE-HR-02',
        type: 'XLSX',
        size: '17.3 KB',
        pages: '8 Rank & 5 Nhóm năng lực',
        orig_file: '[RE] Tiêu chí xếp loại Rank GV_TG.xlsx',
        desc: 'Bảng ma trận đánh giá chi tiết 8 cấp bậc Rank dành cho Giảng viên và Trợ giảng, quy định mức lương cứng định mức 20M - 35M+, phụ cấp trách nhiệm và barem chấm điểm.',
        chapters: [
          {
            title: 'Cấu Trúc 5 Nhóm Tiêu Chí Đánh Giá (Tổng 100 Điểm)',
            icon: 'fa-chart-simple',
            content: `
              <table class="data-table">
                <thead><tr><th>Nhóm tiêu chí</th><th>Điểm tối đa</th><th>Nội dung đánh giá trọng tâm</th></tr></thead>
                <tbody>
                  <tr><td><b>1. Năng lực Chuyên môn</b></td><td>20 điểm</td><td>Bằng cấp, chứng chỉ quốc tế, kinh nghiệm dự án thực tế doanh nghiệp.</td></tr>
                  <tr><td><b>2. Kỹ năng Sư phạm</b></td><td>20 điểm</td><td>Phương pháp truyền đạt, quản trị lớp học, tương tác và giải đáp thắc mắc.</td></tr>
                  <tr><td><b>3. Kết quả Lớp học</b></td><td>25 điểm</td><td>Tỷ lệ sinh viên qua môn, tỷ lệ giữ chân sinh viên, feedback đánh giá từ học viên.</td></tr>
                  <tr><td><b>4. Đóng góp Học liệu</b></td><td>20 điểm</td><td>Xây dựng slide, ngân hàng câu hỏi, đề thi, giáo trình và tài nguyên môn học.</td></tr>
                  <tr><td><b>5. Đào tạo & Phát triển</b></td><td>15 điểm</td><td>Tham gia đào tạo nội bộ, nghiên cứu công nghệ mới, hướng dẫn trợ giảng.</td></tr>
                </tbody>
              </table>
            `
          },
          {
            title: 'Chi Tiết 8 Cấp Bậc Rank & Chế Độ Thu Nhập',
            icon: 'fa-trophy',
            content: `
              <table class="data-table">
                <thead><tr><th>Rank</th><th>Chức danh</th><th>Tổng điểm</th><th>Điểm chặn bắt buộc</th><th>Lương cứng</th><th>Phụ cấp + Thưởng</th></tr></thead>
                <tbody>
                  <tr><td><b>Rank 1</b></td><td>TTS Trợ Giảng</td><td>≥ 40đ</td><td>Tiêu chí khác ≥ 5/10</td><td>Thỏa thuận</td><td>-</td></tr>
                  <tr><td><b>Rank 2</b></td><td>Trợ Giảng Cứng</td><td>≥ 55đ</td><td>Tiêu chí khác ≥ 7/10</td><td>Thỏa thuận</td><td>-</td></tr>
                  <tr><td><b>Rank 3</b></td><td>GV Tập Sự</td><td>≥ 65đ</td><td>Sư phạm ≥ 12/20</td><td>Thỏa thuận</td><td>-</td></tr>
                  <tr><td><b>Rank 4</b></td><td>Giảng Viên Cứng</td><td>≥ 75đ</td><td>Kết quả lớp ≥ 14/25</td><td>Thỏa thuận</td><td>-</td></tr>
                  <tr><td><b>Rank 5</b></td><td>GV PM Môn Học</td><td>≥ 82đ</td><td>Tài nguyên ≥ 12/20</td><td><b>20.000.000đ</b></td><td>4.000.000đ + 2.000.000đ</td></tr>
                  <tr><td><b>Rank 6</b></td><td>PM Chương Trình</td><td>≥ 88đ</td><td>Tiêu chí khác ≥ 7/10</td><td><b>25.000.000đ</b></td><td>4.000.000đ + 3.000.000đ</td></tr>
                  <tr><td><b>Rank 7</b></td><td>GV Brand Nội Bộ</td><td>≥ 92đ</td><td>Kết quả lớp ≥ 18/25</td><td><b>30.000.000đ</b></td><td>5.000.000đ + 3.000.000đ</td></tr>
                  <tr><td><b>Rank 8</b></td><td>GV Brand Thị Trường</td><td>≥ 95đ</td><td>Tiêu chí khác ≥ 9/10</td><td><b>35.000.000đ</b></td><td>6.000.000đ + 4.000.000đ</td></tr>
                </tbody>
              </table>
            `
          }
        ]
      },

      'lark-pdf': {
        id: 'lark-pdf',
        title: 'Cẩm Nang Sử Dụng Lark Suite 2026',
        code: 'RE-LK-04',
        type: 'PDF',
        size: '3.5 MB',
        pages: '13 trang',
        orig_file: 'Cẩm nang sử dụng Lark .pdf',
        desc: 'Tài liệu hướng dẫn thao tác chi tiết 6 Module số hóa Lark Suite: Đăng nhập QR, Chấm công định vị, Bổ sung công tách ca, Lên lịch Calendar, Phê duyệt Approval và Họp trực tuyến Meetings.',
        chapters: [
          {
            title: 'Module 1: Đăng Nhập & Bảo Mật Tài Khoản',
            icon: 'fa-key',
            content: `<p>Đăng nhập bằng tài khoản email công ty Rikkei Education. Sử dụng tính năng quét mã QR từ App điện thoại sang Máy tính để đăng nhập tức thì.</p>`
          },
          {
            title: 'Module 2: Lark Messenger - Chuẩn Mực Giao Tiếp',
            icon: 'fa-comments',
            content: `<p>Sử dụng tính năng Pin tin nhắn quan trọng, trả lời theo Thread để tránh trôi thông tin, gắn thẻ @ đúng người và định dạng code block khi gửi mã nguồn.</p>`
          },
          {
            title: 'Module 3: Lark Calendar - Lên Lịch Họp Thông Minh',
            icon: 'fa-calendar-check',
            content: `<p>Tự động tra cứu thời gian rảnh của đồng nghiệp, đặt phòng họp thông minh và tự động đính kèm liên kết phòng họp Lark Meetings.</p>`
          },
          {
            title: 'Module 4: Attendance & Approval - Chấm Công & Phép',
            icon: 'fa-fingerprint',
            content: `
              <div class="v-callout green">
                <b>Chấm công Xanh:</b> Chấm công đúng giờ cả 2 ca (sáng và chiều) tại văn phòng.
              </div>
              <div class="v-callout red">
                <b>Đơn bổ sung công tách ca:</b> Nếu quên chấm 1 ca, bắt buộc tách thành 2 đơn riêng. Nộp trong vòng 3 ngày làm việc.
              </div>
            `
          },
          {
            title: 'Module 5 & 6: Lark Docs, Lark Base & Meetings',
            icon: 'fa-video',
            content: `<p>Cộng tác soạn thảo văn bản thời gian thực trên Lark Docs, quản lý tiến độ dự án trên Lark Base và họp trực tuyến với tính năng Magic Share.</p>`
          }
        ]
      },

      'phong-thi-pdf': {
        id: 'phong-thi-pdf',
        title: 'Nội Quy Phòng Thi & Xử Lý Kỷ Luật',
        code: 'RE-EX-05',
        type: 'PDF',
        size: '158 KB',
        pages: '4 trang',
        orig_file: 'NỘI QUY PHÒNG THI.pdf',
        desc: 'Quy định các nghĩa vụ bắt buộc của thí sinh trong phòng thi, danh mục các vật dụng bị cấm tuyệt đối và thang 4 mức kỷ luật xử lý vi phạm gian lận thi cử.',
        chapters: [
          {
            title: 'Nghĩa Vụ Của Thí Sinh & Danh Mục Cấm',
            icon: 'fa-ban',
            content: `
              <ul style="padding-left: 18px; line-height: 1.7;">
                <li>Có mặt trước giờ thi 15 phút, xuất trình CCCD hoặc thẻ sinh viên.</li>
                <li>Ngồi đúng vị trí số báo danh, kiểm tra tình trạng đề thi trước khi làm bài.</li>
                <li><b>Danh mục CẤM:</b> Điện thoại di động, đồng hồ thông minh, tai nghe bluetooth, tài liệu ngoài, ứng dụng AI (ChatGPT, Copilot...).</li>
              </ul>
            `
          },
          {
            title: '4 Mức Chế Tài Xử Lý Kỷ Luật Leo Thang',
            icon: 'fa-shield-halved',
            content: `
              <p><b>1. Nhắc nhở:</b> Lần đầu nhìn bài, mất trật tự (0% trừ điểm).</p>
              <p><b>2. Khiển trách:</b> Tái phạm sau nhắc nhở (Trừ 25% điểm bài thi).</p>
              <p><b>3. Cảnh cáo:</b> Mở tài liệu, trao đổi bài (Trừ 50% điểm bài thi).</p>
              <p><b>4. Đình chỉ thi:</b> Dùng điện thoại, dùng ChatGPT/AI, nhờ thi hộ ➔ <b>Điểm 0, HỦY KẾT QUẢ, CẤM THI LẠI</b>.</p>
            `
          }
        ]
      },

      'sinh-vien-jpg': {
        id: 'sinh-vien-jpg',
        title: '10 Điều Nội Quy Sinh Viên Rikkei Education',
        code: 'RE-ST-06',
        type: 'JPG',
        size: '283 KB',
        pages: '1 Ảnh Infographic',
        orig_file: 'Nội quy sinh viên.jpg',
        desc: '10 quy tắc vàng chuẩn mực đạo đức, tác phong học tập, giữ gìn vệ sinh chung, bảo mật thông tin và tinh thần đồng đội dành cho toàn bộ sinh viên Rikkei Education.',
        chapters: [
          {
            title: '10 Điều Quy Chuẩn Hành Vi Học Đường',
            icon: 'fa-list-ol',
            content: `
              <ol style="padding-left: 18px; line-height: 1.8;">
                <li><b>Đúng giờ:</b> Đến lớp trước 5 phút. Đi muộn quá 15 phút không được vào lớp.</li>
                <li><b>Trang phục & Thẻ:</b> Lịch sự, gọn gàng, luôn đeo thẻ sinh viên.</li>
                <li><b>Tác phong:</b> Nghiêm túc, không chơi game, không làm việc riêng trong giờ.</li>
                <li><b>Vệ sinh:</b> Không ăn uống trong phòng máy, bỏ rác đúng nơi quy định.</li>
                <li><b>Tài sản:</b> Bảo vệ máy tính, thiết bị; tắt điện và máy khi ra về.</li>
                <li><b>Văn hóa giao tiếp:</b> Lễ phép với thầy cô, hòa đồng với bạn bè.</li>
                <li><b>Trung thực:</b> Không gian lận, không sao chép code đồ án của người khác.</li>
                <li><b>Bảo mật:</b> Không chia sẻ tài khoản LMS hoặc tài liệu học tập ra ngoài.</li>
                <li><b>An toàn:</b> Tuyệt đối không mang chất cấm, chất cháy nổ vào trường.</li>
                <li><b>Đồng đội:</b> Hăng hái làm việc nhóm và hỗ trợ bạn học cùng tiến bộ.</li>
              </ol>
            `
          }
        ]
      },

      'rpoint-pdf': {
        id: 'rpoint-pdf',
        title: 'Quy Định Điểm R-Point Mới Nhất (TB 01/2026)',
        code: 'RE-RP-07',
        type: 'PDF',
        size: '279 KB',
        pages: '5 trang',
        orig_file: 'TBBS VV Cập nhật phụ lục 1_TB01.2026.pdf',
        desc: 'Thông báo cập nhật phụ lục 1 quy chế điểm R-Point: Công thức tính điểm rèn luyện (100đ) và điểm thưởng (20đ), 4 điều kiện dự thi bắt buộc và cơ chế phúc khảo.',
        chapters: [
          {
            title: 'Cơ Chế Điểm R-Point & 4 Cánh Cổng Dự Thi',
            icon: 'fa-bullseye',
            content: `
              <div class="v-callout red">
                <b>Bắt buộc đạt đồng thời cả 4 điều kiện:</b>
                <br>1. Tổng điểm R-Point ≥ 80 / 120 điểm.
                <br>2. Tỷ lệ chuyên cần ≥ 80% (Nghỉ 1% trừ 2đ).
                <br>3. Tỷ lệ hoàn thành BTVN ≥ 80% (Thiếu 1% trừ 2đ).
                <br>4. Chậm E-learning ≤ 3 bài (Chậm ≥ 3 bài: 0đ & CẤM THI).
              </div>
            `
          },
          {
            title: 'Bảng Khung Trừ Điểm Rèn Luyện & Cộng Thưởng',
            icon: 'fa-table-cells',
            content: `
              <p><b>Điểm rèn luyện (100đ):</b> Chuyên cần (20đ) + BTVN (20đ) + E-learning (20đ) + Nội quy (40đ).</p>
              <p style="margin-top: 6px;"><b>Điểm thưởng (20đ):</b> Thưởng học tập tích cực (10đ) + Thưởng cán bộ lớp (10đ).</p>
            `
          }
        ]
      }
    };

    let currentDocId = 'onboarding-pdf';
    let currentDocMode = 'visual';

    /* Switch Tabs */
    function switchTab(tabId) {
      document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

      const targetPane = document.getElementById('pane-' + tabId);
      const targetNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
      const pageTitle = document.getElementById('current-page-title');

      if (targetPane) targetPane.classList.add('active');
      if (targetNav) targetNav.classList.add('active');

      const titleMap = {
        'dashboard': 'Tổng Quan Dashboard',
        'raw-docs': 'Bộ Đọc 7 Tài Liệu Gốc Trực Quan',
        'tools': 'Bộ 4 Công Cụ Tính Toán Tự Động',
        'rpoint': 'Điểm R-Point & Điều Kiện Dự Thi',
        'khao-thi': 'Quy Trình Khảo Thí PTIT',
        'phong-thi': 'Nội Quy Phòng Thi & Chế Tài',
        'sinh-vien': '10 Điều Nội Quy Sinh Viên',
        'rank-gvtg': 'Khung Rank GV & Trợ Giảng',
        'onboarding': 'Onboarding & Văn Hóa Doanh Nghiệp',
        'lark-guide': 'Cẩm Nang Thao Tác Lark Suite',
        'kpi-master': 'KPI Master Giảng Viên & Trợ Giảng'
      };

      if (pageTitle && titleMap[tabId]) {
        pageTitle.textContent = titleMap[tabId];
      }

      const sidebar = document.getElementById('sidebar');
      if (sidebar && window.innerWidth <= 768) {
        sidebar.classList.remove('open');
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.switchTab = switchTab;

    /* Render Raw Docs Menu */
    function renderRawDocsMenu() {
      const menuContainer = document.getElementById('raw-doc-menu');
      if (!menuContainer) return;

      menuContainer.innerHTML = '';
      Object.keys(rawDocsData).forEach(docId => {
        const doc = rawDocsData[docId];
        const item = document.createElement('div');
        item.className = 'raw-doc-item ' + (docId === currentDocId ? 'active' : '');
        item.id = 'doc-item-' + docId;
        item.onclick = () => selectRawDoc(docId);

        const typeLower = doc.type.toLowerCase();
        let iconClass = 'fa-file-pdf';
        if (doc.type === 'XLSX') iconClass = 'fa-file-excel';
        if (doc.type === 'MD') iconClass = 'fa-file-code';
        if (doc.type === 'JPG') iconClass = 'fa-file-image';

        item.innerHTML = `
          <div class="doc-icon-mini ${typeLower}">
            <i class="fa-solid ${iconClass}"></i>
          </div>
          <div class="doc-info-wrap">
            <span class="doc-title-text">${doc.title}</span>
            <span class="doc-meta-text"><span class="badge badge-primary">${doc.type}</span> • ${doc.pages || doc.size}</span>
          </div>
        `;
        menuContainer.appendChild(item);
      });
    }

    /* Select Raw Doc */
    function selectRawDoc(docId) {
      currentDocId = docId;
      const doc = rawDocsData[docId];
      if (!doc) return;

      document.querySelectorAll('.raw-doc-item').forEach(el => el.classList.remove('active'));
      const activeItem = document.getElementById('doc-item-' + docId);
      if (activeItem) activeItem.classList.add('active');

      const badge = document.getElementById('viewer-badge');
      const title = document.getElementById('viewer-title');
      const meta = document.getElementById('viewer-meta');

      if (badge) {
        badge.textContent = doc.type;
        badge.className = 'viewer-type-badge ' + doc.type.toLowerCase();
      }
      if (title) title.textContent = doc.title;
      if (meta) meta.textContent = `Mã số: ${doc.code} | Quy mô: ${doc.pages || ''} | File: ${doc.orig_file}`;

      renderDocContent();
    }
    window.selectRawDoc = selectRawDoc;

    function setDocViewMode(mode) {
      currentDocMode = mode;
      document.getElementById('btn-mode-visual').classList.toggle('active', mode === 'visual');
      document.getElementById('btn-mode-text').classList.toggle('active', mode === 'text');
      renderDocContent();
    }
    window.setDocViewMode = setDocViewMode;

    function renderDocContent() {
      const container = document.getElementById('raw-doc-content');
      const doc = rawDocsData[currentDocId];
      if (!container || !doc) return;

      if (currentDocMode === 'visual') {
        let chaptersHtml = '';
        if (doc.chapters && doc.chapters.length > 0) {
          chaptersHtml = doc.chapters.map(ch => `
            <div class="v-chapter-card">
              <div class="v-chapter-header">
                <span class="v-ch-title"><i class="fa-solid ${ch.icon || 'fa-bookmark'}"></i> ${ch.title}</span>
              </div>
              <div class="v-chapter-content">
                ${ch.content}
              </div>
            </div>
          `).join('');
        }

        container.innerHTML = `
          <div class="v-doc-header-banner">
            <div class="v-doc-banner-top">
              <span class="v-doc-code-badge">${doc.code}</span>
              <span style="font-size:12px; color:var(--text-muted);"><i class="fa-solid fa-circle-check text-green"></i> Chuẩn Ban Hành 2026</span>
            </div>
            <h2 class="v-doc-banner-title">${doc.title}</h2>
            <p class="v-doc-banner-desc">${doc.desc}</p>

            <div class="v-doc-stats-grid">
              <div class="v-stat-box"><div class="v-stat-lbl">Định dạng gốc</div><div class="v-stat-val text-red">${doc.type} (${doc.size})</div></div>
              <div class="v-stat-box"><div class="v-stat-lbl">Quy mô tài liệu</div><div class="v-stat-val text-blue">${doc.pages}</div></div>
              <div class="v-stat-box"><div class="v-stat-lbl">Khả năng hiển thị</div><div class="v-stat-val text-green">100% Trực quan trên Lark</div></div>
            </div>
          </div>

          <div class="v-chapters-list">
            ${chaptersHtml}
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="doc-card">
            <h3><i class="fa-solid fa-file-lines text-blue"></i> Bản Văn Bản Gốc & Tóm Tắt Chi Tiết</h3>
            <p style="color:var(--text-muted); margin-bottom:16px;">${doc.desc}</p>
            <div style="background:var(--bg-subtle); padding:16px; border-radius:8px; border:1px solid var(--border-color); font-family:var(--font-mono); font-size:12.5px; line-height:1.7; white-space:pre-wrap;">Tên file: ${doc.orig_file}
Mã hiệu: ${doc.code}
Dung lượng: ${doc.size}
Quy mô: ${doc.pages}
Trạng thái: Đã chuẩn hóa trực quan hóa 100% cho hệ sinh thái Lark Suite và Cổng Thông Tin Rikkei Education 2026.

Bạn có thể chuyển sang "Bản Trực Quan" ở nút góc trên bên phải để xem toàn bộ sơ đồ, bảng biểu và nội dung trực quan chi tiết!</div>
          </div>
        `;
      }
    }

    /* Calculator 1: R-Point */
    function calculateRPoint() {
      const absenceEl = document.getElementById('calc-rp-absence');
      const hwEl = document.getElementById('calc-rp-homework');
      const elearnEl = document.getElementById('calc-rp-elearning');
      const violEl = document.getElementById('calc-rp-violations');
      const bStudyEl = document.getElementById('calc-rp-bonus-study');
      const bCadreEl = document.getElementById('calc-rp-bonus-cadre');

      if (!absenceEl || !hwEl) return;

      const absencePercent = parseFloat(absenceEl.value) || 0;
      const hwIncompletePercent = parseFloat(hwEl.value) || 0;
      const elearningOption = parseInt(elearnEl ? elearnEl.value : 0) || 0;
      const violationOption = parseInt(violEl ? violEl.value : 0) || 0;
      const bonusStudy = Math.min(10, Math.max(0, parseFloat(bStudyEl ? bStudyEl.value : 0) || 0));
      const bonusCadre = Math.min(10, Math.max(0, parseFloat(bCadreEl ? bCadreEl.value : 0) || 0));

      const scoreAttendance = Math.max(0, 20 - (absencePercent * 2));
      const scoreHomework = Math.max(0, 20 - (hwIncompletePercent * 2));

      let scoreElearning = 20;
      if (elearningOption === 1) scoreElearning = 15;
      else if (elearningOption === 2) scoreElearning = 10;
      else if (elearningOption >= 3) scoreElearning = 0;

      let scoreViolation = 40;
      if (violationOption === 1) scoreViolation = 30;
      else if (violationOption === 2) scoreViolation = 20;
      else if (violationOption >= 3) scoreViolation = 0;

      const scoreTraining = scoreAttendance + scoreHomework + scoreElearning + scoreViolation;
      const scoreBonus = bonusStudy + bonusCadre;
      const totalRPoint = Math.min(120, scoreTraining + scoreBonus);

      const passAttendance = (100 - absencePercent) >= 80;
      const passHomework = (100 - hwIncompletePercent) >= 80;
      const passElearning = elearningOption < 3;
      const passTotalRP = totalRPoint >= 80;

      const isEligible = passAttendance && passHomework && passElearning && passTotalRP;

      const badge = document.getElementById('rp-status-badge');
      const resTotal = document.getElementById('res-rp-total');
      const resBreakdown = document.getElementById('res-rp-breakdown');
      const resCondCC = document.getElementById('res-rp-cond-cc');
      const resCondBTVN = document.getElementById('res-rp-cond-btvn');
      const resCondElearn = document.getElementById('res-rp-cond-elearn');

      if (resTotal) resTotal.textContent = `${totalRPoint.toFixed(1)} / 120 đ`;
      if (resBreakdown) resBreakdown.textContent = `${scoreTraining.toFixed(1)}đ rèn luyện + ${scoreBonus.toFixed(1)}đ thưởng`;

      if (resCondCC) {
        resCondCC.textContent = passAttendance ? `Đạt (${(100 - absencePercent).toFixed(0)}%)` : `Không Đạt (${(100 - absencePercent).toFixed(0)}% < 80%)`;
        resCondCC.className = 'val ' + (passAttendance ? 'text-green' : 'text-red');
      }

      if (resCondBTVN) {
        resCondBTVN.textContent = passHomework ? `Đạt (${(100 - hwIncompletePercent).toFixed(0)}%)` : `Không Đạt (${(100 - hwIncompletePercent).toFixed(0)}% < 80%)`;
        resCondBTVN.className = 'val ' + (passHomework ? 'text-green' : 'text-red');
      }

      if (resCondElearn) {
        resCondElearn.textContent = passElearning ? `Đạt (Chậm ${elearningOption} bài)` : `CẤM THI (Chậm ≥ 3 bài)`;
        resCondElearn.className = 'val ' + (passElearning ? 'text-green' : 'text-red');
      }

      if (badge) {
        if (isEligible) {
          badge.className = 'result-badge pass';
          badge.textContent = '✅ ĐỦ ĐIỀU KIỆN DỰ THI';
        } else {
          badge.className = 'result-badge fail';
          badge.textContent = '❌ MẤT TƯ CÁCH DỰ THI (CẤM THI)';
        }
      }
    }
    window.calculateRPoint = calculateRPoint;

    /* Calculator 2: PTIT Grade */
    function calculateCourseGrade() {
      const attEl = document.getElementById('calc-ptit-attendance');
      const quizEl = document.getElementById('calc-ptit-quiz');
      const midEl = document.getElementById('calc-ptit-midterm');
      const finalEl = document.getElementById('calc-ptit-final');

      if (!attEl || !midEl || !finalEl) return;

      const attScore = (parseFloat(attEl.value) || 0) * 10;
      const quizScore = (parseFloat(quizEl ? quizEl.value : 0) || 0) * 10;
      const midScore = parseFloat(midEl.value) || 0;
      const finalScore = parseFloat(finalEl.value) || 0;

      const processScore = (attScore * 0.5) + (quizScore * 0.5);
      const totalScore = (processScore * 0.2) + (midScore * 0.2) + (finalScore * 0.6);
      const scale10Score = totalScore / 10;

      let letterGrade = 'F (Trượt môn)';
      let letterClass = 'text-red';
      if (totalScore >= 85) { letterGrade = 'Loại Xuất sắc (A)'; letterClass = 'text-green'; }
      else if (totalScore >= 80) { letterGrade = 'Loại Giỏi (B+)'; letterClass = 'text-green'; }
      else if (totalScore >= 70) { letterGrade = 'Loại Khá (B)'; letterClass = 'text-blue'; }
      else if (totalScore >= 65) { letterGrade = 'Loại Trung bình khá (C+)'; letterClass = 'text-blue'; }
      else if (totalScore >= 50) { letterGrade = 'Loại Trung bình (C - Đạt môn)'; letterClass = 'text-gold'; }

      const badge = document.getElementById('grade-status-badge');
      const res100 = document.getElementById('res-grade-100');
      const res10 = document.getElementById('res-grade-10');
      const resLetter = document.getElementById('res-grade-letter');

      if (res100) res100.textContent = totalScore.toFixed(1) + ' / 100 đ';
      if (res10) res10.textContent = scale10Score.toFixed(2) + ' / 10.0';
      if (resLetter) {
        resLetter.textContent = letterGrade;
        resLetter.className = 'val ' + letterClass;
      }

      if (badge) {
        if (totalScore >= 50) {
          badge.className = 'result-badge pass';
          badge.textContent = '✅ ĐẠT HỌC PHẦN (PASS)';
        } else {
          badge.className = 'result-badge fail';
          badge.textContent = '❌ KHÔNG ĐẠT (PHẢI THI LẠI)';
        }
      }
    }
    window.calculateCourseGrade = calculateCourseGrade;

    /* Calculator 3: Teacher Rank */
    function evaluateTeacherRank() {
      const expEl = document.getElementById('calc-rank-exp');
      const skillEl = document.getElementById('calc-rank-skill');
      const pedaEl = document.getElementById('calc-rank-pedagogy');
      const resEl = document.getElementById('calc-rank-results');
      const rsrcEl = document.getElementById('calc-rank-resource');
      const devEl = document.getElementById('calc-rank-dev');

      if (!expEl || !skillEl) return;

      const exp = parseFloat(expEl.value) || 0;
      const scoreSkill = parseFloat(skillEl.value) || 0;
      const scorePeda = parseFloat(pedaEl ? pedaEl.value : 0) || 0;
      const scoreRes = parseFloat(resEl ? resEl.value : 0) || 0;
      const scoreRsrc = parseFloat(rsrcEl ? rsrcEl.value : 0) || 0;
      const scoreDev = parseFloat(devEl ? devEl.value : 0) || 0;

      const totalScore = scoreSkill + scorePeda + scoreRes + scoreRsrc + scoreDev;

      const ranks = [
        { rank: 8, name: 'RANK 8 - GV BRAND THỊ TRƯỜNG', minScore: 95, minExp: 5, salary: '35.000.000 VNĐ', allowance: '6.000.000 VNĐ', bonus: '4.000.000 VNĐ' },
        { rank: 7, name: 'RANK 7 - GV BRAND NỘI BỘ', minScore: 92, minExp: 4, salary: '30.000.000 VNĐ', allowance: '5.000.000 VNĐ', bonus: '3.000.000 VNĐ' },
        { rank: 6, name: 'RANK 6 - PM CHƯƠNG TRÌNH', minScore: 88, minExp: 3, salary: '25.000.000 VNĐ', allowance: '4.000.000 VNĐ', bonus: '3.000.000 VNĐ' },
        { rank: 5, name: 'RANK 5 - GV PM MÔN HỌC', minScore: 82, minExp: 2, salary: '20.000.000 VNĐ', allowance: '4.000.000 VNĐ', bonus: '2.000.000 VNĐ' },
        { rank: 4, name: 'RANK 4 - GIẢNG VIÊN CỨNG', minScore: 75, minExp: 1, salary: 'Thỏa thuận theo giờ', allowance: 'Theo lớp', bonus: 'Hiệu quả đào tạo' },
        { rank: 3, name: 'RANK 3 - GV TẬP SỰ', minScore: 65, minExp: 0.6, salary: 'Thỏa thuận', allowance: '-', bonus: '-' },
        { rank: 2, name: 'RANK 2 - TRỢ GIẢNG CỨNG', minScore: 55, minExp: 0.6, salary: 'Thỏa thuận', allowance: '-', bonus: '-' },
        { rank: 1, name: 'RANK 1 - TTS TRỢ GIẢNG', minScore: 40, minExp: 0.2, salary: 'Thỏa thuận', allowance: '-', bonus: '-' }
      ];

      let achievedRank = null;
      for (const r of ranks) {
        if (totalScore >= r.minScore && exp >= r.minExp) {
          achievedRank = r;
          break;
        }
      }

      const badge = document.getElementById('rank-badge-name');
      const resScore = document.getElementById('res-rank-total-score');
      const resSalary = document.getElementById('res-rank-salary');
      const resAllowance = document.getElementById('res-rank-allowance');
      const resBonus = document.getElementById('res-rank-bonus');

      if (resScore) resScore.textContent = totalScore.toFixed(1) + ' / 100 đ';

      if (achievedRank) {
        if (badge) { badge.className = 'result-badge gold'; badge.textContent = achievedRank.name; }
        if (resSalary) resSalary.textContent = achievedRank.salary;
        if (resAllowance) resAllowance.textContent = achievedRank.allowance;
        if (resBonus) resBonus.textContent = achievedRank.bonus;
      } else {
        if (badge) { badge.className = 'result-badge fail'; badge.textContent = 'CHƯA ĐẠT CHUẨN RANK (DƯỚI 40Đ)'; }
        if (resSalary) resSalary.textContent = 'Thỏa thuận';
        if (resAllowance) resAllowance.textContent = '-';
        if (resBonus) resBonus.textContent = '-';
      }
    }
    window.evaluateTeacherRank = evaluateTeacherRank;

    /* Calculator 4: Late Fee */
    function calculateLateFee() {
      const shiftEl = document.getElementById('calc-late-shift');
      const timeEl = document.getElementById('calc-late-time');
      if (!shiftEl || !timeEl || !timeEl.value) return;

      const shift = shiftEl.value;
      const timeStr = timeEl.value;

      const [hours, minutes] = timeStr.split(':').map(Number);
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

      const badge = document.getElementById('late-status-badge');
      const resMinutes = document.getElementById('res-late-minutes');
      const resCompensate = document.getElementById('res-late-compensate');
      const resFine = document.getElementById('res-late-fine');
      const resRule = document.getElementById('res-late-rule');

      if (arrivalMinutes <= shiftStartMinutes) {
        if (badge) { badge.className = 'result-badge pass'; badge.textContent = '✅ ĐÚNG GIỜ / ĐẾN SỚM'; }
        if (resMinutes) resMinutes.textContent = '0 phút';
        if (resCompensate) resCompensate.textContent = 'Không cần làm bù';
        if (resFine) resFine.textContent = '0 VNĐ';
        if (resRule) resRule.textContent = 'Chấp hành đúng giờ làm việc chuẩn theo văn hóa Rikkei Education.';
        return;
      }

      const lateMinutes = arrivalMinutes - shiftStartMinutes;
      const isBefore15m = arrivalMinutes <= graceCutoffMinutes;
      const blocks = Math.ceil(lateMinutes / 5);
      const fineAmount = blocks * 20000;
      const compensateMinutes = lateMinutes * 2;

      if (resMinutes) resMinutes.textContent = `${lateMinutes} phút (${blocks} block 5 phút)`;

      if (isBefore15m) {
        if (badge) { badge.className = 'result-badge warn'; badge.textContent = '⚠️ ĐI MUỘN DƯỚI 15 PHÚT'; }
        if (resCompensate) resCompensate.textContent = `Làm bù ${compensateMinutes} phút (x2) cuối ngày`;
        if (resFine) resFine.textContent = `${fineAmount.toLocaleString('vi-VN')} VNĐ (Phương án thay thế)`;
        if (resRule) resRule.textContent = 'Đi muộn dưới 15p: Được chọn làm bù x2 HOẶC nộp phạt 20k/mỗi 5 phút.';
      } else {
        if (badge) { badge.className = 'result-badge fail'; badge.textContent = '🛑 ĐI MUỘN TRÊN 15 PHÚT'; }
        if (resCompensate) resCompensate.textContent = 'KHÔNG ĐƯỢC LÀM BÙ';
        if (resFine) resFine.textContent = `${fineAmount.toLocaleString('vi-VN')} VNĐ (Bắt buộc)`;
        if (resRule) resRule.textContent = 'Đi muộn quá 15 phút không được áp dụng làm bù, bắt buộc nộp phạt 20k/mỗi 5 phút.';
      }
    }
    window.calculateLateFee = calculateLateFee;

    /* Global Search */
    function initSearch() {
      const globalSearch = document.getElementById('global-search');
      const clearSearchBtn = document.getElementById('clear-search');
      if (!globalSearch) return;

      globalSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (clearSearchBtn) {
          if (query.length > 0) clearSearchBtn.classList.remove('hidden');
          else clearSearchBtn.classList.add('hidden');
        }
        filterPortalContent(query);
      });

      if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
          globalSearch.value = '';
          clearSearchBtn.classList.add('hidden');
          filterPortalContent('');
        });
      }
    }

    function filterPortalContent(query) {
      const cards = document.querySelectorAll('.portal-card, .doc-card, .tool-card, .rule-item-card, .v-chapter-card');
      if (!query) {
        cards.forEach(el => { el.style.display = ''; });
        return;
      }
      cards.forEach(el => {
        const text = el.innerText.toLowerCase();
        if (text.includes(query)) el.style.display = '';
        else el.style.display = 'none';
      });
    }

    
    
    function switchKpiSubTab(tabId) {
      document.querySelectorAll('.kpi-subtab-pane').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.kpi-subtab-btn').forEach(el => el.classList.remove('active'));
      
      const pane = document.getElementById('subpane-' + tabId);
      const btn = document.querySelector(`.kpi-subtab-btn[onclick="switchKpiSubTab('${tabId}')"]`);
      
      if(pane) pane.classList.add('active');
      if(btn) btn.classList.add('active');
    }

    /* KPI Filter */
    function initKPIFilter() {
      const searchInput = document.getElementById('kpi-search');
      const roleSelect = document.getElementById('kpi-filter-role');
      const rankSelect = document.getElementById('kpi-filter-rank');
      if (!searchInput) return;

      function filter() {
        const q = searchInput.value.toLowerCase().trim();
        const role = roleSelect.value;
        const rank = rankSelect.value;

        const docCards = document.querySelectorAll('#pane-kpi-master .doc-card');
        docCards.forEach(group => {
           const cards = group.querySelectorAll('.kpi-card');
           if(cards.length === 0) return; // Skip Tong Quan, Quy Tac

           let visibleCount = 0;
           cards.forEach(card => {
             const text = card.innerText.toLowerCase();
             const isRoleMatch = role ? card.classList.contains('role-' + role) : true;
             
             let isRankMatch = true;
             if (rank) {
               const badges = card.querySelectorAll('.badge-rank-gv, .badge-rank-tg');
               let foundRank = false;
               badges.forEach(b => {
                 if (b.innerText.toLowerCase().includes('rank ' + rank)) foundRank = true;
               });
               isRankMatch = foundRank;
             }
             
             const isSearchMatch = q ? text.includes(q) : true;

             if (isRoleMatch && isRankMatch && isSearchMatch) {
               card.style.display = '';
               visibleCount++;
             } else {
               card.style.display = 'none';
             }
           });
           
           group.style.display = visibleCount > 0 ? '' : 'none';
        });
      }

      searchInput.addEventListener('input', filter);
      roleSelect.addEventListener('change', filter);
      rankSelect.addEventListener('change', filter);
    }

    /* Initialize App */
    document.addEventListener('DOMContentLoaded', () => {
      // Setup Nav clicks
      document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          const tabId = item.getAttribute('data-tab');
          switchTab(tabId);
        });
      });

      // Mobile sidebar toggle
      const mobileToggle = document.getElementById('mobile-toggle');
      const sidebar = document.getElementById('sidebar');
      if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', () => {
          sidebar.classList.toggle('open');
        });
      }

      // Theme toggle
      const themeToggleBtn = document.getElementById('theme-toggle');
      let isDark = false;
      if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
          isDark = !isDark;
          document.body.classList.toggle('theme-dark', isDark);
          document.body.classList.toggle('theme-light', !isDark);
        });
      }

      initSearch();
      initKPIFilter();
      renderRawDocsMenu();
      selectRawDoc('onboarding-pdf');
      calculateRPoint();
      calculateCourseGrade();
      evaluateTeacherRank();
      calculateLateFee();
    });