import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';

interface AdminPanelPageProps {
    className?: string;
}
const AdminPanelPage: React.FC<AdminPanelPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('admin');

    return (
        <Page className={classNames('', {}, [className])}>
            {t("Админ панель")}
        </Page>
    );
}


export default AdminPanelPage;