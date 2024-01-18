import IClothingItem from '../models/IClothing';

const clothesData: IClothingItem[] = [
  {
    id: 1,
    description: 'Regnkläder',
    image: '/public/img-clothes/regnkläder.webp',
    weatherCondition: 'rain',
    temperature: (temperature: number) => temperature <= 2 && temperature < 20,
  },
  {
    id: 2,
    description: 'Gummistövlar',
    image: '/public/img-clothes/gummistövel.webp',
    weatherCondition: 'rain',
    temperature: (temperature: number) => temperature <= 10,
  },
  {
    id: 3,
    description: 'Overall',
    image: '/public/img-clothes/overall.webp',
    weatherCondition: 'snow',
    temperature: (temperature: number) => temperature <= 0,
  },
  {
    id: 4,
    description: 'Sandal',
    image: '/public/img-clothes/sandal.jpg',
    weatherCondition: 'clear',
    temperature: (temperature: number) => temperature >= 10 && temperature < 20,
  },
  {
    id: 5,
    description: 'Tjocka Vantar',
    image: '/public/img-clothes/vintervantar.webp',
    weatherCondition: ['clouds', 'snow'],
    temperature: (temperature: number) => temperature < 5,
  },
  {
    id: 6,
    description: 'Vindfleece',
    image: '/public/img-clothes/vindfleece.webp',
    weatherCondition: ['clouds', 'snow'],
    temperature: (temperature: number) => temperature > 0 && temperature < 5,
  },
];

export default clothesData;
