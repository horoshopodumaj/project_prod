
import { screen} from '@testing-library/react'
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';
import {EditableProfileCard }from './EditableProfileCard';
import { Profile } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
import userEvent from '@testing-library/user-event'
import { $api } from '@/shared/api/api';

const profile: Profile = {
    username: 'admin',
    age: 22,
    country: Country.Armenia,
    lastname: 'admin',
    first: 'name',
    city: 'Erevan',
    currency: Currency.RUB,
    id: '1'
}

const options = {
    initialState: {
        profile: {
            readOnly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin'
            }
        }
        
    },
    asyncReducers: {
        profile: profileReducer
    },
}


describe('features/EditableProfileCard test', ()=> {
    test('переключение режима readonly', async ()=> {
        ComponentRender(<EditableProfileCard id='1'/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()

    });

    test('при отмене значения обнуляются', async ()=> {
        ComponentRender(<EditableProfileCard id='1'/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('name')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin')

    });

    test('появление ошибки', async ()=> {
        ComponentRender(<EditableProfileCard id='1'/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()

    });

    test('PUT запрос при отсутствии ошибок', async ()=> {
        const mockPutReq = jest.spyOn($api, 'put');

        ComponentRender(<EditableProfileCard id='1'/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

        expect(mockPutReq).toHaveBeenCalled()
    });

})