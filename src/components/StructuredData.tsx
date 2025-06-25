import Head from 'next/head';

interface PersonStructuredDataProps {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  sameAs: string[];
  worksFor: Array<{
    name: string;
    url?: string;
  }>;
  knowsAbout: string[];
  location: {
    addressLocality: string;
    addressCountry: string;
  };
}

export const PersonStructuredData: React.FC<PersonStructuredDataProps> = ({
  name,
  jobTitle,
  description,
  url,
  sameAs,
  worksFor,
  knowsAbout,
  location,
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    url,
    sameAs,
    worksFor: worksFor.map(org => ({
      '@type': 'Organization',
      name: org.name,
      ...(org.url && { url: org.url }),
    })),
    knowsAbout,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.addressLocality,
      addressCountry: location.addressCountry,
    },
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

interface WebsiteStructuredDataProps {
  name: string;
  description: string;
  url: string;
  author: string;
}

export const WebsiteStructuredData: React.FC<WebsiteStructuredDataProps> = ({
  name,
  description,
  url,
  author,
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    description,
    url,
    author: {
      '@type': 'Person',
      name: author,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

interface ProjectStructuredDataProps {
  name: string;
  description: string;
  url: string;
  technologies: string[];
  image?: string;
}

export const ProjectStructuredData: React.FC<ProjectStructuredDataProps> = ({
  name,
  description,
  url,
  technologies,
  image,
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    ...(image && { image }),
    softwareVersion: '1.0',
    author: {
      '@type': 'Person',
      name: 'Muhsin A',
    },
    keywords: technologies.join(', '),
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}; 