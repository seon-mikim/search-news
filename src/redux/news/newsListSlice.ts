import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsData } from '@interface/newsListData';
import getNewsApi from '@utils/api/getNewsApi';
import NewsApi from '@interface/newApiInterface';

export interface NewsListState {
  entities: NewsData['articles'];
  loading: boolean;
  error: boolean;
  lastFetchTrigger?: string | null;
  params: { keyword?: string | null; date?: string | null };
}

const initialState: NewsListState = {
  entities: [],
  loading: false,
  error: false,
  lastFetchTrigger: null,
  params: { keyword: null, date: null },
};

export const getNewsList = createAsyncThunk<NewsData['articles'], NewsApi>(
  'news/getNewsList',
  async ({ trigger, ...params }, thunkAPI) => {
    try {
      const newsListData = await getNewsApi(params);
      return newsListData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const newsListSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNewsList.pending, (state, action) => {
      console.log();
      const { trigger, keyword, date } = action.meta.arg;

      state.params.keyword = keyword;
      state.params.date = date;
      state.lastFetchTrigger = trigger;
      state.loading = true;
      state.error = false;
    });
    builder
      .addCase(
        getNewsList.fulfilled,
        (state, action: PayloadAction<NewsData['articles']>) => {
          if (state.lastFetchTrigger === 'scroll' && state.entities) {
            const existingTitle = state.entities.map(
              (newsDataItem) => newsDataItem.title
            );
            const newNewsData = action.payload.filter(
              (newsDataItem) => !existingTitle.includes(newsDataItem.title)
            );
            state.entities = [...state.entities, ...newNewsData];
          } else {
            state.entities = action.payload;
          }

          state.loading = false;
          state.error = false;
        }
      )
      .addCase(getNewsList.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default newsListSlice.reducer;
