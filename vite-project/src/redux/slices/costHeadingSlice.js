import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    costHeadings: [{ id: 1, name: "RRR" }, { id: 2, name: "Vikram" }, { id: 3, name: "KGF" }]
}

const costHeadingSlice = createSlice({
    name: "costheading",
    initialState,
    reducers: {
        addCostHeading: (state, action) => {
            state.costHeadings.push(action.payload);
        },
        deleteCostHeadingById: (state, action) => {
            state.costHeadings = state.costHeadings.filter((item) => item.id !== action.payload)
        },
        deleteAllCostHeadings: (state) => {
            state.costHeadings = [];
        },

    }
})
console.log(costHeadingSlice, "slice ")

export const { addCostHeading, deleteCostHeadingById, deleteAllCostHeadings } = costHeadingSlice.actions;
export default costHeadingSlice.reducer;