import React, { useState, useContext } from 'react';
import RestaurantCard from './RestaurantCard';
import useRestaurantsCards from '../utils/UseRestaurantsCards';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

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
    return <h1 className="text-center text-xl font-bold mt-10 text-[#0A6847]">You are offline</h1>;
  }

  const { setUserName, loggedInUser } = useContext(UserContext);

  return (
    <div className="body p-6 bg-[#F6E9B2] min-h-screen">
      <div className="flex justify-center mb-8">
  <div className="search w-3/5 flex items-center justify-center mr-4">
    <input
      type="text"
      className="p-3 border-2 border-[#0A6847] rounded-l-md outline-none w-full text-base focus:border-[#7ABA78] focus:shadow-lg transition duration-300"
      placeholder="Search for restaurants..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
    <button
      onClick={handleSearch}
      className="bg-[#F3CA52] text-white py-3 px-6 rounded-r-md hover:bg-[#0A6847] transform hover:scale-105 transition duration-300">
      Search
    </button>
  </div>
  <div className="userUpdate w-2/5 flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    <label htmlFor="UserName" className="text-lg font-semibold mb-2 text-[#F3CA52]">New Username</label>
    <input
      type="text"
      onChange={(e) => setUserName(e.target.value)}
      value={loggedInUser}
      className="border border-gray-300 rounded-lg p-3 w-full text-base focus:outline-none focus:ring-2 focus:ring-[#F3CA52] focus:border-transparent"
      placeholder="Enter new username"
    />
  </div>
</div>
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {restaurantListItems.length === 0 ? (
          <Shimmer />
        ) : (
          renderList.map((res) => (
            <Link key={res.info.id} to={'/restaurants/' + res.info.id}>
              <RestaurantCard
                resName={res.info.name}
                cuisines={res.info.cuisines.join(" ,")}
                resRating={res.info.avgRating}
                resLocation={res.info.locality}
                resImg={res.info.cloudinaryImageId}
                resTime={res.info.sla.deliveryTime}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
