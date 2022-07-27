const fs = require('fs');

const content = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
<loc>https://regex-tutorial.vercel.app/</loc>
<lastmod>2022-07-27T14:11:08+00:00</lastmod>
<priority>1.00</priority>
</url>
<url>
<loc>
https://regex-tutorial.vercel.app/questions/simplest-match/0
</loc>
<lastmod>2022-07-27T14:11:08+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>
https://regex-tutorial.vercel.app/questions/simple-match/0
</loc>
<lastmod>2022-07-27T14:11:08+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>
https://regex-tutorial.vercel.app/questions/complicated-match/0
</loc>
<lastmod>2022-07-27T14:11:08+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>
https://regex-tutorial.vercel.app/questions/most-complicated-problem/0
</loc>
<lastmod>2022-07-27T14:11:08+00:00</lastmod>
<priority>0.80</priority>
</url>
</urlset>
`;

fs.writeFile('public/sitemap.xml', content, (err) => {
  if (err) {
    throw err;
  }
  // eslint-disable-next-line no-console
  console.log('sitemap.xml 파일 생성 완료');
});