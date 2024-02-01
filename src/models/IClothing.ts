export enum ClothingCategory {
  CLOTHES = 'clothes',
  SHOES = 'shoes',
  ACCESSORIES = 'accessories',
}

interface IClothingItem {
  id: number;
  category: ClothingCategory;
  description: string;
  image: string;
  weatherCondition: string | string[];
  temperature: (temperature: number) => boolean;
}

export default IClothingItem;
