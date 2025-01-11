"use client";
import React, { useEffect, useState } from "react";

type CountdownTimerProps = {
  mockNow?: string; // Optional mock date in ISO string format for testing
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ mockNow }) => {
  const [timeLeft, setTimeLeft] = useState<{
    months?: number;
    days?: string;
    hours?: number;
    minutes?: number;
    seconds?: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-09-20T00:00:00-07:00");
      const now = mockNow ? new Date(mockNow) : new Date(); // Use mockNow if provided, otherwise use the current time
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        // Target date has passed
        return null; // No time left
      }

      const totalMonths = difference / (1000 * 60 * 60 * 24 * 30.44);
      const months = Math.floor(totalMonths); // Show months as whole numbers
      const remainingDays = (totalMonths - months) * 30.44;
      const days = remainingDays.toFixed(1); // Show days with one decimal point

      if (months >= 1) {
        // More than 1 month left
        return { months, days };
      }

      const totalDays = difference / (1000 * 60 * 60 * 24);
      const daysLeft = Math.floor(totalDays);

      if (daysLeft > 7) {
        // Less than 1 month, but more than 1 week
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        return { days: daysLeft.toString(), hours };
      }

      // Within 1 week
      const hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);

      return { hours: hoursLeft, minutes: minutesLeft, seconds: secondsLeft };
    };

    setTimeLeft(calculateTimeLeft()); // Initial calculation

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft === null) {
        // Stop the timer when the target date is reached
        clearInterval(timer);
      }
      setTimeLeft(newTimeLeft);

      // If testing with mockNow, increment it by 1 second
      if (mockNow) {
        mockNow = new Date(new Date(mockNow).getTime() + 1000).toISOString();
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [mockNow]);

  if (!timeLeft) {
    return null; // Don't display anything once the target date is reached
  }

  return (
    <div className="text-center block mx-auto body">
      {timeLeft.months !== undefined ? (
        <p>
          {timeLeft.months} months | {timeLeft.days} days
        </p>
      ) : timeLeft.days !== undefined ? (
        <p>
          {timeLeft.days} days | {timeLeft.hours} hours
        </p>
      ) : (
        <p>
          {timeLeft.hours} hours | {timeLeft.minutes} minutes | {timeLeft.seconds} seconds
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;