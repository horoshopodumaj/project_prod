import { classNames } from 'shared/lib/classNames/classNames';
import { Text, VStack } from 'shared';
import { useTranslation } from 'react-i18next';
import { 
    ProfileCard } from 'entities/Profile';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { TextTheme } from 'shared/ui/Text/Text';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } 
    from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';
import { DymanicModuleLoader, ReducersList } 
    from 'shared/lib/components/DymanicModuleLoader/DymanicModuleLoader';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';


interface EditableProfileCardProps {
    className?: string;
    id: string;
}

export const EditableProfileCard: React.FC<EditableProfileCardProps> = (props) => {
    const { className, id } = props;
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

    const reducers: ReducersList = {
        profile: profileReducer
    }

    const dispatch = useAppDispatch();

    useInitialEffect(()=> {
        if(id) {
            dispatch(fetchProfileData(id))
        }
    })

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
        <DymanicModuleLoader reducers={reducers}>
            <VStack  gap='8' max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader/>
                {validateErrors?.length && validateErrors.map((err)=> (
                    <Text
                        key={err} 
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslate[err]}
                        data-testid={'EditableProfileCard.Error'}
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
            </VStack>
        </DymanicModuleLoader>
    );
}