import {configureStore} from "@reduxjs/toolkit";
import bookReducer from "./booksSlice.js"

const bookStore = configureStore({
  reducer :{
    books : bookReducer,
  }
});

export default bookStore;