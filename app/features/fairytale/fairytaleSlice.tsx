import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

interface Fairytale {
  id: string,
  iconXml: string,
  title: string,
  characters: string,
  charactersFull: string,
  intro: string,
  scenes: {characters: string, text: string}[]
}

export const fairytalesAdapter = createEntityAdapter<Fairytale>();

const slice = createSlice({
  name: 'fairytales',
  initialState: fairytalesAdapter.getInitialState(),
  reducers: {
    fairytalesUpdated: fairytalesAdapter.setAll,
  }
})

export default slice.reducer;

export const { fairytalesUpdated } = slice.actions;

const selectors = fairytalesAdapter.getSelectors((state: any) => state.fairytales);
export const selectAllFairytales = selectors.selectAll;
export const selectFairytaleById = selectors.selectById;

