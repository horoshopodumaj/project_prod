import { StateSchema } from "@/app/providers/StoreProvider";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "./articleDetails";

describe('articleDetails test', ()=> {
    test('should return getArticleDetailsData', ()=> {
        const article =  {
            id: '1',
            title: 'title'
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: article
            }
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(article);
    })
    test('should return empty getArticleDetailsData', ()=> {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {}
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    })
    test('should return getArticleDetailsIsLoading', ()=> {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    })
    test('should return empty getArticleDetailsIsLoading', ()=> {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {}
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
    })
    test('should return getArticleDetailsError', ()=> {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error'
            }
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    })
    test('should return empty getArticleDetailsError', ()=> {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {}
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    })
})