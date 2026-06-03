import React from 'react'
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared';
import cls from './NotFoundPage.module.scss';
import { Page } from '@/widgets/Page';

const NotFoundPage = () => {
    const { t } = useTranslation();
    return (
        <Page data-testid='NotFoundPage' className={classNames(cls.notFoundPage)}>
            {t("Страница не найдена")}
        </Page>
    )
}

export default NotFoundPage