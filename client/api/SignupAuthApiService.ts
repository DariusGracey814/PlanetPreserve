import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "./apiClient";

export const sendUser = createAsyncThunk(
  "planet/sendUser",
  async (user: { email: string; username: string; password: string }) => {
    try {
      const response = await apiClient.post("/planet-preserve/signup", {
        email: user.email,
        username: user.username,
        password: user.password,

        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 201) {
        throw new Error("Error sending registering user credentials to server");
      }

      return response.data;
    } catch (error) {
      return error instanceof Error ? error.message : null;
    }
  }
);
