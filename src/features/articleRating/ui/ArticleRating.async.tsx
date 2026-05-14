import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = lazy(
    ()=> import('./ArticleRating')
)


export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton/>}>
            <ArticleRatingLazy {...props}/>
        </Suspense>

    )
}