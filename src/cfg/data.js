import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import Default from '../components/sections/Default';
import Contact from '../components/sections/Contact';
import Service from '../components/sections/Service';

export default {
  name: 'Company name',
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

        address: 'Pacific ocean',
        phone: '1234567890',
        email: 'example@example.com',
      },
      {
        id: 'services',
        headerType: 'Link',
        name: 'Services',
        component: Service,

        services: [
          {
            name: 'service one',
            shortDescription: 'Short description service one',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            img: 'imgUrl',
          },
        ],
      },
    ],
  },
  social: [
    {
      name: 'fb',
      link: 'https://www.facebook.com',
      icon: FiFacebook,
    },
    {
      name: 'tw',
      link: 'https://twitter.com',
      icon: FiTwitter,
    },
  ],
};
