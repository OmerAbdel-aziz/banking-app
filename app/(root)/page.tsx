import DoughnutChart from '@/components/sub-components/DoghnutChart'
import HeaderBox from '@/components/sub-components/HeaderBox'
import TotalAccountCard from '@/components/sub-components/TotalAccountCard'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const HomePage = () => {
  const userLoggedIn = {
    firstName: "Omer",
  }

  return (
    <section className='home'>
      <div className="home-content">
        <div className='home-header'>
         
        <HeaderBox title="Welcome Back, " subtext="Access and manage your accounts" user={userLoggedIn?.firstName || "Guest"} type="greeting"  />
        <TotalAccountCard accounts={[]} totalBanks={1} totalCurrentBalance={2750} />
        </div>
      </div>

    </section>
  )
}

export default HomePage