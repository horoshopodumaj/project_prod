import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Button, HStack, Text, VStack } from '@/shared';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@/shared/ui/Modal/Modal';
import Input from '@/shared/ui/Input/Input';
import { ButtonTheme } from '@/shared/ui/Button/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard: React.FC<RatingCardProps> = (props) => {
    const { className, 
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0
    } = props;

    const {t} = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');


    const onSelectStars = useCallback((selectedStarsCount: number)=> {
        setStarsCount(selectedStarsCount);
        if(hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount)
        }
    }, [hasFeedback, onAccept]);

    const onAcceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback)
    }, [starsCount, feedback, onAccept])

    const onCancelHandler  = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount)
    }, [starsCount, onCancel ]);

    const modalContent = (
        <>
            <Text title={feedbackTitle}/>
            <Input 
                placeholder={t('Ваш отзыв')}
                value={feedback}
                onChange={setFeedback}
            />
        </>
    )

    return (
        <Card className={classNames('', {}, [className])} max>
            <VStack align='center' gap='8'>
                <Text title={starsCount ? t('Спасибо за оценку') : title}/>
                <StarRating size={40} onSelect={onSelectStars} selectedStars={starsCount}/>
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} onClose={onCancelHandler} lazy>
                    {modalContent}
                    <VStack max gap={'32'} >
                        <HStack max gap='16' justify='end'>
                            <Button 
                                theme={ButtonTheme.OUTLINE_RED} 
                                onClick={onCancelHandler}
                            >{t('Отменить')}</Button>
                            <Button 
                                onClick={onAcceptHandler}
                            >{t('Отправить')}</Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={onCancelHandler} lazy>
                    <VStack gap={'32'}>
                        {modalContent}
                        <Button 
                            fullWidth
                            onClick={onAcceptHandler}
                        >{t('Отправить')}</Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
}