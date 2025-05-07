"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate?: string
  hours?: number
}

export function CountdownTimer({ targetDate, hours = 48 }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [target, setTarget] = useState<number | null>(null)

  useEffect(() => {
    // Check if we have a stored target date in localStorage
    const storedTarget = localStorage.getItem("countdown-target")
    let targetTime: number

    if (storedTarget) {
      // Use the stored target if it exists and hasn't expired
      targetTime = Number.parseInt(storedTarget, 10)

      // If the stored target has expired, create a new one
      if (targetTime <= new Date().getTime()) {
        targetTime = new Date().getTime() + hours * 60 * 60 * 1000
        localStorage.setItem("countdown-target", targetTime.toString())
      }
    } else if (targetDate) {
      // If a specific target date was provided, use that
      targetTime = new Date(targetDate).getTime()
      localStorage.setItem("countdown-target", targetTime.toString())
    } else {
      // Otherwise, create a new target based on the hours
      targetTime = new Date().getTime() + hours * 60 * 60 * 1000
      localStorage.setItem("countdown-target", targetTime.toString())
    }

    setTarget(targetTime)
  }, [targetDate, hours])

  useEffect(() => {
    if (!target) return

    function calculateTimeLeft() {
      const difference = target - new Date().getTime()

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Set up interval for updates
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)

      // If countdown has reached zero, clear the interval
      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold">{timeLeft.days}</div>
        <div className="text-xs text-gray-500">Days</div>
      </div>
      <div className="text-xl font-bold">:</div>
      <div className="text-center">
        <div className="text-2xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs text-gray-500">Hours</div>
      </div>
      <div className="text-xl font-bold">:</div>
      <div className="text-center">
        <div className="text-2xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs text-gray-500">Minutes</div>
      </div>
      <div className="text-xl font-bold">:</div>
      <div className="text-center">
        <div className="text-2xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs text-gray-500">Seconds</div>
      </div>
    </div>
  )
}
