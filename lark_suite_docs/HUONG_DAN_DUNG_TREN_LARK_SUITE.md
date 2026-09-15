# 📖 HƯỚNG DẪN HIỂN THỊ & SỬ DỤNG TÀI LIỆU TRÊN LARK SUITE
*Giải pháp xem tài liệu không lỗi, sắc nét và chuyên nghiệp trên Lark Docs, Lark Wiki & Lark Chat*

---

## ❓ NGUYÊN NHÂN CÁC FILE GỐC BỊ LỖI KHI XEM TRÊN LARK

1. **File HTML đơn lẻ dung lượng quá lớn (46.3 MB)**:
   - Trình duyệt tích hợp của Lark chặn việc thực thi JavaScript nội tuyến dung lượng lớn và chặn các hàm `blob:` URL khi mở xem file PDF/Excel nhúng.
2. **Ký tự thoát và lỗi xuống dòng Markdown cũ**:
   - Các file Markdown cũ chứa ký tự LaTeX `ightarrow` bị gãy thành `ightarrow` làm vỡ bảng biểu khi Lark render.
3. **Sơ đồ Mermaid không tương thích**:
   - Trình xem tài liệu Lark Docs không hỗ trợ hiển thị trực tiếp các sơ đồ nâng cao (như Mindmap, Gantt, Pie chart).

---

## ✅ 3 CÁCH SỬ DỤNG TÀI LIỆU CHUẨN ĐẸP 100% TRÊN LARK SUITE

### 🚀 CÁCH 1: ĐƯA VÀO LARK WIKI / LARK DOCS (KHUYÊN DÙNG CHO CÔNG TY)
Thư mục **`lark_suite_docs/`** đã được chuẩn hóa 100% chuẩn Lark Docs:
1. Mở không gian làm việc **Lark Wiki** của Rikkei Education.
2. Nhấn nút **New Page** ➔ Chọn **Import** ➔ Chọn file trong thư mục `lark_suite_docs/`.
3. ✅ Tài liệu sẽ hiển thị với font chữ chuẩn, bảng biểu ngay ngắn, sơ đồ khối ASCII sắc nét trên cả điện thoại và máy tính!

### 🌐 CÁCH 2: NHÚNG LINK WEB PORTAL VÀO LARK WORKPLACE / GROUP CHAT
Nếu muốn cả công ty sử dụng được bộ **4 Máy tính tương tác tự động**:
1. Tải thư mục `portal` lên máy chủ web hoặc [Netlify Drop](https://app.netlify.com/drop) (miễn phí, 30 giây).
2. Lấy đường link web (Ví dụ: `https://rikkeiedu-so-tay.netlify.app`).
3. Dán link vào nhóm chat Lark hoặc gắn thành **Ứng dụng Workplace / Tab Web trên Lark**. Mọi người có thể bấm vào dùng trực tiếp cực kỳ mượt mà!

### 📦 CÁCH 3: MỞ OFFLINE BẰNG PHÍM TẮT 1-CLICK TRÊN MÁY TÍNH
1. Giải nén file `Rikkei_Education_So_Tay_2026.zip`.
2. Nhấp đúp vào file **`Mo_So_Tay_Quy_Che.bat`**.
3. Trang web sẽ lập tức mở trên trình duyệt mặc định với đầy đủ 7 tài liệu gốc và công cụ tính toán.
