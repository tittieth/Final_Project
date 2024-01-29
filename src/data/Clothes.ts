import IClothingItem from '../models/IClothing';

const clothesData: IClothingItem[] = [
  {
    id: 1,
    description: 'Regnkläder',
    image: '/public/img-clothes/regnkläder.webp',
    weatherCondition: 'rain',
    temperature: (temperature: number) => temperature > 1 && temperature < 15,
  },
  {
    id: 2,
    description: 'Gummistövlar',
    image: '/public/img-clothes/gummistövel.webp',
    weatherCondition: 'rain',
    temperature: (temperature: number) => temperature >= 5,
  },
  {
    id: 3,
    description: 'Overall',
    image: '/public/img-clothes/overall.webp',
    weatherCondition: ['snow', 'clear', 'clouds'],
    temperature: (temperature: number) => temperature <= 4,
  },
  {
    id: 4,
    description: 'Sandal',
    image: '/public/img-clothes/sandal.jpg',
    weatherCondition: ['clear', 'clouds'],
    temperature: (temperature: number) => temperature >= 18,
  },
  {
    id: 5,
    description: 'Tjocka Vantar',
    image: '/public/img-clothes/vintervantar.webp',
    weatherCondition: ['clouds', 'snow', 'clear'],
    temperature: (temperature: number) => temperature < 5,
  },
  {
    id: 6,
    description: 'Vindfleece',
    image: '/public/img-clothes/vindfleece.webp',
    weatherCondition: ['clouds', 'clear'],
    temperature: (temperature: number) => temperature > 10 && temperature < 15,
  },
  {
    id: 7,
    description: 'Keps',
    image: '/public/img-clothes/keps.webp',
    weatherCondition: ['clouds', 'clear', 'rain'],
    temperature: (temperature: number) => temperature > 15,
  },
  {
    id: 8,
    description: 'Regnvantar',
    image: '/public/img-clothes/regnvantar.webp',
    weatherCondition: 'rain',
    temperature: (temperature: number) => temperature > 0 && temperature < 15,
  },
  {
    id: 9,
    description: 'Skaljacka',
    image: '/public/img-clothes/skaljacka.webp',
    weatherCondition: ['clouds', 'snow'],
    temperature: (temperature: number) => temperature > 10 && temperature <= 18,
  },
  {
    id: 10,
    description: 'kängor',
    image: '/public/img-clothes/skor.webp',
    weatherCondition: ['clouds', 'snow', 'clear'],
    temperature: (temperature: number) => temperature > -5 && temperature < 15,
  },
  {
    id: 11,
    description: 'Tunn mössa',
    image: '/public/img-clothes/tunnmössa.webp',
    weatherCondition: ['clouds', 'rain'],
    temperature: (temperature: number) => temperature >= 10 && temperature < 15,
  },
  {
    id: 12,
    description: 'Vinterjacka',
    image: '/public/img-clothes/vinterjacka.webp',
    weatherCondition: ['clouds', 'snow'],
    temperature: (temperature: number) => temperature >= 5 && temperature <= 10,
  },
  {
    id: 13,
    description: 'Tjock mössa',
    image: '/public/img-clothes/vintermössa.webp',
    weatherCondition: ['clouds', 'snow', 'rain'],
    temperature: (temperature: number) => temperature < 10,
  },
  {
    id: 14,
    description: 'Överdragsbyxor',
    image: '/public/img-clothes/överdragsbyxor.webp',
    weatherCondition: ['clouds', 'snow'],
    temperature: (temperature: number) => temperature >= 5 && temperature < 10,
  },
];

export default clothesData;
