import { useEffect, useState } from "react";
import {RESTAURANT_MENU_API } from '../utils/constants'


const useRestaurantMenu = (resId) => {

    const [resInfo, SetResInfo] = useState(null)

    useEffect(() => {
        fetchData()
    }, [resId])

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_MENU_API + resId);
        const json = await data.json()
        SetResInfo(json)
    }

    return resInfo;

}

export default useRestaurantMenu;