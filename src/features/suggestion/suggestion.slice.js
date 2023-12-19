import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSuggestion = createAsyncThunk(
  'suggestion/fetchSuggestion',
  async () => {
    const response = await fetch('http://localhost:3004/api/suggestion');
    const data = await response.json();
    return data;
  }
);

const initialState = {
  suggestion: null,
  loading: false,
  error: false,
};

const suggestionSlice = createSlice({
  name: 'suggestion',
  initialState,
  reducers: {},

  extraReducers: {
    [fetchSuggestion.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchSuggestion.fulfilled]: (state, action) => {
      state.suggestion = action.payload;
      state.loading = false;
      state.error = false;
    },
    [fetchSuggestion.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default suggestionSlice.reducer;

export const selectSuggestion = (state) => state.suggestion.suggestion;
export const selectLoading = (state) => state.suggestion.loading;
export const selectError = (state) => state.suggestion.error;
