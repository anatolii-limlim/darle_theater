import {createEntityAdapter, createSlice} from '@reduxjs/toolkit'

interface Kit {
  id: string,
  iconXml: string,
  textLine1: string,
  textLine2: string,
  descriptionLine1: string,
  descriptionLine2: string,
  actors: string,
  decorations: string,
  ozonUrl: string,
  fairytalesIds: Array<string>,
}

export const kitsAdapter = createEntityAdapter<Kit>();

const slice = createSlice({
  name: 'goods',
  initialState: {
    kits: kitsAdapter.getInitialState()
  },
  reducers: {
    kitsUpdated: (state, action) => {
      kitsAdapter.setAll(state.kits, action.payload);
    }
  }
})

export default slice.reducer;

export const { kitsUpdated } = slice.actions;

const selectors = kitsAdapter.getSelectors((state: any) => state.goods.kits);
export const selectAllKits = selectors.selectAll;
export const selectKitById = selectors.selectById;

