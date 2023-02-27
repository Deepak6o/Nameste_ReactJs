import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaunrantMenu = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=30.7533623&lng=76.5603828&menuId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id:{resId}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaunrantMenu;
