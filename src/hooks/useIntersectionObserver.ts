import { MutableRefObject, useEffect, useRef, useState } from "react";
import { FuncModelStruct } from "../models/function.model";
import { HookModelStruct } from "../models/hook.model";
import { ObserverModelStruct } from "../models/observer.model";

export const useIntersectionObserver: FuncModelStruct<ObserverModelStruct> = (): ObserverModelStruct => {

    const elementRef: MutableRefObject<any> = useRef<any>();

    const [isIntersecting, setIsIntersectin]: HookModelStruct<boolean> = useState<boolean>(false);

    const onObserver: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]): void => {
        if (isIntersecting) {
            return;
        }

        const [ entry ]: IntersectionObserverEntry[] = entries;

        elementRef.current.style.opacity = "0";

        if (entry.isIntersecting) {
            elementRef.current.style.opacity = "1";
            setIsIntersectin(true);
        }
    };

    useEffect((): FuncModelStruct | void => {
        if (isIntersecting) {
            return;
        }

        const observer: IntersectionObserver = new IntersectionObserver(onObserver, {
            root: null,
            // threshold: 1.0,
            rootMargin: "50px"
        });
        
        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return (): void => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }  
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isIntersecting]);

    const addElement: FuncModelStruct<any, void> = (element: any): void => {
        elementRef.current = element;
    };

    return {
        addElement,
        isIntersecting,
    };
};