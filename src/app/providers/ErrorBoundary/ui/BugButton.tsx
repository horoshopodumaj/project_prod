import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

//Тестовый компоненет для тестирования ErrorBoundary
export const BugButton = () => {
    const{t} = useTranslation();

    const [error, setError] = useState(false);

    const onThrow = ()=> {
        setError(prev=> !prev)
    }

    useEffect(()=> {
        if(error) {
            throw new Error()
        }
    }, [error])

    return (
        <Button onClick={onThrow}
        >
            {t('Ошибка')}
        </Button>
    );
}