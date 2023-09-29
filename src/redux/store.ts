import { configureStore } from "@reduxjs/toolkit";
import { TasksSlice } from "./features/task.slice";

export const store = configureStore({
  reducer: {
    tasks: TasksSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
