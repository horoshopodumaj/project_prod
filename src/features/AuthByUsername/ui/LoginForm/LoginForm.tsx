import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared';
import Input from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
    const {t} = useTranslation()
    const { className } = props;

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input 
                autoFocus
                placeholder={t('Введите username')} type="text" className={cls.input} />
            <Input placeholder={t('Введите пароль')} type="text" className={cls.input} />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
}