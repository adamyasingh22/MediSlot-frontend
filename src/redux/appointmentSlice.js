import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const createAppointment = createAsyncThunk(
  "appointment/create",
  async (formData) => {
    const res = await api.post("/appointments", formData);
    return res.data;
  }
);

export const fetchAppointments = createAsyncThunk(
  "appointment/fetch",
  async (year) => {
    const res = await api.get(`/appointments?year=${year || ""}`);
    return res.data;
  }
);

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: { list: [] },
  extraReducers: builder => {
    builder
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.list = action.payload;
      });
  },
});

export default appointmentSlice.reducer;

