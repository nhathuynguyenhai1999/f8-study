import { useState, useEffect } from 'react'

function Sale() {
    const targetTime = new Date('2023-07-07').getTime();
    const calculateRemainingTime = () => {

        const currTime = new Date().getTime();
        const remainingTime = targetTime - currTime;

        const days=  Math.floor((remainingTime / (1000 * 60 * 60 * 24)))
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const mins = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((remainingTime % (1000 * 60)) / 1000);
        return { days,hours, mins, secs };
    }
    const [timeRemaining, setTimeRemaining] = useState(calculateRemainingTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateRemainingTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

return (
    <div className="grid wide sale-container" id="SALE">
        <div className="sale-content">
            <div className="sale-img">
                <img src="./img/sale.png" />
            </div>
            <div className="sale-description">
                <div className="sale-title">
                    <h3>DEAL <br></br> of the day</h3>
                </div>
                <div className="sale-slogan">
                    <p>Price Is Your Beautiful Smile!</p>
                    <p>Big Buys, But Bigger Savings.
                        <br />
                        Sale up to 70%</p>
                </div>
            </div>
            <div className="sale-countdown">
                <div className="countdown-btn day">
                    <h5>{timeRemaining.days}</h5>
                    <span>Days</span>
                </div>
                <div className="countdown-btn hour">
                    <h5>{timeRemaining.hours}</h5>
                    <span> Hours</span>
                </div>
                <div className="countdown-btn minute">
                    <h5>{timeRemaining.mins}</h5>
                    <span>Mins</span>
                </div>
                <div className="countdown-btn second">
                    <h5>{timeRemaining.secs}</h5>
                    <span>Secs</span>
                </div>
            </div>

        </div>
    </div>
)
}

export default Sale