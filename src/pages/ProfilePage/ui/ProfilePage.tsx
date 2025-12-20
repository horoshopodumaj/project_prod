import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DymanicModuleLoader, ReducersList } 
    from 'shared/lib/components/DymanicModuleLoader/DymanicModuleLoader';
import { fetchProfileData, 
    getProfileError, 
    getProfileForm, 
    getProfileIsLoading, 
    getProfileReadonly, 
    getProfileValidateErrors, 
    profileActions, 
    ProfileCard, 
    profileReducer, 
    ValidateProfileError} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from "entities/Country/model/types/country";
import Text, { TextTheme } from 'shared/ui/Text/Text';



const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const formData = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslate = {
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_USER_DATE]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Укажите страну'),
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
        [ValidateProfileError.NO_DATA]: t('Нет данных'),
    }

    const dispatch = useAppDispatch()

    useEffect(()=> {
        if(__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData())
        }
    }, [dispatch]);


    const onChangeFirstname = useCallback((value?: string)=> {
        dispatch(profileActions.updateProfile({first: value || ''}))
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string)=> {
        dispatch(profileActions.updateProfile({lastname: value || ''}))
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string)=> {
        dispatch(profileActions.updateProfile({age: Number(value) || 0}))
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string)=> {
        dispatch(profileActions.updateProfile({city: value || ''}))
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string)=> {
        dispatch(profileActions.updateProfile({username: value || ''}))
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string)=> {
        dispatch(profileActions.updateProfile({avatar: value || ''}))
    }, [dispatch]);

    const onChangeCurrency = useCallback((value: Currency)=> {
        dispatch(profileActions.updateProfile({currency: value || ''}))
    }, [dispatch]);

    const onChangeCountry= useCallback((value: Country)=> {
        dispatch(profileActions.updateProfile({country: value || ''}))
    }, [dispatch]);

    return (
        <DymanicModuleLoader reducers={reducers}
            removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader/>
                {validateErrors?.length && validateErrors.map((err)=> (
                    <Text
                        key={err} 
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslate[err]}
                    />
                ))}
                <ProfileCard 
                    data={formData} 
                    error={error} 
                    isLoading={isLoading}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DymanicModuleLoader>
        
    );
}

export default ProfilePage