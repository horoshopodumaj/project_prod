import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";

import { getUserAuthData } from "entities/User";

import { getArcticleDetailsData } from "entities/Article/model/selectors/articleDetails";

import { getAddCommentFormText } 
    from "features/addCommentForm/model/selectors/addCommentFormSelectors";
import { addCommentFormActions } from "features/addCommentForm/model/slice/addCommentFormSlice";

export const addCommentForArticle = createAsyncThunk<Comment, void, ThunkConfig<string>>(
    'articleDetailsComments/addCommentForArticle',
    async (_, thunkAPI) => {
        const {extra, dispatch, rejectWithValue, getState} = thunkAPI;


        const userData = getUserAuthData(getState());
        const text = getAddCommentFormText(getState())
        const article = getArcticleDetailsData(getState());

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

            dispatch(addCommentFormActions.setText(''));

            return response.data
        } catch (error) {
            return rejectWithValue('error')
        }
        
    },
)