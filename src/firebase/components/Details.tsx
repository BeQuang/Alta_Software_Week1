/* eslint-disable react-hooks/exhaustive-deps */
import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../lib/controller";
import Information from "./Information";

function Details() {
  const { id } = useParams();

  // Fetch a single document
  const getHotel = doc(firestore, `hotels/${id}`);

  const [isLoading, setIsLoading] = useState(false);
  const [hotel, setHotel] = useState({});

  useEffect(() => {
    fetchHotelData();
  }, []);

  const fetchHotelData = async () => {
    setIsLoading(true);
    const docSnap = await getDoc(getHotel);
    if (docSnap.exists()) {
      const newHotelObj = {
        id: docSnap.id,
        ...docSnap.data(),
      };
      setIsLoading(false);
      setHotel(newHotelObj);
    } else {
      console.log("No such document!");
    }
  };
  if (isLoading) return <div className="loading" />;
  return (
    <div>
      {Object.keys(hotel) && Object.keys(hotel).length ? (
        <Information hotel={hotel} detailsPage />
      ) : null}
    </div>
  );
}

export default Details;
