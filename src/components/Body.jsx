import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import useRestaurantsCards from '../utils/UseRestaurantsCards';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const restaurantListItems = useRestaurantsCards();
  const onlineStatus = useOnlineStatus();

  const filteredList = searchText
    ? restaurantListItems.filter((res) => 
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : restaurantListItems;

  const handleSearch = () => {
    const filtered = restaurantListItems.filter((res) => 
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  const renderList = filteredRestaurant.length > 0 || !searchText
    ? filteredList
    : [];

  if (onlineStatus === false) {
    return <h1 className="text-center text-xl font-bold mt-10">You are offline</h1>;
  }

  return (
    <div className="body p-6">
      <div className="search flex justify-center mb-8">
        <input 
          type="text" 
          className="p-3 border-2 border-border-color rounded-l-md outline-none w-72 text-base focus:border-secondary-color focus:shadow-lg transition duration-300"
          placeholder="Search for restaurants..."
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)} 
        />
        <button 
          onClick={handleSearch} 
          className="bg-primary-color text-text-color-light py-3 px-6 rounded-r-md hover:bg-secondary-color transform hover:scale-105 transition duration-300">
          Search
        </button>
      </div>
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurantListItems.length === 0 ? (
          <Shimmer />
        ) : (
          renderList.map((res) => (
            <Link key={res.info.id} to={'/restaurants/' + res.info.id}>
              <RestaurantCard
                resName={res.info.name}
                rating={res.info.avgRating}
                time={res.info.deliveryTime}
                cuisine={res.info.cuisines.join(', ')}
                resAddress={res.info.locality}
                imgId={res.info.cloudinaryImageId}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
