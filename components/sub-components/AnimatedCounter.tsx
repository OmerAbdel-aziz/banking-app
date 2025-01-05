'use client'
import CountUp from 'react-countup';

const AnimatedCounter = ({value} : {value: number}) => {
  return (
    <CountUp end={value} duration={1.75} prefix="$" separator=","
    />
  )
}

export default AnimatedCounter