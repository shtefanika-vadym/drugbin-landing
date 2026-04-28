import React from "react";
import { Helmet } from "react-helmet";

const SITE_URL = "https://www.drugbin.ro";
const DEFAULT_IMAGE = `${SITE_URL}/logo_v2.png`;

interface MetadataProps {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  publishedAt?: string;
  children: React.ReactNode;
}

export const Metadata: React.FC<MetadataProps> = ({
  title,
  description,
  image,
  type = "website",
  publishedAt,
  children,
}) => {
  const metaKeywords = KEYWORDS.join(", ");
  const pageTitle = title ? `${title} | DrugBin` : "DrugBin — Colectare medicamente expirate și neutilizate";
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${window.location.origin}${image}`
    : DEFAULT_IMAGE;
  const canonical = window.location.href.split("?")[0];

  const articleJsonLd =
    type === "article" && title
      ? JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          image: ogImage,
          datePublished: publishedAt,
          publisher: {
            "@type": "Organization",
            name: "DrugBin",
            logo: {
              "@type": "ImageObject",
              url: DEFAULT_IMAGE,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonical,
          },
        })
      : null;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:site_name" content="DrugBin" />
        <meta property="og:type" content={type} />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Article JSON-LD */}
        {articleJsonLd && (
          <script type="application/ld+json">{articleJsonLd}</script>
        )}
      </Helmet>
      {children}
    </>
  );
};

export const KEYWORDS = [
  "medicamente expirate",
  "eliminare medicamente expirate",
  "procedura eliminare medicamente",
  "depozitare medicamente expirate",
  "siguranta medicamente",
  "data expirarii medicamentelor",
  "management medicamente expirate",
  "cum să elimini medicamentele expirate",
  "reciclare medicamente",
  "informații medicamente expirate",
  "ghid eliminare medicamente",
  "sănătate naturală",
  "conștientizare sănătate",
  "gestionare responsabilă medicamente",
  "gestionare durabilă medicamente expirate",
  "impactul asupra mediului",
  "sănătatea comunității",
  "conștientizare despre casarea medicamentelor",
  "medicamente perimate",
  "eliminarea medicamentelor uzate",
  "medicamente expirare",
  "proceduri de eliminare medicamente",
  "siguranță în medicamente",
  "riscuri medicamente expirate",
  "efectele medicamentelor expirate",
  "reciclare responsabilă medicamente",
  "prevenirea expirării medicamentelor",
  "informații despre expirarea medicamentelor",
  "depozitare corectă medicamente",
  "riscuri pentru mediu medicamente",
  "reciclarea medicamentelor neutilizate",
  "pericolul medicamentelor expirate",
  "eliminarea corectă a medicamentelor",
  "consecințe ale utilizării medicamentelor perimate",
  "protejarea mediului înconjurător",
  "îndepărtarea sigură a medicamentelor",
  "impactul asupra sănătății publice",
  "responsabilitatea față de mediu",
  "reciclarea responsabilă a medicamentelor expirate",
  "pericolele medicamentelor vechi",
  "îngrijirea mediului înconjurător",
  "prevenirea poluării medicamentelor",
  "conservarea mediului",
  "depozitare responsabilă a medicamentelor",
  "impactul medicamentelor asupra ecosistemului",
  "informații despre eliminarea medicamentelor",
  "riscuri asociate cu medicamentele perimate",
  "metode de casare a medicamentelor",
];
