interface IClothingItem {
  id: number;
  description: string;
  image: string;
  weatherCondition: string | string[];
  temperature: (temperature: number) => boolean;
}

export default IClothingItem;
