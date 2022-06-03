import { createSlice } from "@reduxjs/toolkit";

export const userId = createSlice({
    name: "userId",
    initialState: { value: localStorage.getItem("userId") },
    reducers: {
        setUserId: (state, action) => {
            localStorage.setItem("userId", JSON.stringify(action.payload))
            state.value = action.payload
        },
    }
})

export const { setUserId } = userId.actions
export default userId.reducer