import React from 'react'
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
} from 'chart.js';

import { Bar, Doughnut } from 'react-chartjs-2';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'july'],
    datasets: [
        {
            label: 'Total Sales',
            data: [25, 35, 45, 50, 35, 45, 35],
            backgroundColor: 'rgba(44, 101, 241, 1)'
            
            ,
            
            borderColor: 'rgba(44, 101, 241, 1)',
           
            borderWidth: 1,
            barThickness: 24,
            borderRadius: 14,

        },
        {
            label: 'Total Balance',
            data: [40, 45, 30, 60, 40, 30, 40],
            backgroundColor: 'rgba(39, 201, 169, 1)',
            borderColor: 'rgba(39, 201, 169, 1)',
            borderWidth: 1,
            barThickness: 14,
            borderRadius: 10,
        }

    ],
}




function Bargraph() {
    return (
        <div className='flex'>
            
                
                
                <div className='mx-auto'>
                    <Bar data={data}
                        height={300}
                        width={800}
                    />

               
        </div>
            
        </div>
    )
}

export default Bargraph
