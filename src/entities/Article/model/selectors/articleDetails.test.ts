import { StateSchema } from "app/providers/StoreProvider";
import { getArcticleDetailsData, getArcticleDetailsError, getArcticleDetailsIsLoading } from "./articleDetails";

describe('articleDetails test', ()=> {
    test('should return getArcticleDetailsData', ()=> {
        const article =  {
            id: '1',
            title: 'title'
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: article
            }
        };

        expect(getArcticleDetailsData(state as StateSchema)).toEqual(article);
    })
    test('should return empty getArcticleDetailsData', ()=> {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {}
        };

        expect(getArcticleDetailsData(state as StateSchema)).toEqual(undefined);
    })
    test('should return getArcticleDetailsIsLoading', ()=> {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        };

        expect(getArcticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    })
    test('should return empty getArcticleDetailsIsLoading', ()=> {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {}
        };

        expect(getArcticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
    })
    test('should return getArcticleDetailsError', ()=> {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error'
            }
        };

        expect(getArcticleDetailsError(state as StateSchema)).toEqual('error');
    })
    test('should return empty getArcticleDetailsError', ()=> {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {}
        };

        expect(getArcticleDetailsError(state as StateSchema)).toEqual(undefined);
    })
})