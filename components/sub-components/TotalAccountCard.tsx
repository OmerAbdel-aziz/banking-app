import { formatAmount } from '@/lib/utils'
import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoghnutChart'

const TotalAccountCard = ({accounts =[], totalBanks, totalCurrentBalance}:TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
        <DoughnutChart accounts={accounts}/>
        </div>
        <div className=" flex flex-col gap-6">
            <h2 className='header-2'>Bank Accounts: {totalBanks}</h2>
           <div className="flex flex-col gap-2">
            <p className="total-balance-label">Total Current Balance</p>
            <p className="total-balance-amount"><AnimatedCounter value={totalCurrentBalance} /></p>
           </div>
        </div>
       

    </section>
  )
}

export default TotalAccountCard