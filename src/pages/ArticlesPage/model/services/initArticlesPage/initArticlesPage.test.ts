import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { initArticlesPage } from "./initArticlesPage";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

const searchParams = new URLSearchParams({
    order: 'asc',
    sort: '',
    search: ''
})

jest.mock('../fetchArticlesList/fetchArticlesList')
describe('initArticlesPage test', ()=> {
    test('sussess', async ()=> {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false,
                page: 1
            }});

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(5);
        expect(fetchArticlesList).toBeCalledWith({});
    })
    test('fetchArticlesList not called', async ()=> {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true
            }});

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled;
    })
})
