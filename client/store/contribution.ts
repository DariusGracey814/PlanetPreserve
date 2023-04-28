import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface contributionState {
  type: string;
  description: string;
  date: string;
  latitude: number;
  longitude: number;
}

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${month} - ${day} - ${year}`;

const initialState: contributionState = {
  type: "",
  description: "",
  date: currentDate,
  latitude: 0,
  longitude: 0,
};

const contributionSlice = createSlice({
  name: "Contribution",
  initialState,
  reducers: {
    setType(state: contributionState, action: PayloadAction<string>): void {
      state.type = action.payload;
      console.log(state.type);
    },
    setDescription(
      state: contributionState,
      action: PayloadAction<string>
    ): void {
      state.description = action.payload;
      console.log(state.description);
    },
    setDate(state: contributionState, action: PayloadAction<string>): void {
      state.date = action.payload;
      console.log(state.date);
    },
    setLatitude(state: contributionState, action: PayloadAction<number>): void {
      state.latitude = action.payload;
    },
    setLongitude(
      state: contributionState,
      action: PayloadAction<number>
    ): void {
      state.longitude = action.payload;
    },
  },
});

export const contributionSliceActions = contributionSlice.actions;
export default contributionSlice.reducer;
