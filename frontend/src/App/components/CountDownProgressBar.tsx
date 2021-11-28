import React, { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap';

interface Props {
    seconds: number,
    onProgressFinish: () => void,
}

const CountDownProgressBar = ({ seconds, onProgressFinish }: Props) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const intervalSize = parseFloat((100 / seconds).toFixed(2));

    // updates each .1 seconds or 100 milliseconds 
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft((t) => t - .1);
            } else {
                if (seconds !== 0) onProgressFinish();
                clearInterval(intervalId);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, [onProgressFinish, timeLeft, intervalSize, seconds]);


    if (seconds === 0) return <></> //dont show it if it is not applicable 
    else return <ProgressBar className="sticky-top" striped variant="info" now={((seconds - timeLeft) * 100 / seconds)} />



}

export default CountDownProgressBar