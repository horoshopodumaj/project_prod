import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { Input } from '@/shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, HStack } from '@/shared';
import { ButtonTheme } from '@/shared/ui/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormError, getAddCommentFormText } 
    from '../../model/selectors/addCommentFormSelectors';
import { useCallback } from 'react';
import { addCommentFormActions, addCommentFormReducer } 
    from '../../model/slice/addCommentFormSlice';
import { DymanicModuleLoader, ReducersList } 
    from '@/shared/lib/components/DymanicModuleLoader/DymanicModuleLoader';


export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
}

const AddCommentForm: React.FC<AddCommentFormProps> = (props) => {
    const { className, onSendComment } = props;

    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText)
    const error = useSelector(getAddCommentFormError);


    const onCommentTextChange = useCallback((value: string)=> {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch]);

    const onSendHandler = useCallback(()=> {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [text, onSendComment, onCommentTextChange])

    return (
        <DymanicModuleLoader reducers={reducers}>
            <HStack justify='between' max 
                className={classNames(cls.addCommentForm, {}, [className])}>
                <Input 
                    className={cls.input}
                    placeholder={t('Комментарий')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button 
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Сохранить')}
                </Button>
            </HStack>
        </DymanicModuleLoader>
    );
}

export default AddCommentForm;