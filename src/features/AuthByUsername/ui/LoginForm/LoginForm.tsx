import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, Text } from 'shared';
import Input from 'shared/ui/Input/Input';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 
    'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { TextTheme } from 'shared/ui/Text/Text';


interface LoginFormProps {
    className?: string;
}

const LoginForm: React.FC<LoginFormProps> = memo((props) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {username, password, error, isLoading} = useSelector(getLoginState)

    const { className } = props;

    const onChangeUsername = useCallback((value: string)=> {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string)=> {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick= useCallback(()=> {
        dispatch(loginByUsername({username, password}))
    }, [dispatch, username, password])

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Форма авторизации')}/>
            {error && <Text 
                text={t('Вы ввели неверный логин или пароль')} 
                theme={TextTheme.ERROR}
            />}
            <Input 
                autoFocus
                placeholder={t('Введите username')} type="text" className={cls.input}
                onChange={onChangeUsername}
                value={username}
            />
            <Input placeholder={t('Введите пароль')} type="text" className={cls.input} 
                onChange={onChangePassword}
                value={password}
            />
            <Button 
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});


LoginForm.displayName = "Input";

export { LoginForm };