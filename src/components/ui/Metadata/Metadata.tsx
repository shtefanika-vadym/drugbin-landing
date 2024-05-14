import React from "react";
import { Helmet } from "react-helmet";

interface MetadataProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const Metadata: React.FC<MetadataProps> = ({
  title,
  description,
  children,
}) => {
  const metaKeywords = KEYWORDS.join(", ");
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index" />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content="DrugBin" />
        <meta property="og:description" content="DrugBin" />
        <meta property="og:type" content="website"></meta>
        <meta property="og:locale" content="ro" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" key="canonical" href={window.location.href} />
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
