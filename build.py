import os
import re

def build():
    print("Start building...")
    base_dir = os.path.dirname(os.path.abspath(__file__))
    src_dir = os.path.join(base_dir, 'src')
    
    # Read index.html (skeleton)
    with open(os.path.join(src_dir, 'index.html'), 'r', encoding='utf-8') as f:
        html = f.read()

    # Inject CSS
    css_path = os.path.join(src_dir, 'css', 'style.css')
    if os.path.exists(css_path):
        with open(css_path, 'r', encoding='utf-8') as f:
            css = f.read()
        html = html.replace('<!-- INJECT_CSS -->', f'<style>\n{css}\n</style>')

    # Inject JS
    js_path = os.path.join(src_dir, 'js', 'app.js')
    if os.path.exists(js_path):
        with open(js_path, 'r', encoding='utf-8') as f:
            js = f.read()
        html = html.replace('<!-- INJECT_JS -->', f'<script>\n{js}\n</script>')

    # Inject Components
    components_dir = os.path.join(src_dir, 'components')
    if os.path.exists(components_dir):
        for filename in os.listdir(components_dir):
            if filename.endswith('.html'):
                with open(os.path.join(components_dir, filename), 'r', encoding='utf-8') as f:
                    comp_html = f.read()
                
                # Check specific inject markers
                if filename == 'sidebar.html':
                    html = html.replace('<!-- INJECT_SIDEBAR -->', comp_html)
                elif filename == 'topbar.html':
                    html = html.replace('<!-- INJECT_TOPBAR -->', comp_html)
                else:
                    # Generic component marker: <!-- INJECT_COMPONENT_PANE-DASHBOARD.HTML -->
                    marker = f'<!-- INJECT_COMPONENT_{filename.upper()} -->'
                    html = html.replace(marker, comp_html)

    # Output to root directory
    out_path = os.path.join(base_dir, 'Rikkei_Education_So_Tay_2026.html')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(html)
        
    print(f"Build complete! Output file: {os.path.basename(out_path)}")
    print(f"Total size: {os.path.getsize(out_path) // 1024} KB")

if __name__ == '__main__':
    build()
