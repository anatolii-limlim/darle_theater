import {configureStore, createAsyncThunk} from '@reduxjs/toolkit';
import fairytaleReducer from './features/fairytale/fairytaleSlice';
import goodsReducer, {kitsUpdated} from './features/goods/goodsSlice';
import soundReducer from './features/sound/soundSlice';
import {fairytalesUpdated} from './features/fairytale/fairytaleSlice';
import initialData from "../initialData";

const store = configureStore({
  reducer: {
    fairytales: fairytaleReducer,
    goods: goodsReducer,
    sound: soundReducer,
  }
});

const appFetchData = createAsyncThunk(
  'app/fetchData',
  async (dispatch: any) => {
    const requestParams = {headers: {'Accept': 'application/json'}}
    const response = await fetch('http://192.168.1.102:8000/data/', requestParams);

    if (response.ok) {
      const data = await response.json();
      dispatch(fairytalesUpdated(data.fairytales));
    }
  }
);

store.dispatch(fairytalesUpdated(initialData.fairytales));
store.dispatch(kitsUpdated(initialData.kits));

// store.dispatch(appFetchData(store.dispatch));

export default store;

