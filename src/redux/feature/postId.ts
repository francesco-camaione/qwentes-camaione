import { createSlice } from "@reduxjs/toolkit";

export const postId = createSlice({
    name: "postId",
    initialState: { value: localStorage.getItem("postId") },
    reducers: {
        setPostId: (state, action) => {
            localStorage.setItem("postId", JSON.stringify(action.payload))
            state.value = action.payload
        },
    }
})

export const { setPostId } = postId.actions
export default postId.reducer