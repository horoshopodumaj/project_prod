import { LoginSchema } from "../types/loginSchema"
import { DeepPartial } from "@reduxjs/toolkit";
import { loginActions, loginReducer } from "./loginSlice";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";


describe('loginSlice test', ()=> {
    test('test setUsername', ()=> {
        const state: DeepPartial<LoginSchema> = {
            username: '123'
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('123123'))).toEqual({
            username: '123123'
        })
    })

    test('test setPassword', ()=> {
        const state: DeepPartial<LoginSchema> = {
            password: '123'
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123123'))).toEqual({
            password: '123123'
        })
    })
})