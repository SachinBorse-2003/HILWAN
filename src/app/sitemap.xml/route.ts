export async function GET() {
  const baseUrl = 'https://www.hilwantransport.ae';
  const pages = ['', 'about', 'services', 'gallery', 'contact'];
  const urls = pages
    .map((page) => `<url><loc>${baseUrl}/${page}</loc></url>`) 
    .join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
