import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    loading: false,
    resultsLoaded: false,
    activeTab: "photos",
    results: [{
      photos:[],
      videos:[],
      gifs:[]
    }],
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
      state.resultsLoaded = true;
      state.loading = false;
    },
    setResultsLoaded: (state, action) => {
      state.resultsLoaded = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab=action.payload;
    }
  },
});

export const { setQuery, setLoading, setResults, setResultsLoaded, setActiveTab } = searchSlice.actions;
export default searchSlice.reducer;