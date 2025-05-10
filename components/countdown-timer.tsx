"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface CountdownTimerProps {
  targetDate?: string
  hours?: number
  className?: string
}

export function CountdownTimer({ targetDate, hours = 48, className }: CountdownTimerProps) {
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

  // Format numbers to always have two digits
  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num)

  return (
    <div className={cn("flex items-center justify-center gap-1 sm:gap-2", className)}>
      <TimeUnit value={timeLeft.days} label="Days" hideOnMobile={timeLeft.days === 0} />
      {timeLeft.days > 0 && <div className="text-sm sm:text-lg font-bold">:</div>}
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-sm sm:text-lg font-bold">:</div>
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <div className="text-sm sm:text-lg font-bold">:</div>
      <TimeUnit value={timeLeft.seconds} label="Sec" />
    </div>
  )
}

interface TimeUnitProps {
  value: number
  label: string
  hideOnMobile?: boolean
}

function TimeUnit({ value, label, hideOnMobile }: TimeUnitProps) {
  if (hideOnMobile) {
    return (
      <div className="hidden sm:block">
        <div className="bg-black/10 backdrop-blur-sm rounded-md px-2 py-1">
          <div className="text-base sm:text-xl font-bold" aria-label={`${value} ${label}`}>
            {value < 10 ? `0${value}` : value}
          </div>
          <div className="text-[10px] sm:text-xs font-medium">{label}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center">
      <div className="bg-black/10 backdrop-blur-sm rounded-md px-2 py-1">
        <div className="text-base sm:text-xl font-bold" aria-label={`${value} ${label}`}>
          {value < 10 ? `0${value}` : value}
        </div>
        <div className="text-[10px] sm:text-xs font-medium">{label}</div>
      </div>
    </div>
  )
}
