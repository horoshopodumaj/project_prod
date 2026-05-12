import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider'
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema'
import { Article } from '@/entities/Article'
import { fetchArtcileRecommendations } 
    from '../services/fetchArtcileRecommendations/fetchArtcileRecommendations'


const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
})

export const getArticleRecomendations = 
  recommendationsAdapter.getSelectors<StateSchema>(
      (state) => 
          state.articleDetailsPage?.recommendations ||  recommendationsAdapter.getInitialState()
  )

const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {

    },
    extraReducers: (builder)=> {
        builder
            .addCase(fetchArtcileRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArtcileRecommendations.fulfilled, 
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    recommendationsAdapter.setAll(state, action.payload)
                })
            .addCase(fetchArtcileRecommendations.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})

export const { actions: articleDetailsRecommendationsActions } = articleDetailsRecommendationsSlice
export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice
