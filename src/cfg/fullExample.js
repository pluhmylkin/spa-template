import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Default from '../components/sections/Default';
import Contact from '../components/sections/Contact';
import Service from '../components/sections/Service/Service';

export default {
  name: 'Andrei Pliukhaev',
  body: {
    sections: [
      {
        id: 'about',
        headerType: 'Link',
        name: 'About',
        component: Default,

        body:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 'contacts',
        headerType: 'Link',
        name: 'Contacts',
        component: Contact,

        address: 'Russia, Krasnoyarsk',
        phone: '1234567890',
        email: 'example@example.com',
      },
      {
        id: 'projects',
        headerType: 'Link',
        name: 'Projects',
        component: Service,

        services: [
          {
            name: 'SPA Template',
            shortDescription: 'Short description SPA template',
            description: 'SPA TEMPLATE',
            img: '',
          },
        ],
      },
    ],
  },
  social: [
    {
      name: 'Github',
      link: 'https://github.com/pluhmylkin',
      icon: FiGithub,
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/andrei-pliukhaev/',
      icon: FiLinkedin,
    },
  ],
};
