import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";

import { getUserAuthData } from "entities/User";

import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetailsComments/addCommentForArticle',
    async (text, thunkAPI) => {
        const {extra, dispatch, rejectWithValue, getState} = thunkAPI;


        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if(!userData || !text || !article) {
            rejectWithValue('no data')
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article?.id,
                userId: userData?.id,
                text: text
            });

            if(!response.data) {
                throw new Error()
            }

            dispatch(fetchCommentsByArticleId(article?.id))

            return response.data
        } catch (error) {
            return rejectWithValue('error')
        }
        
    },
)