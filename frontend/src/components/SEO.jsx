import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "KV Builders - Expert Construction Services in Coimbatore",
  description = "KV Builders offers professional construction services in Coimbatore including residential, commercial, and industrial projects. Expert builders with 20+ years of experience.",
  keywords = "construction company coimbatore, builders coimbatore, residential construction, commercial construction, industrial construction, KV Builders, building contractors coimbatore",
  image = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  url = window.location.href,
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kvbuilders.com/#organization",
        "name": "KV Builders",
        "url": "https://kvbuilders.com",
        "logo": {
          "@type": "ImageObject",
          "url": image
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-98430-72490",
          "contactType": "Customer Service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Tamil"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 36, 1st Floor, S.N.D Lay-out, Street No.4, Tatabad",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "641012",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.facebook.com/people/KV-Builders/100081946775279/",
          "https://www.instagram.com/kvbuilders._"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://kvbuilders.com/#localbusiness",
        "name": "KV Builders",
        "image": image,
        "telephone": "+91-98430-72490",
        "email": "kvbuilders23@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 36, 1st Floor, S.N.D Lay-out, Street No.4, Tatabad",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "641012",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "11.0168",
          "longitude": "76.9558"
        },
        "url": "https://kvbuilders.com",
        "priceRange": "$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://kvbuilders.com/#website",
        "url": "https://kvbuilders.com",
        "name": "KV Builders",
        "description": "Professional construction and building services in Coimbatore",
        "publisher": {
          "@id": "https://kvbuilders.com/#organization"
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="KV Builders" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="KV Builders" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Coimbatore" />
      <meta name="geo.position" content="11.0168;76.9558" />
      <meta name="ICBM" content="11.0168, 76.9558" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
