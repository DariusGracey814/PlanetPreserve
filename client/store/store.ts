import { configureStore } from "@reduxjs/toolkit";
import FormDataSlice from "./forms";
import AuthSlice from "./auth";
import ContributionSlice from "./contribution";

export const store = configureStore({
  reducer: {
    FormData: FormDataSlice,
    AuthSlice: AuthSlice,
    Contribution: ContributionSlice,
  },
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
