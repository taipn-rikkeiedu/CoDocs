import React from 'react';

// Maps rank/role to a color class
const getBadgeClass = (role, rank) => {
  if (role === 'Trợ giảng') return 'badge-tg';
  if (role === 'Giảng viên') return 'badge-gv';
  return 'badge-default';
};

export default function RankBadge({ role, rank }) {
  const badgeClass = getBadgeClass(role, rank);
  
  return (
    <span className={`kpi-badge ${badgeClass}`}>
      {role} - Rank {rank}
    </span>
  );
}
