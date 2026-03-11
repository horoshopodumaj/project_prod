import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { initArticlesPage } from "./initArticlesPage";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { StateSchema } from "app/providers/StoreProvider";

jest.mock('../fetchArticlesList/fetchArticlesList')
describe('initArticlesPage test', ()=> {
    test('sussess', async ()=> {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false
            }});

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toBeCalledWith({page: 1});
    })
    test('fetchArticlesList not called', async ()=> {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true
            }});

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled;
    })
})
