import fs from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

const SITE_URL = 'https://lucianamaluf.com.br';

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc');

  // Get all pages
  const pages = await globby([
    'src/pages/**/*.tsx',
    '!src/pages/**/[*.tsx', // Exclude dynamic routes
    '!src/pages/_*.tsx', // Exclude special pages
    '!src/pages/api', // Exclude API routes
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('src/pages', '')
            .replace('.tsx', '')
            .replace('/index', '');
          const route = path === '/index' ? '' : path;

          return `
            <url>
              <loc>${`${SITE_URL}${route}`}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${route === '' ? '1.0' : '0.8'}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
}

generateSitemap();
