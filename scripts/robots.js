const fs = require('fs');

const content = `
User-agent: *
Allow: /
`;

fs.writeFile('public/robots.txt', content, (err) => {
  if (err) {
    throw err;
  }
  // eslint-disable-next-line no-console
  console.log('robots.txt 파일 생성 완료');
});
