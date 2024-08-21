import React from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data, setShowIndex, showItems }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="border-b border-gray-300">
      <div
        className="flex justify-between items-center cursor-pointer p-4 bg-[#F6E9B2] hover:bg-[#F3CA52] transition-colors duration-300 ease-in-out"
        onClick={handleClick}
      >
        <span className="text-lg font-semibold text-[#0A6847]">{data.title}</span>
        <span>{showItems ? '⬆️' : '⬇️'}</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
