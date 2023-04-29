import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "./apiClient";

interface Props {
  contributionId: number;
}

const deletContributions = createAsyncThunk(
  "/planet-preserve/delete-contribution",
  async (Props) => {
    try {
      const response = await apiClient.delete(
        `/planet-preserve/delete-contribution/${Props.contributionId}`
      );

      if (response.status !== 200) {
        throw new Error(
          `Error deleting contribution with id: ${Props.contributionId}`
        );
      }

      const data = await response.json();

      return data.data;
    } catch (err) {
      return err === Error ? err?.message : null;
    }
  }
);
