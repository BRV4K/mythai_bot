import { configureStore } from '@reduxjs/toolkit'

import StorageReducer from "./reducer.js";

export default configureStore({
    reducer: {
        Storage: StorageReducer
    },
})