import { IMG_CDN_URL } from "../config.js";

const RestrurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  // const {name,cuisines, cloudinaryImageId, lastMileTravelString}=restaurant.data;
  return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-50">
      <img alt="card" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{lastMileTravelString} stars</h4>
    </div>
  );
};
export default RestrurantCard;
