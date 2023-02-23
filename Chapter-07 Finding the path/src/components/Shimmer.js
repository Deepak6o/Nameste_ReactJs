const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e) => (
          <div className="Shimmer-card"></div>
        ))}
    </div>
  );
};
export default Shimmer;
