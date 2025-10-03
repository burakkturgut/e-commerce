import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/slicees/appSlice'
import productReducer from '../redux/slicees/productSlice'
import basketReducer from '../redux/slicees/basketSlice'

export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        basket: basketReducer
    },
})