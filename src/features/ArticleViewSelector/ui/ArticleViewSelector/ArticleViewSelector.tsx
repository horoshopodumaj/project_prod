import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/list-24-24.svg'
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg'
import { Button, Icon } from '@/shared';
import { ButtonTheme } from '@/shared/ui/Button';


interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.TILED,
        icon: TiledIcon
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon
    },
]

export const ArticleViewSelector: React.FC<ArticleViewSelectorProps> = (props) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView)=> () => {
        onViewClick?.(newView)
    }

    return (
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
            {viewTypes.map((viewType)=> (
                <Button 
                    theme={ButtonTheme.CLEAR} key={viewType.view} onClick={onClick(viewType.view)}
                    
                >
                    <Icon 
                        Svg={viewType.icon} 
                        className={
                            classNames('', {[cls.notSelected]: viewType.view !== view}, [])}/>
                </Button>
            ))}
        </div>
    );
}