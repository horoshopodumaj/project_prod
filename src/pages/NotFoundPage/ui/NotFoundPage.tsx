import React from 'react'
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.notFoundPage)}>
            {t("Страница не найдена")}
        </div>
    )
}

export default NotFoundPage