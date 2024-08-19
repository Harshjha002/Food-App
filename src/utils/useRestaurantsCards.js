import { useState, useEffect } from 'react';
import { RESTAURANT_API } from './constants';

const useRestaurantsCards = () => {
    const [resList, setResList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(RESTAURANT_API);
        const json = await response.json();
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };

    return resList;
};

export default useRestaurantsCards;
