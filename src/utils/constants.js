import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
import homeTopBanner4 from '../assets/home-top-banner-4.jpg';
import homeTopBanner2 from '../assets/home-top-banner-2.jpg';
import homeTopBanner3 from '../assets/home-top-banner-3.jpg';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'Hoa tai',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    image: homeTopBanner4,
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'Vòng cổ',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    image: homeTopBanner2,
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'Vòng tay',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    image: homeTopBanner3,
  },
];

export const products_url = 'http://localhost:5000/product';

export const single_product_url = `http://localhost:5000/product`;
