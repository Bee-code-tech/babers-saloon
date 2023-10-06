// data goes into this file 
import catImg01 from './assets/img/cart.png';
import catImg02 from './assets/img/clipper.png';
import catImg03 from './assets/img/forum.png';
import catImg04 from './assets/img/headphone.png';
import DoctorsImg from './assets/img/barber01.jpg'
import DoctorsImg02 from './assets/img/baber02.jpg'
import DoctorsImg03 from './assets/img/barber03.jpg'


export const barbers =[
  {
    img: DoctorsImg,
    name: 'Ryan Jack',
    badge: 'Top Rated',
    patients: '+1200 customers',
    location: 'San Frascico',
    reviews: 5

  },
  {
    img: DoctorsImg02,
    name: 'Scott Mcall',
    badge: 'Top Rated',
    patients: '+1200 customers',
    location: 'San Frascico',
    reviews: 5

  },
  {
    img: DoctorsImg03,
    name: 'Austin Dave',
    badge: 'Top Rated',
    patients: '+1200 customers',
    location: 'San Frascico',
    reviews: 5

  }
]


export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export  const statistics = [
  { value: "60+", label: "Brands" },
  { value: "70+", label: "Shops" },
  { value: "100%", label: "Satisfaction" },
];

export const categories = [
  {
    img: catImg01,
    title: "Visit Marketplace",
    content:
      "We have a marketplace for all members to showcase barbing equipment with a link to their social media accounts. This service is absolutely free!",
    btnText: "Go to Marketplace",
  },
  {
    img: catImg02,
    title: "View All Baber Shops",
    content:
      "Comprehensive list of all barbers can be accessed from here.If you a need a barber to book solo or get a barber for your organization",
    btnText: "View All Babers",
  },
  {
    img: catImg03,
    title: "Go To Forum",
    content:
      "This is where all barbers around the world connect to discuss issues and make connection. THe forum is moderated to ensure a safe space for all voices",
    btnText: "Go to Forum",
  },
  {
    img: catImg04,
    title: "Request For Assistance",
    content:
      "Anyone in need of urgent assistance can apply here. The funding is provided by various Government agencies and Private contractors",
    btnText: "Request for Assistance",
  },
];