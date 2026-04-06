import React from 'react'
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <Page>
            {t("Главная страница")}
            <HStack>
                <ListBox/>
            </HStack>
        </Page>
    )
}

export default MainPage