import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { Button, Text } from 'shared';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } 
    from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation('profile');
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id

    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(()=> {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(()=> {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(()=> {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames(cls.profilePageHeader, {}, [className])}>
            <Text title={t("Профиль")}/>
            {canEdit && (
                <div className={cls.btnsWrappers}>
                    {readonly ? (
                        <Button theme={ButtonTheme.OUTLINE}         className={cls.editBtn}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>
                    ): (
                        <>
                            <Button theme={ButtonTheme.OUTLINE_RED} className={cls.editBtn}
                                onClick={onCancelEdit}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button theme={ButtonTheme.OUTLINE} className={cls.saveBtn}
                                onClick={onSave}
                            >
                                {t('Сохранить')}
                            </Button>
                        </>
                        
                    )}
                </div>
            )}
            
            
        </div>
    );
}