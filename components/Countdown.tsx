"use client";
import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null); // Start as null to avoid SSR issues

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-09-20T00:00:00-07:00");
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor(difference / (1000 * 60 * 60 * 24)) % 30.44;
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { months, days, hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft()); // Calculate initial time left

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clean up interval on unmount
  }, []);

  if (!timeLeft) {
    return <div className="text-center block mx-auto body">Loading...</div>; // Show loading state until initialized
  }

  return (
    <div className="text-center block mx-auto body">
      <p>
        {timeLeft.months} months | {timeLeft.days.toFixed(0)} days away 
      </p>
      {/* <p>| {timeLeft.hours} hours| {timeLeft.minutes} minutes | {timeLeft.seconds} second</p> */}
    </div>
  );
};

export default CountdownTimer;