import { Article } from "src/types/article.types";
import { ceNeSpuneApaPeCareOBemDespreCumTraim } from "./ce-ne-spune-apa-pe-care-o-bem-despre-cum-traim";
import { deCeEuropaPuneNotaDePlataPentruPoluareaFarmaceutica } from "./de-ce-europa-pune-nota-de-plata-pentru-poluarea-farmaceutica";
import { deCeSuediaColecteaza80SiRomania5 } from "./de-ce-suedia-colecteaza-80-si-romania-5";

// To add a new article: create a new file in this folder and PREPEND it to this array (newest first).
export const ARTICLE_DATA: Article[] = [
  deCeEuropaPuneNotaDePlataPentruPoluareaFarmaceutica,
  ceNeSpuneApaPeCareOBemDespreCumTraim,
  deCeSuediaColecteaza80SiRomania5,
];
