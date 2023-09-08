import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsData} from 'src/interface/newsListData';
import getNewsApi from '@utils/api/getNewsApi';
import NewsApi from 'src/interface/newApiInterface';

export interface NewsListState {
  entities: NewsData;
  loading: boolean;
}

// Define the initial state using that type
const initialState: NewsListState = {
  entities: {status: '', totalResults: 0, articles: []} ,
  loading: false,
};


export const getNewsList = createAsyncThunk<NewsData, NewsApi>(
  'news/getNewsList',
  async (params) => {
    const newsListData = await getNewsApi(params);
    return newsListData;
  }
);
export const newsListSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getNewsList.pending, (state) => {
			state.loading = true
		})
		builder
      .addCase(
        getNewsList.fulfilled,
        (state, action: PayloadAction<NewsData>) => {
          state.loading = false;
          state.entities = action.payload;
        }
      )
      .addCase(getNewsList.rejected, (state) => {
        state.loading = false;
      });
	}
});



// Other code such as selectors can use the imported `RootState` type


export default newsListSlice.reducer;
