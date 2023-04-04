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

const contributionSlice = createSlice({
  name: "Contribution",
  initialState,
  reducers: {
    setType(state: any, action: PayloadAction<string>): void {
      state.type = action.payload;
    },
    setDescription(state: any, action: PayloadAction<string>): void {
      state.description = action.payload;
    },
    setDate(state: any, action: PayloadAction<string>): void {
      state.date = action.payload;
    },
  },
});

// export const contributionSliceActions;
export default contributionSlice.reducer;
