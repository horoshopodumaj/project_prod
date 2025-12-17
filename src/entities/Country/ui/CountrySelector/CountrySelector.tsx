import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';


interface CountrySelectorProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    {value: Country.Armenia, content: Country.Armenia},
    {value: Country.Russia, content: Country.Russia},
    {value: Country.Belarus, content: Country.Belarus},
    {value: Country.Georgia, content: Country.Georgia},
    {value: Country.China, content: Country.China},
]

export const CountrySelector: React.FC<CountrySelectorProps> = memo((props) => {
    const { className, value, onChange, readonly } = props;
    const {t} = useTranslation();

    const onChangeHandler = useCallback((value: string)=> {
        onChange?.(value as Country)
    }, [onChange])


    return (
        <Select className={classNames('', {}, [className])}
            label={t('Страна')}
            value={value}
            onChange={onChangeHandler}
            options={options}
            readonly={readonly}
        />

    );
})

CountrySelector.displayName ="CountrySelector";

export default CountrySelector;