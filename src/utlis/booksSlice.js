import { createSlice } from "@reduxjs/toolkit";
import { Books } from "./mockdata";

const bookSlice = createSlice({
    name: "books",
    initialState: {
        books: [...Books],
    },
    reducers: {
        addItem: (state, action) => {
            state.books.push({ id: state.books.length + 1, ...action.payload }); 
        },
    }
});

export const { addItem } = bookSlice.actions;
export default bookSlice.reducer;
