import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUser } from "../api/LoginAuthApiService";

interface authState {
  authenticatedUser: boolean | null;
}

const initialState: authState = { authenticatedUser: null };

// Manage Authenicated User State
const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setAuthState(state, action: PayloadAction<boolean | null>): void {
      state.authenticatedUser = action.payload;
    },
  },

  // Set auth state based on retrieveUser api response
  extraReducers(builder) {
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<boolean>) => {
        state.authenticatedUser = action.payload;
      }
    );
  },
});

export const AuthSliceActions = AuthSlice.actions;
export default AuthSlice.reducer;
