import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "./apiClient";

const getContributions = createAsyncThunk(
  "/planet/any-contribution",
  async (user: { username: string; authenticated: string }) => {
    try {
      const response = await apiClient.get(
        `/planet-preserve/${user.username}/${user.authenticated}/get-contribution`
      );

      if (response.status != 200) {
        throw new Error("Error fetching user contributions...");
      }

      return response.data;
    } catch (error) {
      return error === typeof Error ? error.message : null;
    }
  }
);

export default getContributions;
