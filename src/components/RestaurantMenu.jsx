import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { CDN_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';
import { MENU_ITEM_CDN_LINK } from '../utils/constants';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, locality, cloudinaryImageId } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu p-6 lg:p-12 bg-gray-50">
      {/* Restaurant Info Section */}
      <div className="res-info-main text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-primary-color">{name}</h1>
        <h2 className="text-2xl text-secondary-color mb-2">{locality}</h2>
        <h3 className="text-xl mb-2">{cuisines.join(', ')}</h3>
        <h3 className="text-lg text-gray-700 mb-4">{costForTwoMessage}</h3>
      </div>

      {/* Restaurant Image Section */}
      <div className="res-img-main mb-12">
        <img 
          src={CDN_URL + cloudinaryImageId} 
          alt="Restaurant" 
          className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
        />
      </div>

      {/* Menu Section */}
      <div className="res-menu">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-primary-color">Menu</h2>
        <ul className="space-y-6">
          {itemCards.map((item) => (
            <li 
              key={item.card.info.id} 
              className="flex flex-col lg:flex-row items-start p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-200"
            >
              {/* Menu Item Info */}
              <div className="menu-info flex-1">
                <h4 className="text-xl font-semibold text-primary-color mb-1">{item.card.info.name}</h4>
                <p className="text-gray-700 mb-2">{item.card.info.description}</p>
              </div>
              
              {/* Menu Item Image and Price */}
              <div className="menu-pic flex flex-col items-center">
                <img 
                  src={MENU_ITEM_CDN_LINK + item.card.info.imageId} 
                  alt="Menu Item" 
                  className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full mb-4 shadow-md transition-transform transform hover:scale-110"
                />
                <h4 className="item-price text-lg font-bold text-accent-color mb-2">Rs. {item.card.info.defaultPrice ? (item.card.info.defaultPrice ) / 100 : "299"} /-</h4>
                <button className="add-cart-btn px-4 py-2 bg-primary-color text-white rounded-md hover:bg-accent-color transition-transform transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
