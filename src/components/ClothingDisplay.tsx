import { useState } from 'react';
import IClothingItem from '../models/IClothing';

type ClothingProps = {
  clothingItem: IClothingItem;
  onClothesChange: (checked: boolean) => void;
};

const ClothingDisplay: React.FC<ClothingProps> = ({ clothingItem, onClothesChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (id: number) => {
    setChecked(!checked);
    onClothesChange(!checked);
    console.log(id);
  };

  return (
    <div key={clothingItem.id} className="clothing-wrapper">
      <input type="checkbox" checked={checked} onChange={() => handleChange(clothingItem.id)} />
      <div className="img-wrapper">
        <img
          src={clothingItem.image}
          alt={clothingItem.description}
          style={{ width: '100px', height: '100px' }}
          loading="lazy"
        />
      </div>
      <p>{clothingItem.description}</p>
    </div>
  );
};

export default ClothingDisplay;
