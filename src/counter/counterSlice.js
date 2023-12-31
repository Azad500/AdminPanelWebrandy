import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
};

// GET
export const fetchCounter = createAsyncThunk(
  "counter/fetchCounter",
  async () => {
    const response = await fetch("http://localhost:3000/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  }
);

// POST
export const postContent = createAsyncThunk(
  "counter/postContent",
  async (postData) => {
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
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
    // GET
    builder.addCase(fetchCounter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCounter.fulfilled, (state, action) => {
      state.contents = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCounter.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    // POST
    builder.addCase(postContent.pending, (state) => {
      // state.isLoading = true;
    });
    builder.addCase(postContent.fulfilled, (state, action) => {
      state.contents.push(action.payload);
    });
    builder.addCase(postContent.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default counterSlice.reducer;
