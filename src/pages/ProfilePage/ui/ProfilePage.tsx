import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DymanicModuleLoader, ReducersList } 
    from 'shared/lib/components/DymanicModuleLoader/DymanicModuleLoader';
import { profileReducer } from 'entities/Profile';


const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <DymanicModuleLoader reducers={reducers}
            removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('Страница профиля')}
            </div>
        </DymanicModuleLoader>
        
    );
}

export default ProfilePage