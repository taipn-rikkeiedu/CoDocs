import re
import os

html_file = 's:/WorkSpace/RikkeiEducation/Tài liệu/Rikkei_Education_So_Tay_2026.html'

with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Inject file_url into rawDocsData
urls = {
    'kpi-master': 'lark_suite_docs/KPI_MASTER_Giang_vien_Tro_giang_FINAL.xlsx',
    'rank-gvtg-xlsx': '[RE] Tiêu chí xếp loại Rank GV_TG.xlsx',
    'lark-pdf': 'Cẩm nang sử dụng Lark .pdf',
    'phong-thi-pdf': 'NỘI QUY PHÒNG THI.pdf',
    'sinh-vien-jpg': 'Nội quy sinh viên.jpg',
    'onboarding-pdf': 'Onboarding Rikkei Education 2026.pdf',
    'rpoint-pdf': 'TBBS VV Cập nhật phụ lục 1_TB01.2026.pdf',
    'khao-thi-md': 'lark_suite_docs/01_QUY_TRINH_KHAO_THI_PTIT.md'
}

for doc_id, file_url in urls.items():
    # Insert file_url right after id: '...'
    pattern = rf"(id:\s*'{doc_id}',)"
    replacement = f"\\1\n        file_url: '{file_url}',"
    # only replace if not already there
    if f"file_url: '{file_url}'" not in content:
        content = re.sub(pattern, replacement, content)

# 2. Replace renderDocContent implementation
new_render_func = """    function renderDocContent() {
      const container = document.getElementById('raw-doc-content');
      const doc = rawDocsData[currentDocId];
      if (!container || !doc) return;

      if (!doc.file_url) {
        container.innerHTML = '<p>Không tìm thấy file gốc.</p>';
        return;
      }

      const ext = doc.file_url.split('.').pop().toLowerCase();
      
      let viewerHtml = '';
      if (ext === 'pdf') {
        viewerHtml = `<iframe src="${doc.file_url}" style="width: 100%; height: 80vh; border: none;"></iframe>`;
      } else if (ext === 'jpg' || ext === 'png' || ext === 'jpeg') {
        viewerHtml = `<div style="text-align: center; overflow: auto; height: 80vh;"><img src="${doc.file_url}" style="max-width: 100%; height: auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" /></div>`;
      } else if (ext === 'xlsx') {
        viewerHtml = `
          <div style="text-align: center; padding: 50px; background: var(--bg-card); border-radius: 12px; margin-top: 20px;">
            <i class="fa-solid fa-file-excel" style="font-size: 64px; color: #217346; margin-bottom: 20px;"></i>
            <h3>Tệp Excel gốc</h3>
            <p style="margin-bottom: 20px; color: var(--text-muted);">Trình duyệt không hỗ trợ xem trước tệp Excel trực tiếp.</p>
            <a href="${doc.file_url}" download class="btn" style="background: #217346; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block;">
              <i class="fa-solid fa-download"></i> Tải xuống tệp
            </a>
          </div>
        `;
      } else if (ext === 'md') {
        viewerHtml = `<iframe src="${doc.file_url}" style="width: 100%; height: 80vh; border: none; background: white; padding: 20px;"></iframe>`;
      } else {
        viewerHtml = `<a href="${doc.file_url}" download>Tải xuống tệp (${ext})</a>`;
      }

      container.innerHTML = viewerHtml;
    }"""

# Use regex to replace the entire renderDocContent function
content = re.sub(r'function renderDocContent\(\)\s*\{.*?(?=\s*function setDocViewMode|\s*window\.renderDocContent|\s*calculateRPoint|\s*\/\* Calculator 1)', new_render_func + '\n\n', content, flags=re.DOTALL)

with open(html_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated renderDocContent successfully.")
