import axios from "axios";
import { validateProfileData } from "./validateProfileData";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ValidateProfileError } from "../../types/profile";

const data =  {
    username: 'admin',
    age: 22,
    country: Country.Armenia,
    lastname: 'admin',
    first: 'name',
    city: 'Erevan',
    currency: Currency.RUB,
    avatar: '/'
};

describe('validateProfileData test', ()=> {
    test('sussess', async ()=> {
        const result = validateProfileData(data)

        expect(result).toEqual([]);
    })

    test('without first and lastname', async ()=> {
        const result = validateProfileData({...data, first: '', lastname: ''})

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATE]);
    })

    test('incorrect age', async ()=> {
        const result = validateProfileData({...data, age: NaN})

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    })

    test('without country', async ()=> {
        const result = validateProfileData({...data, country: undefined})

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    })

    test('all cases of errors', async ()=> {
        const result = validateProfileData({...data, first: '', lastname: '', age: NaN, country: undefined })

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATE,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    })

    test('empty', async ()=> {
        const result = validateProfileData({})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATE,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    })

})