import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, Text } from 'shared';
import Input from 'shared/ui/Input/Input';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUsername } from 
    'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from 
    '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 
    '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from 
    '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { DymanicModuleLoader, ReducersList } from 
    'shared/lib/components/DymanicModuleLoader/DymanicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';


export interface LoginFormProps {
    className?: string;
    onSuccess: ()=> void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
}

const LoginForm: React.FC<LoginFormProps> = memo((props) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
   
    const { className, onSuccess } = props;

    const onChangeUsername = useCallback((value: string)=> {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string)=> {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick= useCallback(async ()=> {
        const result = await dispatch(loginByUsername({username, password}));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess])

    return (
        <DymanicModuleLoader reducers={initialReducers}>
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
        </DymanicModuleLoader>
    );
});


LoginForm.displayName = "LoginForm";

export default LoginForm;