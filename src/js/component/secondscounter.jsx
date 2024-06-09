import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

// Componente de dígitos individuales
const Digit = ({ value }) => {
    return <div className="digit">{value}</div>;
};

Digit.propTypes = {
    value: PropTypes.number.isRequired,
};

// Componente SecondsCounter
const SecondsCounter = ({ seconds, onAlertTime }) => {
    const [currentSeconds, setCurrentSeconds] = useState(seconds);
    const intervalRef = useRef(null);

    useEffect(() => {
        // Function to update seconds
        const updateSeconds = () => {
            setCurrentSeconds((prev) => {
                const newTime = prev + 1;
                if (newTime === onAlertTime) {
                    alert(`Se alcanzó el tiempo: ${onAlertTime}`);
                }
                return newTime;
            });
        };

        // Set interval to update seconds every second
        intervalRef.current = setInterval(updateSeconds, 1000);

        // Cleanup function to clear interval and cancel any ongoing tasks
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [onAlertTime]);

    const digits = currentSeconds.toString().padStart(6, "0").split("").map(Number);

    return (
        <div>
            <div className="counter">
                <div className="icon">
                    <i className="far fa-clock"></i>
                </div>
                {digits.map((digit, index) => (
                    <Digit key={index} value={digit} />
                ))}
            </div>
        </div>
    );
};

SecondsCounter.propTypes = {
    seconds: PropTypes.number.isRequired,
    onAlertTime: PropTypes.number.isRequired,
};

export default SecondsCounter;
