import { Helmet } from 'react-helmet-async';
import type { FC } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
  noindex?: boolean;
}

const DEFAULT_TITLE = 'Dra. Luciana Maluf | Dermatologista Especialista em Pele Negra e Étnica';
const DEFAULT_DESCRIPTION = 'Dermatologista especializada em pele negra e étnica. Tratamentos personalizados para melasma, acne, manchas e rejuvenescimento. Atendimento em São Paulo.';
const DEFAULT_IMAGE = 'https://lucianamaluf.com.br/wp-content/uploads/2022/06/Logomarca_horizontal-ok.png';
const SITE_NAME = 'Dra. Luciana Maluf';
const SITE_URL = 'https://lucianamaluf.com.br';

export const SEO: FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Dra. Luciana Maluf',
  keywords = [],
  noindex = false,
}) => {
  const fullTitle = title === DEFAULT_TITLE ? title : `${title} | ${SITE_NAME}`;
  const url = canonical || SITE_URL;

  const defaultKeywords = [
    'dermatologista',
    'pele negra',
    'pele étnica',
    'melasma',
    'acne',
    'manchas na pele',
    'rejuvenescimento',
    'São Paulo',
    'tratamento dermatológico',
    'harmonização facial',
    'toxina botulínica',
    'preenchimento',
    'bioestimuladores',
    'laser',
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#6f0d44" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': type === 'article' ? 'Article' : 'WebSite',
          name: fullTitle,
          description,
          url,
          image,
          author: {
            '@type': 'Person',
            name: author,
          },
          publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            logo: {
              '@type': 'ImageObject',
              url: DEFAULT_IMAGE,
            },
          },
          ...(publishedTime && {
            datePublished: publishedTime,
            dateModified: modifiedTime || publishedTime,
          }),
        })}
      </script>
    </Helmet>
  );
};
