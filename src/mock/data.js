import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Kanwardeep Kanwar',
  subtitle: 'BMO Mortgage Specialist',
  cta: 'Know More',
  img: 'rateCover.png',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  subTitle: 'How Can I Assist You?',
  paragraphOne:
    "Whether you are purchasing a first home or your next home, choosing the right mortgage is an important undertaking. I am committed to helping you find the right financing to suit your needs and to make your mortgage experience as uncomplicated as possible. Let's set an appointment for a time and place that is convenient and get started.",
  paragraphTwo:
    'With access to competitive borrowing solutions, I can help you understand your options and find the right solution to suit your unique needs.',
  paragraphThree: 'To get started - contact me today!',
};

// BENEFITS DATA
export const benefitsData = [
  {
    id: nanoid(),
    img1: 'rates.png',
    img2: 'renoPlans.png',
    title1: '1',
    title2: '2',
  },
  {
    id: nanoid(),
    img1: 'refiance.png',
    img2: null,
    title1: '1',
    title2: '2',
  },
];

// CONTACT DATA
export const contactData = {
  cta1: "I'm always available to take your call and reply to your email.",
  cta2: 'Contact me anytime to book an appointment.',
  email: 'kanwardeep.kanwar@bmo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/kdkanwar',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://ca.linkedin.com/in/mortgagewithkd',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/kd.bmo/',
    },
  ],
};
