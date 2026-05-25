import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import {  HStack, Text, VStack } from '@/shared';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from '@/shared/ui/Loader';
import { TextAlign, TextTheme } from '@/shared/ui/Text';
import { Avatar } from '@/shared/ui/Avatar';
import { CurrenceSelect, Currency } from '@/entities/Currency';
import { CountrySelector, Country } from '@/entities/Country';

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
    onChangeCurrency?: (value: Currency)=> void;
    onChangeCountry?: (value: Country)=> void;
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
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry
    } = props;
    const {t} = useTranslation('profile');

    if(isLoading) {
        return (
            <HStack justify='center' 
                max
                className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <Loader/>
            </HStack>
        )
    }

    if(error) {
        return (
            <HStack 
                justify='center' 
                max
                className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text theme={TextTheme.ERROR}
                    title={t('Произошла непредвиденная ошибка')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly
    }

    return (
        <VStack gap='8' max className={classNames(cls.profileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify='center' max> 
                    <Avatar src={data?.avatar} />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('Имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid={`ProfileCard.firstname`}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid={`ProfileCard.lastname`}
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
            <CurrenceSelect 
                className={cls.input}
                value={data?.currency} 
                onChange={onChangeCurrency} 
                readonly={readonly}
            />
            <CountrySelector 
                className={cls.input}
                value={data?.country} 
                onChange={onChangeCountry} 
                readonly={readonly}
            />
        </VStack>
    );
}