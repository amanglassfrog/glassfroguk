import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from 'next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://glassfrogtech.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Best SEO Agency London | Premium SEO Services & Strategy',
    description: 'Get a hold of premium SEO services from the best SEO company in London. Market your business with local SEO services, website SEO audit, and much more.',
    url: 'https://www.glassfrogtech.co.uk/',
    siteName: 'SEO Services - Glassfrog Technologies',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/bfcef52c-0d5b-4bab-9ceb-58e7a36db5d0.jpg',
        width: 1080,
        height: 1080,
      },
    ],
    locale: 'en_UK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best SEO Agency London | Premium SEO Services & Strategy',
    description: 'Get a hold of premium SEO services from the best SEO company in London. Market your business with local SEO services, website SEO audit, and much more.',
    images: ['https://opengraph.b-cdn.net/production/images/bfcef52c-0d5b-4bab-9ceb-58e7a36db5d0.jpg'],
  }
};

// Define the JSON-LD data
const jsonLdData = [
  // Website Schema
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'http://www.glassfrogtech.co.uk/#website',
    'url': 'http://www.glassfrogtech.co.uk/',
    'name': 'SEO Services - Glassfrog Technologies',
    'publisher': {
      '@id': 'http://www.glassfrogtech.co.uk/#organization'
    },
    'potentialAction': [
      {
        '@type': 'SearchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': 'http://www.glassfrogtech.co.uk/?s={search_term_string}'
        },
        'query-input': {
          '@type': 'PropertyValueSpecification',
          'valueRequired': true,
          'valueName': 'search_term_string'
        }
      }
    ],
    'inLanguage': 'en-UK'
  },
  // Breadcrumb Schema
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': 'http://www.glassfrogtech.co.uk/#breadcrumb',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'SEO Services',
        'item': 'http://www.glassfrogtech.co.uk/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'SEO Agency London'
      }
    ]
  },
  // FAQ Schema
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What SEO services can help my website rank better in my city?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'For location specific rankings, local SEO services work the best. If you want your website to rank better in your city, we can target keywords that appeal to the searches based on location. With this, you approach a specific audience easily through search results.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How can I find an SEO agency near me?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'To find an SEO agency, you need to figure out what type of SEO service you want. If you want a full fledged SEO company that can help you achieve multiple goals, an SEO expert company is the best option. They can help you with many SEO services and gain increased traffic for better leads.'
        }
      }
    ]
  },
  // Organization Schema
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://glassfrogtech.co.uk/#organization',
    'name': 'SEO Services - Glassfrog Technologies',
    'url': 'https://glassfrogtech.co.uk/',
    'logo': {
      '@type': 'ImageObject',
      'inLanguage': 'en-UK',
      '@id': 'https://glassfrogtech.co.uk/#/schema/logo/image/',
      'url': 'https://glassfrogtech.co.uk/logo.svg',
      'contentUrl': 'https://glassfrogtech.co.uk/logo.svg',
      'width': 237,
      'height': 61,
      'caption': 'SEO Services - Glassfrog Technologies'
    },
    'sameAs': [
      'https://www.facebook.com/GlassfrogTechnologies',
      'https://www.instagram.com/glassfrog_technologies/',
      'https://www.linkedin.com/company/glassfrog-technologies/'
    ]
  }
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData)
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J69HCJ44DZ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J69HCJ44DZ');
            `
          }}
        />
        <script async src="https://www.clarity.ms/tag/q3vsh10s8d" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "q3vsh10s8d");
            `
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
