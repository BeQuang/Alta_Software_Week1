/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import Information from "./Information";
import { fetchHotels } from "../redux/HotelSlice";

function Card() {
  const dispatch = useDispatch<AppDispatch>();
  const { hotels, loading, error } = useSelector(
    (state: RootState) => state.hotels
  );

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  if (loading) return <p>Loading hotels...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(hotels);

  return (
    <div className="card">
      <h2 className="title">All Hotels</h2>
      {hotels && hotels.length ? (
        <div>
          {hotels.map((hotel) => (
            <Information key={hotel.id} hotel={hotel} />
          ))}
        </div>
      ) : (
        <h2 className="no-hotels">There are no hotels. Please add one</h2>
      )}
    </div>
  );
}

export default Card;
