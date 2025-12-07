import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends  HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;

}

const Input = memo((props: InputProps) => {
    const { 
        className, 
        value, 
        onChange, 
        type ='text', 
        placeholder, 
        autoFocus, 
        ...otherProps } = props;

    const ref = useRef<HTMLInputElement>(null)

    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(()=> {
        if(autoFocus) {
            setIsFocused(true)
        }
    }, [autoFocus])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>)=> {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
        ref.current?.focus()
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = ()=> {
        setIsFocused(true)
    }

    const onSelect = (e: any)=> {
        setCaretPosition(e?.target?.selectionStart || 0)
    }

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}
           
        >
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder} >`}
                </div>
            )}

            <div className={cls.caretWrapper}>
                <input  
                    ref={ref}
                    value={value}
                    onChange={onChangeHandler}
                    type={type}
                    className={cls.input}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    autoFocus={autoFocus}
                    {...otherProps} 
                />
                {isFocused && (
                    <span 
                        className={cls.caret}
                        style={{left: `${caretPosition * 9}px`}}
                    ></span>
                )}
            </div>

            
        </div>

    );
})

Input.displayName = "Input";

export default Input;