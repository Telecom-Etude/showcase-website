"use client";

import NumberFlow , {continuous} from "@number-flow/react";
import React, { useState, useEffect } from "react";

const easeOut = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export const LoadNumber = ({ value, duration = 4000 }: { value: number; duration: number }) => {
    const [count, setCount] = useState(0);
    const [startTime] = useState(Date.now());

    useEffect(() => {
        const totalDuration = duration;
        var frameId: number;

        const updateCount = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / totalDuration, 1);
            const easedProgress = easeOut(progress);
            const currentCount = Math.round(easedProgress * value);
            setCount(currentCount);

            if (progress < 1) {
                frameId = requestAnimationFrame(updateCount);
            }
        };
        frameId = requestAnimationFrame(updateCount);

        return () => cancelAnimationFrame(frameId);
    }, [value, duration, startTime]);

    return <NumberFlow plugins={[continuous]} value={count} willChange={true}/>;
};
