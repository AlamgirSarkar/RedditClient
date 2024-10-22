import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('lanes')) || [];  // Retrieve from localStorage

const lanesSlice = createSlice({
  name: 'lanes',
  initialState,
  reducers: {
    addLane: (state, action) => {
      if (Array.isArray(state) && !state.includes(action.payload)) {
        state.push(action.payload);
        localStorage.setItem('lanes', JSON.stringify(state));  // Persist state to localStorage
      }
    },
    removeLane: (state, action) => {
      const updatedLanes = state.filter((lane) => lane !== action.payload);
      localStorage.setItem('lanes', JSON.stringify(updatedLanes));  // Persist updated state to localStorage
      return updatedLanes;
    },
  },
});

export const { addLane, removeLane } = lanesSlice.actions;
export default lanesSlice.reducer;
