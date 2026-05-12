import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";

describe('getProfileData test', ()=> {
    test('should return data', ()=> {
        const profileData =  {
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
                data: profileData
            }
        };

        expect(getProfileData(state as StateSchema)).toEqual(profileData);
    })
    test('should work with empty state', ()=> {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    })
})