import { AddCommentFormSchema } from "../types/addCommentForm"
import { addCommentFormActions, addCommentFormReducer } from "./addCommentFormSlice";


describe('addCommentFormSlice test', ()=> {
    test('test setText', ()=> {
        const state: DeepPartial<AddCommentFormSchema> = {
            text: '123'
        };
        expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setText('123'))).toEqual({
            text: '123'
        })
    })
})