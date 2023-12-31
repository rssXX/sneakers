import { configureStore } from '@reduxjs/toolkit'
import sneaker from './sneakers/slice'
import filter from './filter/slice.ts'
import cart from './cart/slice.ts'
import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer: {
        sneaker,
        filter,
        cart,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()