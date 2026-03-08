import { MutableRefObject, useEffect, useRef } from "react";

export interface UseInfiniteScrollOptions {
    callback?: ()=> void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>
}


export function useInfiniteScroll({callback, triggerRef, wrapperRef}:UseInfiniteScrollOptions){
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(()=> {

        if(callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: "0px",
                scrollMargin: "0px",
                threshold: 1.0,
            };

            observer.current = new IntersectionObserver(([entry])=> {
                if(entry.isIntersecting) {
                    callback()

                }
            }, options);

            observer.current.observe(triggerRef.current);
        }


        return ()=> {
            if(observer.current) {

                //eslint-disable-next-line 
                observer.current.unobserve(triggerRef.current)
            }
        }

    }, [triggerRef, wrapperRef, callback])
}