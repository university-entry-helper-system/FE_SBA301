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
    <div className="w-full py-16 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-8 -left-8 w-40 h-40 bg-yellow-300/30 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-1/2 -right-12 w-48 h-48 bg-orange-300/30 rounded-full blur-xl animate-float-medium"></div>
        <div className="absolute -bottom-8 left-1/3 w-36 h-36 bg-amber-300/30 rounded-full blur-xl animate-float-fast"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in text-yellow-50">
                Đếm ngược ngày thi đại học 2025
              </h2>
              <p className="text-yellow-100 text-xl animate-fade-in-delay">
                Kỳ thi dự kiến bắt đầu ngày 25/06/2025
              </p>
            </div>
            
            <div className="flex gap-6 md:gap-8">
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
    <div className="bg-white/15 rounded-lg px-8 py-6 backdrop-blur-sm min-w-[120px] 
                    border border-white/30 shadow-lg animate-fade-up
                    hover:bg-white/25 transition-colors duration-300">
      <div className="text-5xl font-bold animate-pulse-slow text-yellow-50">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-lg text-yellow-100 mt-2">{label}</div>
    </div>
  </div>
) 