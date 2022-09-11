import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice"
import booksReducer from "./booksSlice"
import loginReducer from "./loginSlice"

export const store = configureStore({
    reducer: {
        users: usersReducer,
        books: booksReducer,
        login: loginReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch