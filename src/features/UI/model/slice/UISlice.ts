import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UISchema } from '../types/UISchema'



const initialState: UISchema = {
    scroll: {}
}

export const uiSchema = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScrollPosition: (state, {payload}: PayloadAction<{path: string; position: number}>) => {
            state.scroll[payload.path] = payload.position
        },
    },
})

export const { actions: uiActions } = uiSchema
export const { reducer: uiReducer } = uiSchema
