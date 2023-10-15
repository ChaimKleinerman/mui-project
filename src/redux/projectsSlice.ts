import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface projectState {
  value: JSX.Element|string
}

const initialState:projectState = { value: '' } 

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
  
    chooseProject(state, action: PayloadAction<JSX.Element>) {
      state.value = action.payload
    },
  },
})

export const {chooseProject} = projectSlice.actions
export default projectSlice.reducer