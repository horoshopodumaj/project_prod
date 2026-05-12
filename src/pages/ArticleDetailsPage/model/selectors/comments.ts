import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticleCommentsIsLoading = (state: StateSchema) => 
    state.articleDetailsPage?.comments?.isLoading;

export const getArticleCommentError = 
    (state: StateSchema) => state.articleDetailsPage?.comments?.error;