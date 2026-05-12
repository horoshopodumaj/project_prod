import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { ChangeEvent, useMemo } from 'react';


export interface SelectOptions<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOptions<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select= <T extends string>(props: SelectProps<T>) => {
    const { className, 
        label, 
        options, 
        value, 
        onChange,
        readonly
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T)
    }

    const mods: Mods = {
        [cls.readonly]: readonly,
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
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select 
                disabled={readonly}
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
}

export default Select;