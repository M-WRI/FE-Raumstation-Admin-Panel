import { configureStore } from "@reduxjs/toolkit";
// STORES
import user from "./userData.store";
import company from "./companyData.store";
import userList from "./userList.store";

export const store = configureStore({
  reducer: {
    user: user,
    company: company,
    userList: userList,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
