import { restrauList } from "../config";
import RestrurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteresRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7533623&lng=76.5603828&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[1]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[1]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if(!isOnline){
    return <h1>Offlne, Please check your connection !!</h1>
  }
  if (!allRestaurants) return null;
  // if(filteresRestaurants?.length===0) return <h1>No Restraunt match your filter</h1>

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="seacrh-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);

            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteresRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.data.id}>
              <RestrurantCard {...restaurant.data} key={restaurant.data.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
