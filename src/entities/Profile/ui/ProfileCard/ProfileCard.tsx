import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import {  Text } from 'shared';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string)=> void;
    onChangeLastname?: (value?: string)=> void;
    onChangeAge?: (value?: string)=> void;
    onChangeCity?: (value?: string)=> void;
    onChangeUsername?: (value?: string)=> void;
    onChangeAvatar?: (value?: string)=> void;
}



export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    const { className, 
        data, 
        isLoading, 
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername
    } = props;
    const {t} = useTranslation('profile');

    if(isLoading) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <Loader/>
            </div>
        )
    }

    if(error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text theme={TextTheme.ERROR}
                    title={t('Произошла непредвиденная ошибка')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly
    }

    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Имя')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Фамилия')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t("Логин")}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
            </div>
        </div>
    );
}