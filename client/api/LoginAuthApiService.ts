import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "./apiClient";

export const fetchUsers = createAsyncThunk(
  "planet/fetchUsers",
  async (username: string) => {
    try {
      const response = await apiClient.get(`/planet/users/${username}`);

      if (response.status !== 200) {
        throw new Error("Error fetching users from server");
      }

      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
