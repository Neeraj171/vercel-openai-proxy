export const config = { runtime: 'edge' };

export default async function handler(req) {
  const url = 'https://p-cdn1-a-cg14-linear-cbd46b77.movetv.com/clipslist/22/20250728T000000Z/20250729T000000Z/spanning_ads.mpd';
  const resp = await fetch(url);
  if (!resp.ok) return new Response('Upstream fetch failed', { status: 502 });

  const text = await resp.text();
  return new Response(text, {
    headers: {
      'Content-Type': 'application/dash+xml',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store'
    }
  });
}
