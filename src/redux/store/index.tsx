import { configureStore } from "@reduxjs/toolkit";
import userIdReducer from "./../feature/userId"
import postIdReducer from "./../feature/postId"

export const store = configureStore({
    reducer: {
        userId: userIdReducer,
        postId: postIdReducer,
    }
})