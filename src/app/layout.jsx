import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ToastProvider } from "@/components/ui/ToastContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Best SEO Agency London | Premium SEO Services & Strategy",
  description:
    "Get a hold of premium SEO services from the best SEO company in London. Market your business with local SEO services, website SEO audit, and much more.",
  openGraph: {
    title: "Best SEO Agency London | Premium SEO Services & Strategy",
    description:
      "Get a hold of premium SEO services from the best SEO company in London. Market your business with local SEO services, website SEO audit, and much more.",
    url: "https://www.glassfrogtech.co.uk/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SEO Agency London | Premium SEO Services & Strategy",
    description:
      "Get a hold of premium SEO services from the best SEO company in London. Market your business with local SEO services, website SEO audit, and much more.",
  },
  alternates: {
    canonical: "https://www.glassfrogtech.co.uk/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script type="application/ld+json">
          {`
                {
                  "@type": "WebSite",
                  "@id": "https://www.glassfrogtech.co.uk/#website",
                  "url": "https://www.glassfrogtech.co.uk/",
                  "name": "SEO Services - Glassfrog Technologies",
                  "description": "",
                  "publisher": {
                    "@id": "https://www.glassfrogtech.co.uk/#organization"
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://www.glassfrogtech.co.uk/?s={search_term_string}"
                      },
                      "query-input": {
                        "@type": "PropertyValueSpecification",
                        "valueRequired": true,
                        "valueName": "search_term_string"
                      }
                    }
                  ],
                  "inLanguage": "en-UK"
                }
                `}
        </script>

        {/* Breadcrumb List Schema */}
        <script type="application/ld+json">
          {`
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.glassfrogtech.co.uk/#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "SEO Services",
                      "item": "https://www.glassfrogtech.co.uk/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "SEO Agency London",
                      "item": "https://www.glassfrogtech.co.uk/"
                    }
                  ]
                }
                `}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {`
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What SEO services can help my website rank better in my city?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For location specific rankings, local SEO services work the best. If you want your website to rank better in your city, we can target keywords that appeal to the searches based on location. With this, you approach a specific audience easily through search results."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I find an SEO agency near me?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "To find an SEO agency, you need to figure out what type of SEO service you want. If you want a full fledged SEO company that can help you achieve multiple goals, an SEO expert company is the best option. They can help you with many SEO services and gain increased traffic for better leads."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the best SEO service for getting high traffic on my website?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "To get high traffic on your website, you can rely on a number of SEO services. These include local SEO services, SEO copywriting, and many others. To choose the best one, you can contact an SEO company or an SEO expert."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is an SEO marketing agency?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An SEO marketing agency can help you get more leads and gain high traffic through SEO services. They use SEO and market business with a proper plan. It is different from an SEO company that focuses on your website rankings."
                      }
                    }
                  ]
                }
                `}
        </script>

        {/* Sitelinks Schema */}
        <script type="application/ld+json">
          {`
                {
                  "@type": "WebSite",
                  "@id": "https://www.glassfrogtech.co.uk/#website",
                  "url": "https://www.glassfrogtech.co.uk/",
                  "name": "SEO Services - Glassfrog Technologies",
                  "description": "",
                  "publisher": {
                    "@id": "https://www.glassfrogtech.co.uk/#organization"
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://www.glassfrogtech.co.uk/?s={search_term_string}"
                      },
                      "query-input": {
                        "@type": "PropertyValueSpecification",
                        "valueRequired": true,
                        "valueName": "search_term_string"
                      }
                    }
                  ],
                  "inLanguage": "en-UK"
                }
                `}
        </script>

        {/* Image Schema */}
        <script type="application/ld+json">
          {`
                {
                  "@type": "ImageObject",
                  "inLanguage": "en-UK",
                  "@id": "https://www.glassfrogtech.co.uk/#primaryimage",
                  "url": "https://www.glassfrogtech.co.uk/logo.svg",
                  "contentUrl": "https://www.glassfrogtech.co.uk//logo.svg",
                  "width": 87,
                  "height": 83
                }
                `}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {`
                {
                  "@type": "Organization",
                  "@id": "https://www.glassfrogtech.co.uk/#organization",
                  "name": "SEO Agency London -  Glassfrog Technologies",
                  "url": "https://www.glassfrogtech.co.uk/",
                  "logo": {
                    "@type": "ImageObject",
                    "inLanguage": "en-UK",
                    "@id": "https://www.glassfrogtech.co.uk/#/schema/logo/image/",
                    "url": "https://www.glassfrogtech.co.uk/logo.svg",
                    "contentUrl": "https://www.glassfrogtech.co.uk/logo.svg",
                    "width": 237,
                    "height": 61,
                    "caption": "SEO Agency London -  Glassfrog Technologies"
                  },
                  "image": {
                    "@id": "https://www.glassfrogtech.co.uk/#/schema/logo/image/"
                  },
                  "sameAs": [
                    "https://www.facebook.com/GlassfrogTechnologies",
                    "https://www.instagram.com/glassfrog_technologies/",
                    "https://www.linkedin.com/company/glassfrog-technologies/"
                  ]
                }
                `}
        </script>
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
                  `,
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
                  `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
