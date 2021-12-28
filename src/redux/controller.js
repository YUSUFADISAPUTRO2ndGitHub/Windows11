import { createSlice } from '@reduxjs/toolkit'

export const controller = createSlice({
    name: 'apps',
    initialState: {
      apps: []
    },
    reducers: {
      addApp: (state, action) => {
        state.apps.push(action.payload)
      }
    }
})
  
export const { addApp } = controller.actions

export default controller.reducer