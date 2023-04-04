import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface contributionState {
  type: string;
  description: string;
  date: string;
}

const initialState: contributionState = {
  type: "",
  description: "",
  date: new Date().toJSON().slice(0, 10),
};

const contributionSlice = {
  name: "Contribution",
  initialState,
  reducer: {
    setType(state: contributionState, action: PayloadAction<string>): void {
      state.type = action.payload;
    },
    setDescription(
      state: contributionState,
      action: PayloadAction<string>
    ): void {
      state.description = action.payload;
    },
    setDate(state: contributionState, action: PayloadAction<string>): void {
      state.date = action.payload;
    },
  },
};

// export const contributionSliceActions;
export default contributionSlice.reducer;
