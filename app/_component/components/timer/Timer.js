import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(2 * 60);

  useEffect(() => {
    if (timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(intervalId); // Cleanup on unmount
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={""}>
      {timeLeft > 0 ? (
        <div>
          {(String(minutes).padStart(2, '0'))}:{(String(seconds).padStart(2, '0'))}
        </div>
      ) : (
        <div>0</div>
      )}

    </div>
  )
}

export default Timer
