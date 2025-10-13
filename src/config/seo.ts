import { DefaultSeoProps } from 'next-seo';

export const defaultSEOConfig: DefaultSeoProps = {
  titleTemplate: '%s | Muhsin A - Frontend Engineer',
  defaultTitle: 'Muhsin A - Frontend Engineer | React & JavaScript Specialist',
  description: 'Frontend Engineer from Bangalore, India specializing in React, JavaScript, TypeScript, and modern web technologies. Building beautiful, functional web experiences.',
  canonical: 'https://muhsi.in',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhsi.in',
    siteName: 'Muhsin A - Portfolio',
    title: 'Muhsin A - Frontend Engineer | React & JavaScript Specialist',
    description: 'Frontend Engineer from Bangalore, India specializing in React, JavaScript, TypeScript, and modern web technologies. Building beautiful, functional web experiences.',
    images: [
      {
        url: 'https://muhsi.in/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhsin A - Frontend Engineer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@muhsin7majeed',
    site: '@muhsin7majeed',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'frontend engineer, react developer, javascript developer, typescript, nextjs, web developer, bangalore, india, portfolio, software engineer, frontend development, reactjs, nodejs, angular, css3, html5, git, figma, graphql',
    },
    {
      name: 'author',
      content: 'Muhsin A',
    },
    {
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    },
    {
      name: 'googlebot',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },
    {
      name: 'theme-color',
      content: '#BA68C8',
    },
    {
      name: 'msapplication-TileColor',
      content: '#BA68C8',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      href: '/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
};

export const projectSEOConfig = {
  title: 'Projects - World\'s on Fire',
  description: 'Explore my projects including World\'s on Fire, an arcade 2D shooter game built with React, PixiJS, and TypeScript. See my work in React, JavaScript, and modern web technologies.',
  openGraph: {
    title: 'Projects - World\'s on Fire | Muhsin A',
    description: 'Explore my projects including World\'s on Fire, an arcade 2D shooter game built with React, PixiJS, and TypeScript.',
  },
};

export const experienceSEOConfig = {
  title: 'Experience - Software Engineer',
  description: 'Software Engineer at Springworks working on Horizon360 business management software. Previous experience as Frontend Engineer at Techwarelab building React and Angular applications.',
  openGraph: {
    title: 'Experience - Software Engineer | Muhsin A',
    description: 'Software Engineer at Springworks working on Horizon360 business management software.',
  },
}; 