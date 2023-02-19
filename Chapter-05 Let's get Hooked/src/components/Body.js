import { restrauList } from "../config";
import RestrurantCard from "./RestaurantCard";
import { useState } from "react";

//What is HOOKS ? - its a normal js function

function filterData(searchText,restaurants){
  const filterData = restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText));
  return filterData;
}

const Body = () => {
  //searchTxt is a local state variable
  const [restaurants,setRestaurants] = useState(restrauList);
  const [searchText,setSearchText] = useState(""); 
  //To create state variable returns = [variable one,function to update the variable]
  // const [searchClicked,setSearchClicked] = useState("false");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e)=>{

            // e.target.value => whatever you write in input
            setSearchText(e.target.value);

          }}
        />
       

        <button className="seacrh-btn" onClick={()=>{
          //need to filter the data
          const data = filterData(searchText,restaurants);
          //update the state - restaurants
          setRestaurants(data);
        }}>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <RestrurantCard {...restaurant.data} />;
        })}
      </div>
    </>
  );
};
export default Body;
