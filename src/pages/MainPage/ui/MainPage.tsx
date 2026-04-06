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
                <ListBox 
                    defaultValue='Выберите значение'
                    value={undefined}
                    onChange={console.log}
                    items={[
                        {value: '1', content: '123', disabled: true},
                        {value: '2', content: '213'},
                        {value: '3', content: '321'},
                    ]}
                />
            </HStack>
        </Page>
    )
}

export default MainPage