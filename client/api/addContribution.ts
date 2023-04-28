import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "./apiClient";

const addContribution = createAsyncThunk(
  "/planet/add-contribution",
  async (contribution: {
    type: string;
    description: string;
    timestamp: number;
    authenticated: string;
    username: string;
    latitude: number;
    longitude: number;
  }) => {
    try {
      console.log(contribution);
      const response = await apiClient.post(
        `/planet-preserve/${contribution.username}/${contribution.authenticated}/add-contribution`,
        {
          type: contribution.type,
          description: contribution.description,
          timestamp: contribution.timestamp,
          latitude: contribution.latitude,
          longitude: contribution.longitude,

          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status != 200) {
        throw new Error("Error adding new user contribution");
      }

      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export default addContribution;
