"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({Accounts}:DoughnutChartProps) => {

    const data = {
         
        datasets: [{
          label: 'Banks',
          data: [300, 50, 100],
          backgroundColor: ['#0179fe', '#36A2EB', '#85b7ff'],
          hoverBackgroundColor: ['#0179fe', '#36A2EB', '#85b7ff']
        }],
        labels: ['Chase', 'Bank of America', 'Wells Fargo']
      };

  return (
    <div className="w-32 h-32">
      <Doughnut data={data} options={{
        responsive: true,
        cutout: '70%',
        plugins: {
          legend: {
            display: false,
          },
        }
      }} />
    </div>
  )
}

export default DoughnutChart