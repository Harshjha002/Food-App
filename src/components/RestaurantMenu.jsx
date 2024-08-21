import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { CDN_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null); // Start with `null` for no category shown
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, locality, cloudinaryImageId } = resInfo?.data?.cards[2]?.card?.card?.info;
  const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const handleCategoryClick = (index) => {
    setShowIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center p-6 lg:p-12 bg-gray-50 min-h-screen">
      {/* Restaurant Info Section */}
      <div className="res-info text-center lg:text-left mb-12 w-full max-w-4xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-primary-color">{name}</h1>
        <p className="text-xl text-secondary-color mb-2">Cuisines: {cuisines.join(", ")}</p>
        <p className="text-lg text-gray-600 mb-6">Address: {locality}</p>
        <div className="res-img flex justify-center lg:justify-start mb-12">
          <img
            src={CDN_URL + cloudinaryImageId}
            alt={name}
            className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-3xl"
          />
        </div>
      </div>

      {/* Restaurant Menu Section */}
      <div className="res-menu w-full max-w-4xl space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-gray-700">Menu</h2>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <RestaurantCategory 
              key={category?.card?.card?.title} 
              data={category?.card?.card} 
              showItems={index === showIndex} 
              setShowIndex={() => handleCategoryClick(index)} 
            />
          ))
        ) : (
          <p className="text-center text-gray-600">No menu items available.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
