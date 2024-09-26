import {createSlice} from '@reduxjs/toolkit'
import settings from "../../settings";

const slice = createSlice({
  name: 'sound',
  initialState: {
    isMuted: settings.isMutedByDefault
  },
  reducers: {
    isMutedUpdated: (state, action:{payload: boolean}) => {
      state.isMuted = action.payload;
    }
  }
})

export default slice.reducer;

export const { isMutedUpdated } = slice.actions;

export const selectIsMuted = state => state.sound.isMuted;

