import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " Best SEO Agency London | Premium SEO Services",
  description: "Get a hold of premium SEO services from the best SEO company in London. Market your business with local SEO services, website SEO audit, and much more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="http://glassfrogtech.co.uk/" />
        <script type="application/ld+json">
          {`
            {
              "@type": "WebSite",
              "@id": "http://glassfrogtech.co.uk/#website",
              "url": "http://glassfrogtech.co.uk/",
              "name": "SEO Services - Glassfrog Technologies",
              "description": "",
              "publisher": {
                "@id": "http://glassfrogtech.co.uk/#organization"
              },
              "potentialAction": [
                {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "http://glassfrogtech.co.uk/?s={search_term_string}"
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
        <script type="application/ld+json">
          {`
            {
              "@type": "BreadcrumbList",
              "@id": "http://glassfrogtech.co.uk/#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "SEO Services",
                  "item": "http://glassfrogtech.co.uk/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "SEO Agency London"
                }
              ]
            }
          `}
        </script>
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
