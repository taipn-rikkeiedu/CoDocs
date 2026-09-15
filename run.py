import os
import json
import re

docs_dir = 's:/WorkSpace/RikkeiEducation/Tài liệu/lark_suite_docs'
html_file = 's:/WorkSpace/RikkeiEducation/Tài liệu/Rikkei_Education_So_Tay_2026.html'

def read_md(filename):
    path = os.path.join(docs_dir, filename)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    return ''

contents = {
    'khao-thi-md': read_md('01_QUY_TRINH_KHAO_THI_PTIT.md'),
    'rank-gvtg-xlsx': read_md('02_TIEU_CHI_XEP_HANG_RANK_GV_TG.md'),
    'onboarding-pdf': read_md('03_SO_TAY_ONBOARDING_HOI_NHAP_2026.md'),
    'lark-pdf': read_md('04_CAM_NANG_SU_DUNG_LARK_SUITE.md'),
    'phong-thi-pdf': read_md('05_NOI_QUY_PHONG_THI_VA_XU_LY_KY_LUAT.md'),
    'sinh-vien-jpg': read_md('06_NOI_QUY_SINH_VIEN_RIKKEI_EDU.md'),
    'rpoint-pdf': read_md('07_QUY_DINH_DIEM_RPOINT_MOI_NHAT.md')
}

with open(html_file, 'r', encoding='utf-8') as f:
    html = f.read()

# For kpi-master, extract text from HTML table
kpi_table_match = re.search(r'<table class="kpi-table".*?</table>', html, re.DOTALL)
if kpi_table_match:
    kpi_html = kpi_table_match.group(0)
    kpi_text = re.sub(r'<tr[^>]*>', '\n', kpi_html)
    kpi_text = re.sub(r'<th[^>]*>', ' | ', kpi_text)
    kpi_text = re.sub(r'<td[^>]*>', ' | ', kpi_text)
    kpi_text = re.sub(r'<[^>]+>', '', kpi_text)
    kpi_text = '\n'.join([line.strip() for line in kpi_text.splitlines() if line.strip()])
    contents['kpi-master'] = kpi_text

with open('s:/WorkSpace/RikkeiEducation/Tài liệu/scratch_contents.json', 'w', encoding='utf-8') as f:
    json.dump(contents, f, ensure_ascii=False)
