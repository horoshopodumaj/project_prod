import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: React.FC<ArticleEditPageProps> = (props) => {
    const { className } = props;
    const {id} = useParams<{id: string}>();
    const isEdit = Boolean(id)

    return (
        <Page className={classNames(cls.articleEditPage, {}, [className])}>
            {isEdit ?` ARTICLE EDIT ${id}`: "CREATE ARTICLE"}
        </Page>
    );
}

export default memo(ArticleEditPage)