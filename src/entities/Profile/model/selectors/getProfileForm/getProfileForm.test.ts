import { StateSchema } from "app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

describe('getProfileForm test', ()=> {
    test('should return form', ()=> {
        const profileForm =  {
            username: 'admin',
            age: 22,
            country: Country.Armenia,
            lastname: 'admin',
            first: 'name',
            city: 'Erevan',
            currency: Currency.RUB,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: profileForm
            }
        };

        expect(getProfileForm(state as StateSchema)).toEqual(profileForm);
    })
    test('should work with empty state', ()=> {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    })
})