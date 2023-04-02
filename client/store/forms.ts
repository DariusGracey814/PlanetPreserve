import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FormUtils from "../utils/formUtils";

// Initial State type
interface loginData {
  username?: string;
  email: string;
  password: string;
  validUsername: boolean;
  validEmail: boolean;
  validPassword: boolean;
  errorMessage: string[];
  clearErrorMessage: boolean;
  successMessage: string;
  loginState: boolean;
  isAuthenticated: boolean;
}

// Initial State
const initialState: loginData = {
  username: "",
  email: "",
  password: "",
  validUsername: false,
  validEmail: false,
  validPassword: false,
  errorMessage: [],
  clearErrorMessage: false,
  successMessage: "",
  loginState: false,
  isAuthenticated: false,
};

// Form Utils class
const formUtils: FormUtils = new FormUtils();

const formDataSlice = createSlice({
  // name
  name: "formData",
  // initial state
  initialState,
  // reducer methods
  reducers: {
    // Set redux email state to email value
    setUsername(state, action: PayloadAction<string>): void {
      // Set email state
      state.username = action.payload;

      // Send username to be validated
      formUtils.setUsername(state.username);

      // check if username is valid
      const usernameIsValid: boolean = formUtils.validateUsername();

      if (
        !usernameIsValid &&
        !state.errorMessage.includes(
          "Enter a valid username. Must be 4 characters at least"
        )
      ) {
        state.errorMessage.push(
          "Enter a valid username. Must be 4 characters at least"
        );
      } else {
        state.validUsername = true;
      }
    },

    // Set redux email state to email value
    setEmail(state, action: PayloadAction<string>): void {
      // Set email state
      state.email = action.payload;

      // send email to be validated
      formUtils.setEmail(state.email);

      // check if email is valid
      const emailIsValid: boolean = formUtils.validateEmail();

      // If email is not valid set error message
      if (
        !emailIsValid &&
        !state.errorMessage.includes(
          "Email is Invalid. Please re-enter the field"
        )
      ) {
        state.errorMessage.push("Email is Invalid. Please re-enter the field");
      } else {
        // Set email validity to true if no error
        state.validEmail = true;
      }
    },

    // Set redux password state to password value
    setPassword(state, action: PayloadAction<string>): void {
      // Set password state
      state.password = action.payload;

      // send password to be validated
      formUtils.setPassword(state.password);

      const passwordIsValid: boolean = formUtils.validatePassword();

      // Check if password is valid
      if (
        !passwordIsValid &&
        !state.errorMessage.includes(
          "Password is Invalid. Must be at least 8 characters"
        )
      ) {
        state.errorMessage.push(
          "Password is Invalid. Must be at least 8 characters"
        );
      } else {
        // Set password validity to true if no error
        state.validPassword = true;
      }
    },

    // Set error and success message on initial load
    clearErrorMessage(state, action: PayloadAction<boolean>): void {
      // clear error message state
      state.clearErrorMessage = action.payload;
    },

    clearSuccessMessage(state): void {
      state.successMessage = "";
    },

    setSuccessMessage(state, action: PayloadAction<string>): void {
      state.successMessage = action.payload;
    },

    setErrorMessage(state) {
      state.errorMessage = [];
    },

    // Authenticate User
    setIsAuthenticated(state): void {
      state.isAuthenticated = true;
    },

    // Clear user authenicated status
    clearSetIsAuthenticated(state): void {
      state.isAuthenticated = false;
    },

    // Set valid email and password to false when logging out
    setValidEmail(state, action: PayloadAction<boolean>): void {
      state.validEmail = action.payload;
    },

    setValidUsername(state, action: PayloadAction<boolean>): void {
      state.validEmail = action.payload;
    },

    setValidPassword(state, action: PayloadAction<boolean>) {
      state.validPassword = action.payload;
    },
  },
});

export const formDataActions = formDataSlice.actions;
export default formDataSlice.reducer;
