export const DATA_LIST = [{ text: "text" }];

export interface TeamMember {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  description: string;
}
export const teamMembers = [
  {
    name: "Mark Butler",
    role: "Lead Data Annotator",
    phone: "972.215.8214",
    email: "darrin.araki@cbpacific.com",
    image: "/assets/images/home/webp/butler.webp",
    columnClass: "px-[10px] w-full md:w-1/2 flex justify-center",
    description:
      "Sarah Thompson brings over five years of experience in data labeling and annotation to our team. With a keen eye for detail and a passion for precision, Sarah leads our team of annotators, ensuring every piece of data is meticulously labeled and verified.",
  },
  {
    name: "Corinne Crabtree",
    role: "Lead Data Annotator",
    phone: "972.215.8214",
    email: "darrin.araki@cbpacific.com",
    image: "/assets/images/home/webp/corrinne.webp",
    columnClass: "px-[10px] w-full md:w-1/2 flex justify-center md:mt-0 mt-12",
    description:
      "Sarah Thompson brings over five years of experience in data labeling and annotation to our team. With a keen eye for detail and a passion for precision, Sarah leads our team of annotators, ensuring every piece of data is meticulously labeled and verified.",
  },
];
