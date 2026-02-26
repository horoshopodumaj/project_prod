import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import Input from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormError, getAddCommentFormText } 
    from '../../model/selectors/addCommentFormSelectors';
import { useCallback } from 'react';
import { addCommentFormActions, addCommentFormReducer } 
    from '../../model/slice/addCommentFormSlice';
import { DymanicModuleLoader, ReducersList } 
    from 'shared/lib/components/DymanicModuleLoader/DymanicModuleLoader';
import { sendComment } from 'features/addCommentForm/model/services/sendComment/sendComment';


export interface AddCommentFormProps {
    className?: string;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
}

const AddCommentForm: React.FC<AddCommentFormProps> = (props) => {
    const { className } = props;

    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText)
    const error = useSelector(getAddCommentFormError);


    const onCommentTextChange = useCallback((value: string)=> {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch]);

    const onSendComment = useCallback(()=> {
        dispatch(sendComment());
    }, [dispatch])

    return (
        <DymanicModuleLoader reducers={reducers}>
            <div className={classNames(cls.addCommentForm, {}, [className])}>
                <Input 
                    className={cls.input}
                    placeholder={t('Комментарий')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button 
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendComment}
                >
                    {t('Сохранить')}
                </Button>
            </div>
        </DymanicModuleLoader>
    );
}

export default AddCommentForm;