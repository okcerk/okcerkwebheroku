import signatureImage from "../images/signature.png";
import optionInktober from "../images/option-inktober.png";
import optionDigital from "../images/option-digital.png";
import optionComics from "../images/option-comics.png";
import optionInk from "../images/option-ink.png";
import optionEscuadron37 from "../images/option-escuadron37.png";
import optionBlog from "../images/option-blog.png";
import optionAbout from "../images/option-about.png";

export const mainNavLinks = [
  { title: "Home", image: signatureImage, link: "/" },
  { title: "Digital", image: optionDigital, link: "/digital" },
  { title: "Comics", image: optionComics, link: "/comics" },
  { title: "Ink", image: optionInk, link: "/ink" },
  { title: "Escuadron 37", image: optionEscuadron37, link: "/escuadron37" },
];

export const secondaryNavLinks = [
  { title: "Inktober", image: optionInktober, link: "/inktober" },
  {
    title: "Blog",
    image: optionBlog,
    externalUri: "http://www.okcerk2.blogspot.com/",
  },
  { title: "About", image: optionAbout, link: "/about" },
];
