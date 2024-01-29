import { insta, link, twitter, facebook, owner, finance, sales, draughting, production, billy, fran, bonita, cherise } from "../assets";

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

  const contactPeople = [
    {
      name: 'Billy Gissing',
      email: 'billy@plsteel.co.za',
      cell: '079 796 3113',
      position: 'Production'
    },
    {
      name: 'Bonita Sherrard',
      email: 'bonitas@plsteel.co.za',
      cell: '083 548 4541',
      position: 'Accounts'
    },
    {
      name: 'Francois Oberholster',
      email: 'drawingoffice8@plsteel.co.za',
      cell: '082 325 4053',
      position: 'Drawing'
    },
    {
      name: 'Cherise Pollen',
      email: 'cherise@plsteel.co.za',
      cell: '072 507 3364',
      position: 'Sales'
    },
  ];

  export const exploreTeams = [
    {
      id: 'team-1',
      imgUrl: cherise,
      title: 'Sales Team',
      teamManager: "Cherise Pollen"
    },
    {
      id: 'team-2',
      imgUrl: owner,
      title: 'Managing Director',
      teamManager: "Peter Elsmore"
    },
    {
      id: 'team-3',
      imgUrl: fran,
      title: 'Draughting Team',
      teamManager: "Francois Oberholster"
    },
    {
      id: 'team-4',
      imgUrl: bonita,
      title: 'Finance Team',
      teamManager: "Bonita Sherrard"
    },
    {
      id: 'team-5',
      imgUrl: billy,
      title: 'Production Team',
      teamManager: "Billy Gissing"
    },
  ];

  export { navLinks, socials, contactPeople };