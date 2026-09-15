import React, { useState, useMemo } from 'react';
import { rawDocsData } from '../data/rawDocsData';

const ICONS = { PDF: 'fa-file-pdf', XLSX: 'fa-file-excel', MD: 'fa-file-code', JPG: 'fa-file-image', WEB: 'fa-file-lines' };

function renderVisualContent(doc) {
  if (!doc) return null;
  if (!doc.file_url) {
    return <p>Không tìm thấy file gốc.</p>;
  }
  const ext = doc.file_url.split('.').pop().toLowerCase();

  if (ext === 'pdf') {
    return <iframe title={doc.title} src={doc.file_url} style={{ width: '100%', height: '80vh', border: 'none' }} />;
  }
  if (ext === 'jpg' || ext === 'png' || ext === 'jpeg') {
    return (
      <div style={{ textAlign: 'center', overflow: 'auto', height: '80vh' }}>
        <img src={doc.file_url} alt={doc.title} style={{ maxWidth: '100%', height: 'auto', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
      </div>
    );
  }
  if (ext === 'xlsx') {
    return (
      <div style={{ textAlign: 'center', padding: 50, background: 'var(--bg-card)', borderRadius: 12, marginTop: 20 }}>
        <i className="fa-solid fa-file-excel" style={{ fontSize: 64, color: '#217346', marginBottom: 20 }}></i>
        <h3>Tệp Excel gốc</h3>
        <p style={{ marginBottom: 20, color: 'var(--text-muted)' }}>Trình duyệt không hỗ trợ xem trước tệp Excel trực tiếp.</p>
        <a href={doc.file_url} download className="btn" style={{ background: '#217346', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: 6, display: 'inline-block' }}>
          <i className="fa-solid fa-download"></i> Tải xuống tệp
        </a>
      </div>
    );
  }
  if (ext === 'md') {
    return <iframe title={doc.title} src={doc.file_url} style={{ width: '100%', height: '80vh', border: 'none', background: 'var(--bg-card)', padding: 20, borderRadius: 12 }} />;
  }
  return <a href={doc.file_url} download>Tải xuống tệp ({ext})</a>;
}

export default function RawDocs() {
  const [currentDocId, setCurrentDocId] = useState('onboarding-pdf');
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const docEntries = Object.entries(rawDocsData);

  const filteredDocs = useMemo(() => {
    return docEntries.filter(([id, doc]) => {
      if (typeFilter && doc.type !== typeFilter) return false;
      if (search && !doc.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [search, typeFilter, docEntries]);

  const doc = rawDocsData[currentDocId];

  return (
    <section className="page-container" style={{ padding: '24px', maxWidth: '1600px' }}>
      <div className="raw-docs-layout">
        <div className="raw-docs-sidebar">
          
          <div className="raw-docs-sidebar-header" style={{ paddingBottom: '0', borderBottom: 'none' }}>
            <div style={{ marginBottom: '12px' }}>
              <i className="fa-solid fa-folder-open text-blue"></i> Danh sách tài liệu
            </div>
            
            <div className="local-toolbar" style={{ flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fa-solid fa-magnifying-glass" style={{ color: 'var(--text-muted)' }}></i>
                <input 
                  type="text" 
                  className="local-search-input" 
                  placeholder="Tìm tài liệu..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <select className="local-filter-select" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} style={{ width: '100%' }}>
                <option value="">Tất cả định dạng</option>
                <option value="PDF">PDF</option>
                <option value="MD">Markdown</option>
                <option value="XLSX">Excel</option>
                <option value="JPG">Hình ảnh</option>
              </select>
            </div>
          </div>
          
          <div className="raw-doc-list" style={{ flex: 1, overflowY: 'auto' }}>
            {filteredDocs.length > 0 ? (
              filteredDocs.map(([docId, d]) => {
                const iconClass = ICONS[d.type] || 'fa-file-pdf';
                return (
                  <div
                    key={docId}
                    className={`raw-doc-item ${docId === currentDocId ? 'active' : ''}`}
                    onClick={() => setCurrentDocId(docId)}
                  >
                    <div className={`doc-icon-mini ${d.type.toLowerCase()}`}>
                      <i className={`fa-solid ${iconClass}`}></i>
                    </div>
                    <div className="doc-info-wrap">
                      <span className="doc-title-text">{d.title}</span>
                      <span className="doc-meta-text">
                        <span className="badge badge-primary">{d.type}</span> • {d.pages || d.size}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
                Không có tài liệu nào phù hợp.
              </div>
            )}
          </div>
        </div>

        <div className="raw-doc-viewer-card">
          {doc ? (
            <>
              <div className="raw-doc-viewer-header">
                <div className="viewer-title-box">
                  <span className={`viewer-type-badge ${doc.type.toLowerCase()}`}>{doc.type}</span>
                  <div className="viewer-header-text">
                    <h3>{doc.title}</h3>
                    <span className="meta">Mã số: {doc.code} | Quy mô: {doc.pages || ''} | File: {doc.orig_file}</span>
                  </div>
                </div>
              </div>

              <div className="raw-doc-body">
                {renderVisualContent(doc)}
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>
              Hãy chọn một tài liệu từ danh sách bên trái.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
