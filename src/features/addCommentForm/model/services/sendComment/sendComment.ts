import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";

import { getUserAuthData } from "entities/User";
import { getAddCommentFormText } from "../../selectors/addCommentFormSelectors";
import { getArcticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { addCommentFormActions } from "../../slice/addCommentFormSlice";

export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
    'addCommentForm/sendComment',
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