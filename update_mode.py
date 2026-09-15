import re

html_file = 's:/WorkSpace/RikkeiEducation/Tài liệu/Rikkei_Education_So_Tay_2026.html'

with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Hide or remove the toggles
# Find: <div class="viewer-mode-toggles"> ... </div>
# I'll just add style="display: none;" to it.
content = re.sub(
    r'(<div class="viewer-mode-toggles">)',
    r'<div class="viewer-mode-toggles" style="display: none;">',
    content
)

# 2. Change let currentDocMode = 'visual'; to let currentDocMode = 'text';
content = re.sub(
    r"let\s+currentDocMode\s*=\s*'visual';",
    r"let currentDocMode = 'text';",
    content
)

with open(html_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated HTML.")
