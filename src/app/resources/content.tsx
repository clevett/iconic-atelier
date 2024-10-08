import { InlineCode } from "@/once-ui/components";

//TODO: REMOVE THIS
const person = {
  firstName: "Loki",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Artist",
  avatar: "/images/avatar.jpg",
  location: "Iceland/Reykjavik", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Polish"], // optional: Leave the array empty if you don't want to display languages
};

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
  languages: [languages.en, languages.pl], // optional: Leave the array empty if you don't want to display languages
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

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.linkedin.com/company/once-ui/",
  },
];

const home = {
  label: "Contact",
  title: `Iconic Atelier`,
  description: `An art studio located in Reykjavik, Iceland.`,
  address: "Skyggnisbraut 13, Reykjavik 113",
  headline: <>Iconic Atelier</>,
  subline: (
    <>
      A art studio located in Reykjavik, Iceland. We specialize in paintings,
      nails, and tattoos.
    </>
  ),
};

const news = {
  label: "News",
  title: "Iconic Atelier",
  description: `Read what Iconic Atelier has been up to recently`,
  // Create new news posts by adding a new .mdx file to app/news/posts
  // All posts will be listed on the /news route
};
export type Gallery = {
  label: string;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
    orientation: "horizontal" | "vertical";
  }[];
};

const getImages = (folder: string, number: number) => {
  const images: Gallery["images"] = [];
  for (let i = 1; i <= number; i++) {
    images.push({
      src: `/images/${folder}/image (${i}).jpg`,
      alt: "image",
      orientation: "vertical",
    });
  }
  return images;
};

const paintings: Gallery = {
  label: "Paintings",
  title: `Paintings by ${loki.name}`,
  description: `A paintings collection by ${loki.name}`,
  images: getImages("paintings", 23),
};

const nails: Gallery = {
  label: "Nails",
  title: "Nails by Gabriela",
  description: `A nail collection by ${gabby.name}`,
  images: getImages("nails", 25),
};

const tattoos: Gallery = {
  label: "Tattoos",
  title: `Tattoos by ${loki.name}`,
  description: `A tattoos collection by ${loki.name}`,
  images: getImages("tattoos", 139),
};

export { person, social, newsletter, home, news, paintings, nails, tattoos };
