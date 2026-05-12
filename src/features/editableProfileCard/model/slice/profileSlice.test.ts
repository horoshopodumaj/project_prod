import { Country } from "@/entities/Country";
import { profileActions, profileReducer } from "./profileSlice";
import { Currency } from "@/entities/Currency";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { ProfileSchema } from "../types/editableProfileCardSchema";
import { ValidateProfileError } from "../consts/consts";


const form =  {
    username: 'admin',
    age: 22,
    country: Country.Armenia,
    lastname: 'admin',
    first: 'name',
    city: 'Erevan',
    currency: Currency.RUB,
    avatar: '/'
};

describe('profileSlice test', ()=> {
    test('test updateProfile', ()=> {
        const state: DeepPartial<ProfileSchema> = {
            form
        };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({first: 'Admin'}))).toEqual({
            form: {...form, first: 'Admin'}
            
        })
    })

    test('test setReadonly', ()=> {
        const state: DeepPartial<ProfileSchema> = {
            readOnly: false
        };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
            readOnly: true
        })
    })

    test('test cancelEdit', ()=> {
        const state: DeepPartial<ProfileSchema> = {};
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readOnly: true,
            form: state.data,
            validateErrors: undefined,
        })
    })

    test('test update Profile service pending', ()=> {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            validateErrors: undefined,
            isLoading: true,
            
        })
    })

    test('test update Profile service fulfilled', ()=> {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
            form,
            data: form,
            readOnly: true
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(form, ''))).toEqual({
            isLoading: false,
            data: form,
            form: form,
            readOnly: true,
            validateErrors: undefined,
            
        })
    })
})