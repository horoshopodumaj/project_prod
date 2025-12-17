import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DymanicModuleLoader, ReducersList } 
    from 'shared/lib/components/DymanicModuleLoader/DymanicModuleLoader';
import { fetchProfileData, 
    getProfileData, 
    getProfileError, 
    getProfileForm, 
    getProfileIsLoading, 
    getProfileReadonly, 
    profileActions, 
    ProfileCard, 
    profileReducer } from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from "entities/Country/model/types/country";


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

    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(fetchProfileData())
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