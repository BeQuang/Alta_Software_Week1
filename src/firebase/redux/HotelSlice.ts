import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NewHotelType } from "../../Types/hotel";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

interface HotelsState {
  hotels: NewHotelType[];
  loading: boolean;
  error: string | null;
}

const initialState: HotelsState = {
  hotels: [],
  loading: false,
  error: null,
};

export const fetchHotels = createAsyncThunk("hotels/fetchHotels", async () => {
  const hotelsCollection = collection(db, "hotels");
  const snapshot = await getDocs(hotelsCollection);
  const hotels = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return hotels;
});

const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.hotels = action.payload;
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch hotels.";
      });
  },
});

export default hotelSlice.reducer;
