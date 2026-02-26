import { StateSchema } from "app/providers/StoreProvider";

export const geAddCommentFormText = (state: StateSchema) => state?.addCommentForm?.text || '' ;

export const geAddCommentFormError = (state: StateSchema) => state?.addCommentForm?.error || '' ;