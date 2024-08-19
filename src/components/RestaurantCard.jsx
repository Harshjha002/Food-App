import React from 'react';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resName, rating, time, cuisine, resAddress, imgId } = props;

  return (
    <div className="res-card bg-text-color-light rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
      <div className="res-image">
        <img src={CDN_URL + imgId} alt="Restaurant" className="w-full h-48 object-cover" />
      </div>
      <div className="res-info p-4">
        <h3 className="text-primary-color font-bold text-lg">{resName}</h3>
        <h4 className="text-secondary-color text-sm">{rating}⭐ | {time} mins ⌛</h4>
        <p className="res-cuisine text-text-color-dark text-sm mt-2">Cuisines: {cuisine}</p>
        <p className="res-address text-text-color-dark text-sm mt-1">Location: {resAddress}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
