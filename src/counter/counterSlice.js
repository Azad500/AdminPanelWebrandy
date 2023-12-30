import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
};

export const fetchCounter = createAsyncThunk(
  "counter/fetchCounter",
  async () => {
    const response = await fetch(
      "http://terlan125-001-site1.ftempurl.com/api/information"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  }
);

export const postCounterItem = createAsyncThunk(
  "counter/postCounterItem",
  async (newItem) => {
    const response = await fetch(
      "http://terlan125-001-site1.ftempurl.com/api/information",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      }
    ).then((response) => response.json());
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCounter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCounter.fulfilled, (state, action) => {
        state.contents = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCounter.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      // --------------///------------///-------
      .addCase(postCounterItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postCounterItem.fulfilled, (state, action) => {
        state.contents.push(action.payload);
        state.isLoading = false;
      })
      .addCase(postCounterItem.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default counterSlice.reducer;
