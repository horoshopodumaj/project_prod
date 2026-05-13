import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import StarIcon from '@/shared/assets/icons/star.svg'
import { Icon } from '../Icon/Icon';
import { useState } from 'react';

interface StarRatingProps {
    className?: string;
    onSelect?: (starCount: number)=> void;
    size?: number;
    selectedStars?: number;
}

const stars = [1,2,3,4,5]

export const StarRating: React.FC<StarRatingProps> = (props) => {
    const { className, size = 30, selectedStars = 0, onSelect } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(0);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));


    const onLeave = () => {
        if(!isSelected) {
            setCurrentStarsCount(0)
        }
    }

    const onHover = (starsCount: number) => ()  => {
        if(!isSelected) {
            setCurrentStarsCount(starsCount)
        }
    }

    const onClick = (starsCount: number) => ()  => {
        if(!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount)
            setIsSelected(true)
        }
    }

    return (
        <div className={classNames(cls.starRating, {}, [className])}>
            {stars.map((starNumber)=> (
                <Icon  
                    Svg={StarIcon} 
                    key={starNumber}
                    className={classNames(cls.starIcon, {[cls.selected]: isSelected}, 
                        [currentStarsCount >= starNumber ? cls.hovered : cls.normal]
                    )}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                    //УДАЛИТЬ после fixа webpack!!!
                    //eslint-disable-next-line 
                    viewBox='0 0 24 22'
                />
            ))}
        </div>
    );
}