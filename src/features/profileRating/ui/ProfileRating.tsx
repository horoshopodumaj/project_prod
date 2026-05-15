import { RatingCard } from '@/entities/Rating';
import { useTranslation } from 'react-i18next';
import { useProfileRating, useRateProfile } from '../api/profileRatingApi';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { skipToken } from '@reduxjs/toolkit/query';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { memo, useCallback } from 'react';

export interface ProfileRatingProps {
    className?: string;
    profileId?: string;
}

const ProfileRating: React.FC<ProfileRatingProps> = (props) => {
    const { className, profileId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = 
        useProfileRating(profileId ? { userId: userData?.id ?? '', profileId } : skipToken);

    const [rateProfileMutation] = useRateProfile()

    const rating = data?.[0];


    const handleRateProfile = useCallback((starsCount: number, feedback?: string)=> {
        try {
            rateProfileMutation({
                profileId: profileId ?? '',
                userId: userData?.id ?? '',
                rate: starsCount,
                feedback: feedback ?? ''
            })
        } catch (error) {
            console.log(error)
        }

    }, [profileId, rateProfileMutation, userData?.id])


    const onAccept = useCallback((starsCount: number, feedback?: string)=> {
        handleRateProfile(starsCount, feedback)
    }, [handleRateProfile])

    const onCancel = useCallback((starsCount: number)=> {
        handleRateProfile(starsCount)
    }, [handleRateProfile])


    if(isLoading) {
        return <Skeleton width={'100%'} height={120}/>
    }

    return (
        <RatingCard 
            className={className}
            title={t('Оцените профиль')}
            feedbackTitle={t('Оставьте свой отзыв на профиль')}
            hasFeedback
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
        />

    );
}

export default memo(ProfileRating);