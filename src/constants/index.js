import { insta, link, twitter, facebook } from "../assets";

const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "team",
      title: "Meet the Team",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "materials",
      title: "Materials",
    },
  ];

  const socials = [
    {
      name: 'twitter',
      url: twitter,
    },
    {
      name: 'linkedin',
      url: link,
    },
    {
      name: 'instagram',
      url: insta,
    },
    {
      name: 'facebook',
      url: facebook,
    },
  ];

  export { navLinks, socials };