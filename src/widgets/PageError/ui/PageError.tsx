import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared';

interface PageErrorProps {
    className?: string;
}

export const PageError: React.FC<PageErrorProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    const reloadPage= ()=> {
        location.reload()
    }

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить')}
            </Button>
        </div>
    );
}