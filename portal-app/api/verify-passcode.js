import { createHash, timingSafeEqual } from 'node:crypto';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { passcode } = req.body || {};
  const expectedHash = process.env.APP_PASSCODE_HASH;

  if (!expectedHash) {
    return res.status(500).json({ ok: false, error: 'Server misconfigured' });
  }

  if (typeof passcode !== 'string') {
    return res.status(401).json({ ok: false });
  }

  const inputHash = createHash('sha256').update(passcode).digest('hex');
  const a = Buffer.from(inputHash, 'hex');
  const b = Buffer.from(expectedHash, 'hex');

  if (a.length === b.length && timingSafeEqual(a, b)) {
    return res.status(200).json({ ok: true });
  }

  return res.status(401).json({ ok: false });
}
