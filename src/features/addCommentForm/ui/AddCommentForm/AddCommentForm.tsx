import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import Input from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { geAddCommentFormError, geAddCommentFormText } 
    from '../../model/selectors/addCommentFormSelectors';
import { useCallback } from 'react';
import { addCommentFormActions, addCommentFormReducer } 
    from '../../model/slice/addCommentFormSlice';
import { DymanicModuleLoader, ReducersList } 
    from 'shared/lib/components/DymanicModuleLoader/DymanicModuleLoader';


interface AddCommentFormProps {
    className?: string;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
}

export const AddCommentForm: React.FC<AddCommentFormProps> = (props) => {
    const { className } = props;

    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(geAddCommentFormText)
    const error = useSelector(geAddCommentFormError);


    const onCommentTextChange = useCallback((value: string)=> {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    return (
        <DymanicModuleLoader reducers={reducers}>
            <div className={classNames(cls.addCommentForm, {}, [className])}>
                <Input 
                    placeholder={t('Комментарий')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button 
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Сохранить')}
                </Button>
            </div>
        </DymanicModuleLoader>
    );
}