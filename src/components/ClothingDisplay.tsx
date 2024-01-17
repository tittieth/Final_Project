import IClothingItem from '../models/IClothing';

type ClothingProps = {
  clothingItem: IClothingItem;
};

const ClothingDisplay: React.FC<ClothingProps> = ({ clothingItem }) => {
  return (
    <div key={clothingItem.id} className="clothing-wrapper">
      <input type="checkbox" />
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
