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
      link: ''
    },
    {
      name: 'linkedin',
      url: link,
      link: 'https://www.linkedin.com/organization-guest/company/pl-steel-services-profile?_l=en_US'
    },
    {
      name: 'instagram',
      url: insta,
      link: ''
    },
    {
      name: 'facebook',
      url: facebook,
      link: 'https://www.facebook.com/PLSteelServices2020'
    },
  ];

  export { navLinks, socials };