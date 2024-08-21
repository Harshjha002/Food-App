import React from 'react';
import { MENU_ITEM_CDN_LINK } from '../utils/constants';

const ItemList = ({ items }) => {
  return (
    <div className="item-list space-y-6">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex flex-col lg:flex-row justify-between items-start p-6 bg-white shadow-lg rounded-lg border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          {/* Item Info */}
          <div className="flex-1">
            <h4 className="text-2xl font-semibold text-[#F3CA52] mb-3">{item.card.info.name}</h4>
            <p className="text-gray-800 text-sm">{item.card.info.description}</p>
          </div>

          {/* Item Image and Price */}
          <div className="item-img-price flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 space-y-4 lg:space-y-0 mt-4 lg:mt-0">
            <img
              className="w-32 h-32 object-cover rounded-lg border-2 border-[#F3CA52] shadow-md"
              src={MENU_ITEM_CDN_LINK + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <div className="text-xl text-[#0A6847] font-bold">
              ₹{item.card.info.price / 100}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
