import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "./apiClient";

export const fetchUser = createAsyncThunk(
  "planet/fetchUser",
  async (user: { username: string; password: string }) => {
    try {
      const response = await apiClient.get(
        `/planet-preserve/login-check=authentication/${user.username}/${user.password}`
      );

      if (response.status !== 200) {
        throw new Error("Error fetching users from server");
      }

      return response.data;
    } catch (error) {
      return error instanceof Error ? error.message : null;
    }
  }
);
