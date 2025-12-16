import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { ChangeEvent, memo, useMemo } from 'react';


interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChange?: (value: string) => void;
}

export const Select: React.FC<SelectProps> = memo((props) => {
    const { className, 
        label, 
        options, 
        value, 
        onChange 
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    const optionsList = useMemo(()=> {
        return (
            options?.map((opt)=> (
                <option 
                    key={opt.value} 
                    value={opt.value} 
                    className={cls.option}
                >
                    {opt.content}
                </option>
            ))
        )
    }, [options])

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select 
                name="" 
                id="" 
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
})

Select.displayName = "Select";

export default Select;