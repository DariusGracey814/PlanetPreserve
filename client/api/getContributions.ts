import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "./apiClient";

const getContributions = createAsyncThunk(
  "/planet/user-contribution",
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

// Get all contributions inside of the database
export const getAllContributions = createAsyncThunk(
  "/planet/all-contributions",
  async () => {
    try {
      const response = await apiClient.get(
        "/planet-preserve/all-contributions"
      );

      if (response.status != 200) {
        throw new Error("Error fetching contributions from api....");
      }

      return response.data;
    } catch (err) {
      return err === Error ? err?.message : null;
    }
  }
);

export default getContributions;
