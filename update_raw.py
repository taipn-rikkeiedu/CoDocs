import json
import re

html_file = 's:/WorkSpace/RikkeiEducation/Tài liệu/Rikkei_Education_So_Tay_2026.html'
js_file = 's:/WorkSpace/RikkeiEducation/Tài liệu/portal-app/src/data/rawDocsData.js'

with open('s:/WorkSpace/RikkeiEducation/Tài liệu/scratch_contents.json', 'r', encoding='utf-8') as f:
    contents = json.load(f)

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Inject raw_content into rawDocsData
    for doc_id, text in contents.items():
        escaped_text = text.replace('\\', '\\\\').replace('`', '\\`').replace('$', '\\$')
        
        # We need to insert `raw_content: \`...\`,` into the doc object.
        # Let's find the start of the doc object `id: 'doc_id',`
        pattern = rf"(id:\s*'{doc_id}',)"
        replacement = f"\\1\n        raw_content: `{escaped_text}`,"
        content = re.sub(pattern, replacement, content)
        
    # Update the renderDocContent else block
    # In html_file and js_file, there is a block:
    # } else {
    #   container.innerHTML = `
    #     <div class="doc-card">
    #     ...
    #     `;
    # }
    
    old_else_block = r"\} else \{\s*container\.innerHTML = `[\s\S]*?Bạn có thể chuyển sang[\s\S]*?`;\s*\}"
    new_else_block = """} else {
        container.innerHTML = `
          <div class="doc-card">
            <h3><i class="fa-solid fa-file-lines text-blue"></i> Bản Văn Bản Gốc</h3>
            <p style="color:var(--text-muted); margin-bottom:16px;">${doc.desc}</p>
            <div style="background:var(--bg-subtle); padding:16px; border-radius:8px; border:1px solid var(--border-color); font-family:var(--font-mono); font-size:13px; line-height:1.6; white-space:pre-wrap; overflow-x: auto;">${doc.raw_content ? doc.raw_content.replace(/</g, '&lt;').replace(/>/g, '&gt;') : 'Đang tải nội dung gốc...'}</div>
          </div>
        `;
      }"""
    
    content = re.sub(old_else_block, new_else_block, content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

update_file(html_file)
print("Updated HTML.")

# Only update JS if it exists and has the renderDocContent function
import os
if os.path.exists(js_file):
    update_file(js_file)
    print("Updated JS.")
