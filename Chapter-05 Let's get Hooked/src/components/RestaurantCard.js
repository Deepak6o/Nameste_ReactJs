import { IMG_CDN_URL } from "../config.js";

const RestrurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  // const {name,cuisines, cloudinaryImageId, lastMileTravelString}=restaurant.data;
  return (
    <div className="card">
      <img alt="card" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} stars</h4>
    </div>
  );
};
export default RestrurantCard;
