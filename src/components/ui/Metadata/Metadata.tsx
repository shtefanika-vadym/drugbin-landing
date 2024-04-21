import React from 'react';
import { Helmet } from 'react-helmet';

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
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index" />
        <meta
          name="keywords"
          content="aplicatie, eliminare, reciclare, gestionare responsabilă, medicamente expirate, medicamente nefolosite, protejare mediului, eco-friendly, conservarea naturii, sănătate comunitară, spitale, centre de colectare, reciclarea medicamentelor, prevenirea poluării, biodiversitate, sustenabilitate, conștientizare, inițiative ecologice, colaborare comunitară, responsabilitate civică, educație în domeniul sănătății"
        />
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
