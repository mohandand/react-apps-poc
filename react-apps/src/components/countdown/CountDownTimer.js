import React, { useEffect, useState } from 'react';
import './countdowntimer.css';

const CountDownTimer = () => {
  const [endDateTime, setEndDateTime] = useState('');
  const [timetoDisplay, setTimetodisaply] = useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  });

  const updateCountdownTimer = () => {
    const currentTime = new Date().getTime();
    const selectedDateTime = new Date(endDateTime).getTime();
    const difference = selectedDateTime - currentTime;

    if (difference < 0) {
      // Timer is over
      // setTimerOver(true);
      //clearInterval(interval); // Stop the interval when the timer is over
    } else {
      const newDuration = {
        days: Math.floor(difference / (24 * 60 * 60 * 1000)),
        hours: Math.floor((difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)),
        minutes: Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000)),
        seconds: Math.floor((difference % (60 * 1000)) / 1000),
      };
      setTimetodisaply({ ...newDuration });
    }
  };

  useEffect(() => {
    let interval; // Declare interval variable to be accessible outside the useEffect
    if (endDateTime) {
      // Check if endDateTime is set before starting the interval
      interval = setInterval(() => {
        updateCountdownTimer();
      }, 1000);
    }

    return () => clearInterval(interval); // Cleanup the interval on component unmount or when endDateTime changes
  }, [endDateTime]);

  const handleEndDate = (e) => {
    setEndDateTime(e.target.value);
  };

  return (
    <div className="timer-container">
      <h3>CountDownTimer</h3>
      <div>
        <label htmlFor="endDateTime">Select End Date and Time:</label>
        <input
          type="datetime-local"
          id="endDateTime"
          value={endDateTime}
          onChange={handleEndDate}
        />
      </div>
      <div className="time-block">
        <div className="block">
          {timetoDisplay.days}
          <div>Days</div>
        </div>
        <div className="block">
          {timetoDisplay.hours}
          <div>Hours</div>
        </div>
        <div className="block">
          {timetoDisplay.minutes}
          <div>Minutes</div>
        </div>
        <div className="block">
          {timetoDisplay.seconds}
          <div>Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
