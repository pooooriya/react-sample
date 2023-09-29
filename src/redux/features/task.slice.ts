import { createSlice } from "@reduxjs/toolkit";

export const TasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    AllTasksRecieved: (state, action) => {
      state = action.payload;
    },
  },
});

export const { AllTasksRecieved } = TasksSlice.actions;
export default TasksSlice.reducer;
