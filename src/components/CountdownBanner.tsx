import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-06-25T00:00:00')

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 text-white py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-1/2 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float-medium"></div>
        <div className="absolute -bottom-4 left-1/3 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float-fast"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in">
              Đếm ngược ngày thi đại học 2025
            </h2>
            <p className="text-primary-100 text-lg animate-fade-in-delay">
              Kỳ thi dự kiến bắt đầu ngày 25/06/2025
            </p>
          </div>
          
          <div className="flex gap-4 md:gap-6">
            <TimeBox value={timeLeft.days} label="Ngày" />
            <TimeBox value={timeLeft.hours} label="Giờ" />
            <TimeBox value={timeLeft.minutes} label="Phút" />
            <TimeBox value={timeLeft.seconds} label="Giây" />
          </div>
        </div>
      </div>
    </div>
  )
}

interface TimeBoxProps {
  value: number
  label: string
}

const TimeBox = ({ value, label }: TimeBoxProps) => (
  <div className="text-center transform hover:scale-110 transition-transform duration-300">
    <div className="bg-white/10 rounded-lg px-6 py-4 backdrop-blur-sm min-w-[100px] 
                    border border-white/20 shadow-lg animate-fade-up
                    hover:bg-white/20 transition-colors duration-300">
      <div className="text-4xl font-bold animate-pulse-slow">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-sm text-primary-100">{label}</div>
    </div>
  </div>
) 