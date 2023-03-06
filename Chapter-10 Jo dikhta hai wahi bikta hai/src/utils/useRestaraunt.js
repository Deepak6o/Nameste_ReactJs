import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  //Get data from API

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }

  //Return Restaurant Data
  return restaurant;
};

export default useRestaurant;
