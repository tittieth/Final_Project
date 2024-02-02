import IClothingItem, { ClothingCategory } from '../models/IClothing';

const clothesData: IClothingItem[] = [
  {
    id: 1,
    category: ClothingCategory.CLOTHES,
    description: 'Regnkläder',
    image: '/Final_Project/img-clothes/regnkläder.webp',
    weatherCondition: 'rain',
    temperature: (temperature: number) => temperature > 0 && temperature < 22,
  },
  {
    id: 2,
    category: ClothingCategory.SHOES,
    description: 'Gummistövlar',
    image: '/Final_Project/img-clothes/gummistövel.webp',
    weatherCondition: 'rain',
    temperature: (temperature: number) => temperature >= 0,
  },
  {
    id: 3,
    category: ClothingCategory.CLOTHES,
    description: 'Overall',
    image: '/Final_Project/img-clothes/overall.webp',
    weatherCondition: ['snow', 'clear', 'clouds'],
    temperature: (temperature: number) => temperature <= 4,
  },
  {
    id: 4,
    category: ClothingCategory.SHOES,
    description: 'Sandal',
    image: '/Final_Project/img-clothes/sandal.jpg',
    weatherCondition: ['clear', 'clouds'],
    temperature: (temperature: number) => temperature >= 20,
  },
  {
    id: 5,
    category: ClothingCategory.ACCESSORIES,
    description: 'Tjocka Vantar',
    image: '/Final_Project/img-clothes/vintervantar.webp',
    weatherCondition: ['clouds', 'snow', 'clear'],
    temperature: (temperature: number) => temperature < 10,
  },
  {
    id: 6,
    category: ClothingCategory.CLOTHES,
    description: 'Vindfleece',
    image: '/Final_Project/img-clothes/vindfleece.webp',
    weatherCondition: ['clouds', 'clear'],
    temperature: (temperature: number) => temperature > 10 && temperature < 20,
  },
  {
    id: 7,
    category: ClothingCategory.ACCESSORIES,
    description: 'Keps',
    image: '/Final_Project/img-clothes/keps.webp',
    weatherCondition: ['clouds', 'clear', 'rain'],
    temperature: (temperature: number) => temperature > 15,
  },
  {
    id: 8,
    category: ClothingCategory.ACCESSORIES,
    description: 'Regnvantar',
    image: '/Final_Project/img-clothes/regnvantar.webp',
    weatherCondition: 'rain',
    temperature: (temperature: number) => temperature > 0 && temperature < 15,
  },
  {
    id: 9,
    category: ClothingCategory.CLOTHES,
    description: 'Skaljacka',
    image: '/Final_Project/img-clothes/skaljacka.webp',
    weatherCondition: ['clouds', 'clear'],
    temperature: (temperature: number) => temperature > 10 && temperature <= 15,
  },
  {
    id: 10,
    category: ClothingCategory.SHOES,
    description: 'Kängor',
    image: '/Final_Project/img-clothes/skor.webp',
    weatherCondition: ['clouds', 'clear'],
    temperature: (temperature: number) => temperature >= 0 && temperature < 12,
  },
  {
    id: 11,
    category: ClothingCategory.ACCESSORIES,
    description: 'Tunn mössa',
    image: '/Final_Project/img-clothes/tunnmössa.webp',
    weatherCondition: ['clouds', 'rain'],
    temperature: (temperature: number) => temperature >= 10 && temperature < 15,
  },
  {
    id: 12,
    category: ClothingCategory.CLOTHES,
    description: 'Vinterjacka',
    image: '/Final_Project/img-clothes/vinterjacka.webp',
    weatherCondition: ['clouds', 'clear'],
    temperature: (temperature: number) => temperature >= 5 && temperature <= 10,
  },
  {
    id: 13,
    category: ClothingCategory.ACCESSORIES,
    description: 'Tjock mössa',
    image: '/Final_Project/img-clothes/vintermössa.webp',
    weatherCondition: ['clouds', 'snow', 'rain'],
    temperature: (temperature: number) => temperature < 10,
  },
  {
    id: 14,
    category: ClothingCategory.CLOTHES,
    description: 'Överdragsbyxor',
    image: '/Final_Project/img-clothes/överdragsbyxor.webp',
    weatherCondition: ['clouds', 'clear'],
    temperature: (temperature: number) => temperature >= 5 && temperature <= 10,
  },
  {
    id: 15,
    category: ClothingCategory.ACCESSORIES,
    description: 'Tunna vantar',
    image: '/Final_Project/img-clothes/tunna-vantar.webp',
    weatherCondition: ['clouds', 'clear'],
    temperature: (temperature: number) => temperature >= 10 && temperature <= 15,
  },
  {
    id: 16,
    category: ClothingCategory.SHOES,
    description: 'Vinterstövlar',
    image: '/Final_Project/img-clothes/vinterstövel.jpg',
    weatherCondition: ['clouds', 'clear', 'snow'],
    temperature: (temperature: number) => temperature < 0,
  },
  {
    id: 17,
    category: ClothingCategory.SHOES,
    description: 'Gympaskor',
    image: '/Final_Project/img-clothes/sneakers.jpg',
    weatherCondition: ['clouds', 'clear'],
    temperature: (temperature: number) => temperature > 12 && temperature < 20,
  },
];

export default clothesData;
