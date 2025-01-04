"use client";
import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const targetDate = new Date("2025-09-20T00:00:00-07:00"); // Pacific Time (PDT)

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    // Calculate time components
    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44)); // Approximate month length
    const days = Math.floor(difference / (1000 * 60 * 60 * 24)) % 30.44;
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { months, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  return (
    <div className="text-center block mx-auto body">
      <p>
        {timeLeft.months} months | {timeLeft.days.toFixed(0)} days
      </p>
    </div>
  );
};

export default CountdownTimer;
