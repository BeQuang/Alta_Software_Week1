import {
  getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { app } from "./firebase";
import { AddHotelType } from "../Types/hotel";
import { NavigateFunction } from "react-router-dom";

export const firestore = getFirestore(app);

// Hotels collection
export const hotelsCollection = collection(firestore, "hotels");

// add a new document to your collection
export const addHotel = async (hotelData: AddHotelType) => {
  const newHotel = await addDoc(hotelsCollection, { ...hotelData });
  console.log(`The new hotel was created at ${newHotel.path}`);
};

// remove a document in your collection
export const deleteHotel = async (
  id: string | undefined,
  navigate: NavigateFunction
) => {
  const document = doc(firestore, `hotels/${id}`);
  await deleteDoc(document);
  console.log(`The hotel has now been deleted`);
  navigate("/");
};

// edit a document in your collection
export const updateHotel = async (id: string | undefined, docData: any) => {
  const getHotel = doc(firestore, `hotels/${id}`);
  await setDoc(getHotel, docData, { merge: true });
  console.log(`The hotel has been writing to the database`);
};
