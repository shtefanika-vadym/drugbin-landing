import collectImage from "src/assets/images/article_collect.png";
import guidImage from "src/assets/images/article_guid.png";
import preventImage from "src/assets/images/article_prevent.png";
import {
  contentRezistentaLaAntibiotice,
  contentTutorial,
  gestionareaDeseurilorMedicamentoase,
} from "./article";

export const ARTICLE_DATA = [
  {
    title: "Gestionarea Deșeurilor Medicamentoase",
    description: `Instrucțiune privind modalitatea de gestionare a deșeurilor de medicamente neutilizate și/sau expirate provenite de la populație
    Văzând Referatul Direcției generale sănătate publică și programe de sănătate nr. A.R./6.227 din 5.04.2024 și Adresa Institutului Național de Sănătate Publică nr. 380 din 5.03.2024,
    având în vedere art. 2 alin. (6), art. 5 lit. j) și art. 244 alin. (6) din Legea nr. 95/2006 privind reforma în domeniul sănătății, republicată, cu modificările și completările ulterioare,
    în temeiul art. 7 alin. (4) din Hotărârea Guvernului nr. 144/2010 privind organizarea și funcționarea Ministerului Sănătății, cu modificările și completările ulterioare,
    ministrul sănătății emite prezenta instrucțiune.`,
    content: gestionareaDeseurilorMedicamentoase,
    image: collectImage,
    path: "gestionarea-deseurilor-medicamentoase",
    readMore: [
      {
        date: "21 aprilie 2024",
        title: "Rezistența la Antibiotice în România",
        description:
          "În România, rezistența la antibiotice a devenit o problemă majoră de sănătate publică, cu consecințe alarmante asupra eficacității tratamentelor și a sănătății populației în general.",
        path: "rezistenta-la-antibiotice-in-romania",
        label: "Educație",
      },
      {
        date: "21 aprilie 2024",
        title: "DrugBin: Ghidul complet pentru utilizatori",
        description:
          "În era preocupărilor pentru mediu și sănătate publică, este important să avem grijă de modul în care gestionăm medicamentele expirate sau nefolosite.",
        path: "drugbin-ghid-complet-pentru-utilizatori",
        label: "Ghiduri",
      },
    ],
  },
  {
    title: "Rezistența la Antibiotice în România",
    description:
      "În România, rezistența la antibiotice a devenit o problemă majoră de sănătate publică, cu consecințe alarmante asupra eficacității tratamentelor și a sănătății populației în general. Această amenințare crescândă este alimentată de o serie de factori, inclusiv prescrierea excesivă și neadecvată a antibioticelor, utilizarea lor în industria agricolă și lipsa de conștientizare a populației cu privire la importanța utilizării responsabile a acestor medicamente.",
    content: contentRezistentaLaAntibiotice,
    image: preventImage,
    path: "rezistenta-la-antibiotice-in-romania",
    readMore: [
      {
        date: "4 aprilie 2024",
        title: "Gestionarea Deșeurilor Medicamentoase",
        description: `Instrucțiune privind modalitatea de gestionare a deșeurilor de medicamente neutilizate și/sau expirate provenite de la populație
        Văzând Referatul Direcției generale sănătate publică și programe de sănătate nr. A.R./6.227 din 5.04.2024 și Adresa Institutului Național de Sănătate Publică nr. 380 din 5.03.2024,
        având în vedere art. 2 alin. (6), art. 5 lit. j) și art. 244 alin. (6) din Legea nr. 95/2006 privind reforma în domeniul sănătății, republicată, cu modificările și completările ulterioare,
        în temeiul art. 7 alin. (4) din Hotărârea Guvernului nr. 144/2010 privind organizarea și funcționarea Ministerului Sănătății, cu modificările și completările ulterioare,
        ministrul sănătății emite prezenta instrucțiune.`,
        path: "gestionarea-deseurilor-medicamentoase",
        label: "Educație",
      },
      {
        date: "21 aprilie 2024",
        title: "DrugBin: Ghidul complet pentru utilizatori",
        description:
          "În era preocupărilor pentru mediu și sănătate publică, este important să avem grijă de modul în care gestionăm medicamentele expirate sau nefolosite.",
        path: "drugbin-ghid-complet-pentru-utilizatori",
        label: "Ghiduri",
      },
    ],
  },
  {
    title: "DrugBin: Ghidul complet pentru utilizatori",
    description:
      "În era preocupărilor pentru mediu și sănătate publică, este important să avem grijă de modul în care gestionăm medicamentele expirate sau nefolosite. Colectarea acestora nu numai că protejează mediul înconjurător, dar și previne riscurile legate de consumul incorect sau neadecvat al acestor produse. Cu ajutorul aplicației noastre, procesul de predare a acestor medicamente este simplificat și eficientizat. Iată un ghid pas cu pas pentru utilizarea aplicației noastre în acest sens:",
    content: contentTutorial,
    image: guidImage,
    path: "drugbin-ghid-complet-pentru-utilizatori",
    readMore: [
      {
        date: "4 aprilie 2024",
        title: "Gestionarea Deșeurilor Medicamentoase",
        description: `Instrucțiune privind modalitatea de gestionare a deșeurilor de medicamente neutilizate și/sau expirate provenite de la populație
        Văzând Referatul Direcției generale sănătate publică și programe de sănătate nr. A.R./6.227 din 5.04.2024 și Adresa Institutului Național de Sănătate Publică nr. 380 din 5.03.2024,
        având în vedere art. 2 alin. (6), art. 5 lit. j) și art. 244 alin. (6) din Legea nr. 95/2006 privind reforma în domeniul sănătății, republicată, cu modificările și completările ulterioare,
        în temeiul art. 7 alin. (4) din Hotărârea Guvernului nr. 144/2010 privind organizarea și funcționarea Ministerului Sănătății, cu modificările și completările ulterioare,
        ministrul sănătății emite prezenta instrucțiune.`,
        path: "gestionarea-deseurilor-medicamentoase",
        label: "Educație",
      },
      {
        date: "21 aprilie 2024",
        title: "Rezistența la Antibiotice în România",
        description:
          "În România, rezistența la antibiotice a devenit o problemă majoră de sănătate publică, cu consecințe alarmante asupra eficacității tratamentelor și a sănătății populației în general.",
        path: "rezistenta-la-antibiotice-in-romania",
        label: "Educație",
      },
    ],
  },
];

// {
//   title: "Colectarea medicamentelor expirate sau neutilizate",
//   description:
//     "Începând cu 1 ianuarie 2024, spitalele publice și private din România sunt autorizate să colecteze medicamente expirate sau neutilizate, conform prevederilor Legii nr. 95/2006 privind reforma în domeniul sănătății",
//   content: contentColectareMedicamente,
//   image: collectImage,
//   path: "colectarea-medicamentelor-expirate-sau-neutilizate",
//   readMore: [
//     {
//       date: "21 aprilie 2024",
//       title: "Rezistența la Antibiotice în România",
//       description:
//         "În România, rezistența la antibiotice a devenit o problemă majoră de sănătate publică, cu consecințe alarmante asupra eficacității tratamentelor și a sănătății populației în general.",
//       path: "rezistenta-la-antibiotice-in-romania",
//       label: "Educație",
//     },
//     {
//       date: "21 aprilie 2024",
//       title: "DrugBin: Ghidul complet pentru utilizatori",
//       description:
//         "În era preocupărilor pentru mediu și sănătate publică, este important să avem grijă de modul în care gestionăm medicamentele expirate sau nefolosite.",
//       path: "drugbin-ghid-complet-pentru-utilizatori",
//       label: "Ghiduri",
//     },
//   ],
// },
