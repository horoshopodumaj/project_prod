import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
    inverted?: boolean;
}

export const Icon: React.FC<IconProps> = (props) => {
    const { className, Svg, inverted, ...restProps } = props;

    return (
        <Svg className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])}
            {...restProps}
        />

    );
}