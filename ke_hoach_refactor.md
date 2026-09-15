# Kế hoạch Tái Cấu Trúc (Refactor) và Dọn dẹp Sổ Tay 2026

Dựa trên các quyết định mà bạn đã chốt qua phiên thảo luận (`/grill-me`), chúng ta sẽ tiến hành tái cấu trúc dự án từ một file HTML khổng lồ (Monolithic) sang mô hình quản lý theo các Component nhỏ bé, dễ chỉnh sửa mà không cần dùng đến các Framework phức tạp (giữ nguyên tính chất Static HTML). Đồng thời sẽ dọn dẹp các tệp tin dư thừa đã lỗi thời.

## Proposed Changes

### 1. Phân rã Component (Kiến trúc mã nguồn mới)
Sẽ khởi tạo thư mục `src/` để quản lý các thành phần:
- `src/index.html`: Bộ khung skeleton cơ bản (chứa thẻ `<html>`, `<head>`, `<body>` trống).
- `src/css/style.css`: Tách toàn bộ 1500+ dòng CSS từ thẻ `<style>` ra file riêng.
- `src/js/app.js`: Tách toàn bộ logic Javascript (chuyển tab, tính toán, DOM) ra file riêng.
- `src/components/`: Nơi chứa từng module HTML nhỏ:
  - `sidebar.html` (Menu bên trái)
  - `topbar.html` (Thanh tiêu đề trên cùng)
  - `tab_dashboard.html`
  - `tab_raw_docs.html`
  - `tab_kpi_master.html` (Thẻ KPI Grid hiện đại vừa làm)
  - `tab_onboarding.html`
  - v.v...

### 2. Viết Script đóng gói tự động (Build Tool)
#### [NEW] `build.py`
Script Python này đóng vai trò như một "nhà máy lắp ráp". 
Mỗi khi bạn sửa một file nhỏ trong `src/components/`, bạn chỉ cần chạy script này, nó sẽ:
1. Đọc nội dung `index.html`.
2. Lắp ghép các file HTML nhỏ vào đúng vị trí.
3. Nhúng (Inline) lại CSS và JS (hoặc nhúng qua thẻ `<link>`/`<script>`).
4. Xuất ra file `Rikkei_Education_So_Tay_2026.html` bản hoàn chỉnh.

### 3. Dọn dẹp các tệp tin lỗi thời (Cleanup)
Vì nội dung đã được đưa hết vào HTML Sổ Tay, các tài liệu thô trước đây sẽ bị xóa để tránh rác dự án:
- [DELETE] Thư mục `visual_docs/` (chứa các file `.md` cũ)
- [DELETE] Thư mục `converted_sources/` (nếu không cần thiết - *tùy chọn*)
- [DELETE] `QUY TRÌNH KHẢO THÍ PTIT ĐANG THỰC THI.md`
- [DELETE] `HUONG_DAN_CHIA_SE.md`

> [!IMPORTANT]
> - Các file tài liệu gốc (PDF, Excel `.xlsx`, ảnh nội quy, Lark Docs) **SẼ ĐƯỢC GIỮ NGUYÊN** làm tài liệu lưu trữ chuẩn xác đúng như bạn yêu cầu.

## Verification Plan

### Automated Tests
- Chạy `build.py` để biên dịch ra file Sổ tay bản cuối.
- Quét dung lượng và cấu trúc file build ra xem có khớp với phiên bản Monolithic hiện tại không.

### Manual Verification
- Người dùng mở file Sổ tay gốc trên trình duyệt và kiểm tra xem UI/UX và logic điều hướng có bị gãy sau khi chia nhỏ mã nguồn không.
