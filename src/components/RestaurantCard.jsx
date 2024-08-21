import React from 'react';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resName, cuisines, resRating, resLocation, resImg, resTime }) => {
  return (
    <div className="card bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out p-6 max-w-sm">
      <div className="resImg overflow-hidden rounded-lg mb-4">
        <img src={CDN_URL + resImg} alt={resName} className="w-full h-48 object-cover rounded-lg" />
      </div>
      <div className="resInfo text-center">
        <h2 className="text-2xl font-bold text-[#0A6847] mb-2">{resName}</h2>
        <h3 className="text-lg text-[#7ABA78] mb-2">{resRating}⭐ || {resTime} mins⌛</h3>
        <p className="text-gray-600 mb-2">{cuisines}</p>
        <p className="text-gray-600">Location: {resLocation}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
