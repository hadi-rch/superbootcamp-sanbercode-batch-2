import {useState, useEffect} from 'react'
import {getRemainingTimeUntilMsTimestamp} from './third'
const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
} 



const HitungMundur = ({hitungMundurPerdetik}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
       const intervalId = setInterval(() => {
        updateRemainingTime(hitungMundurPerdetik);
        },1000);
        return () => clearTimeout(intervalId);
    },[hitungMundurPerdetik])

    function updateRemainingTime(countdown){
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div>
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span>{remainingTime.hours}</span>
            <span>hours</span>
            <span>{remainingTime.minutes}</span>
            <span>minutes</span>
            <span>{remainingTime.seconds}</span>
            <span>seconds</span>
        </div>
    );
}
export default HitungMundur;