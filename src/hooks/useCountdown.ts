import { useState, useEffect } from "react";
import { FuncModelStruct } from "../models/function.model";
import { HookModelStruct } from "../models/hook.model";
import { CountdownModelStruct } from "../models/countdown.model";
import { randomNumber } from "../utils/random.util";

export const useCountdown: FuncModelStruct<CountdownModelStruct> = (): CountdownModelStruct => {
    const [milliSeconds, setMilliSeconds]: HookModelStruct<number> = useState<number>(0);
    const [expire, setExpire]: HookModelStruct<number> = useState<number>(0);

    useEffect((): void => {
        const max: number = 105000;
        const min: number = 45000;

        const random: number = randomNumber({ min, max }) * 1000;
        
        const seconds: number = Date.now() + random;
        setExpire(seconds);
    }, []);
    
    useEffect((): void => {
        if (!expire) {
            return;
        }
        
        getMilliSecond();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [expire]);

    const getMilliSecond: FuncModelStruct = (): void => {
        const current: number = Date.now();
        const time: number = expire - current;
        setMilliSeconds(time);

        setTimeout((): void => {
            getMilliSecond();
        }, 1000);
    };

    const getDay: () => number = (): number => {
        const day: number = ((milliSeconds / (86400 * 1000)) % 7);
        return Math.floor(day);
    };

    const getHour: () => number = (): number => {
        const hour: number = ((milliSeconds / (3600 * 1000)) % 24);
        return Math.floor(hour);
    };

    const getMinute: () => number = (): number => {
        const minute: number = ((milliSeconds / (60 * 1000)) % 60);
        return Math.floor(minute);
    };

    const getSecond: () => number = (): number => {
        const second: number = ((milliSeconds % (60 * 1000)) / 1000);
        return Math.floor(second);
    };

    return { 
        getDay, 
        getHour, 
        getMinute, 
        getSecond 
    };
};