//Font - Eina 01
//https://github.com/ionic-team/ionic-legacy-docs/tree/master/content/docs/v3/fonts/eina

const location = {
  rvk: "Iceland/Reykjavik",
};

const languages = {
  en: "English",
  pl: "Polish",
};

const loki = {
  firstName: "Loki",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Artist",
  avatar: "/images/avatar.jpg",
  location: location.rvk,
  languages: [languages.en, languages.pl],
};

const gabby = {
  firstName: "Gabriela",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Nail Technician",
  avatar: "/images/avatar.jpg",
  location: location.rvk,
  languages: [languages.en, languages.pl],
};

const social = [
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/iconicatelierr",
    dm: "https://m.me/iconicatelierr",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/iconicatelier_",
    dm: "https://instagram.com/m/iconicatelier_",
  },
];

const home = {
  label: "About",
  title: `Iconic Atelier`,
  description: `An art studio located in Reykjavik, Iceland.`,
  address: "Skyggnisbraut 13, Reykjavik 113",
  headline: (
    <span>
      Iconic
      <br /> Atelier
      <span style={{ color: "#d20306" }}>.</span>
    </span>
  ),
  subline: (
    <>
      Art Gallery located in Skyggnisbraut 13, 113 Reykjavik - In this art space
      u can buy art, make tattoos/nails and more.
    </>
  ),
};

export type Image = {
  src: string;
  alt: string;
  orientation: "horizontal" | "vertical";
  id: string;
};

export type Gallery = {
  label: string;
  title: string;
  description: string;
  images: Image[];
};

const getImages = (
  folder: string,
  number: number,
  orientation: "vertical" | "horizontal" = "vertical"
) => {
  const images: Gallery["images"] = [];
  for (let i = 1; i <= number; i++) {
    images.push({
      alt: "image",
      id: `${folder}-${number}-${i}`,
      orientation,
      src: `/images/${folder}/image (${i}).jpg`,
    });
  }
  return images;
};

const paintings: Gallery = {
  label: "Paintings",
  title: `Paintings by Iconic Atelier`,
  description: `A paintings collection by ${loki.name}`,
  images: getImages("paintings", 23, "horizontal"),
};

const nails: Gallery = {
  label: "Nails",
  title: "Nails by Iconic Atelier",
  description: `A nail collection by ${gabby.name}`,
  images: getImages("nails", 25),
};

const tattoos: Gallery = {
  label: "Tattoos",
  title: `Tattoos by Iconic Atelier`,
  description: `A tattoos collection by ${loki.name}`,
  images: getImages("tattoos", 99),
};

const contact = {
  label: "Contact",
  title: "Contact Iconic Atelier",
  description: `Get in touch with Iconic Atelier`,
  address: "Skyggnisbraut 13, Reykjavik 113",
  headline: "Contact Us",
  subline: (
    <>
      If you have any questions, please don't hesitate to contact us. We are
      happy to help you.
    </>
  ),
};

export { social, home, paintings, nails, tattoos, contact, location };
