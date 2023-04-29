import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "./apiClient";

const deleteContribution = createAsyncThunk(
  "/planet-preserve/delete-contribution",
  async (contributionId: number) => {
    try {
      console.log(contributionId);

      const response = await apiClient.delete(
        `/planet-preserve/delete-contribution/${contributionId}`
      );
      if (response.status !== 200) {
        throw new Error(
          `Error deleting contribution with id: ${contributionId}`
        );
      }
    } catch (err) {
      return err === Error ? err?.message : null;
    }
  }
);

export default deleteContribution;
