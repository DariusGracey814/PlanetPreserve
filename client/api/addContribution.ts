import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "./apiClient";

const addContribution = createAsyncThunk(
  "/planet/add-contribution",
  async (contribution: {
    type: string;
    description: string;
    contributionDate: Date;
    authenticated: string;
    username: string;
  }) => {
    try {
      const response = await apiClient.post(
        `/planet-preserve/${contribution.username}/${contribution.authenticated}/add-contribution`,
        {
          type: contribution.type,
          description: contribution.description,
          contributionDate: contribution.contributionDate,

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
