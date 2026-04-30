import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { Text, VStack } from 'shared';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();

    if(!id) {
        return <Text text={t('Произошла непредвиденная ошибка')}/>
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap='16' max>
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
        
    );
}

export default ProfilePage