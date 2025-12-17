import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared';
import { Currency } from '../../model/types/currency';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';


interface CurrenceSelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    {value: Currency.RUB, content: Currency.RUB},
    {value: Currency.EUR, content: Currency.EUR},
    {value: Currency.USD, content: Currency.USD},
]

export const CurrenceSelect: React.FC<CurrenceSelectProps> = memo((props) => {
    const { className, value, onChange, readonly } = props;
    const {t} = useTranslation();

    const onChangeHandler = useCallback((value: string)=> {
        onChange?.(value as Currency)
    }, [onChange])


    return (
        <Select className={classNames('', {}, [className])}
            label={t('Валюта')}
            value={value}
            onChange={onChangeHandler}
            options={options}
            readonly={readonly}
        />

    );
})

CurrenceSelect.displayName ="CurrenceSelect";

export default CurrenceSelect;