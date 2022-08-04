import React from 'react'
import {Bar, Pie, Doughnut} from 'react-chartjs-2'
import Chart from 'chart.js/auto';
const Graph = () => {
  return (
    <div >
         <Bar className='lg:h-20 h-44'
         height={80}
      data={{
        labels:['1 march','','','','','','','','','','','14 march'],
        datasets:[{
         
          data:[80,20,75,30,90,60,50,40,70,40,80,40],
          backgroundColor:'#4338CA',
          barThickness:8
        },
       
      
        ]
      }}
      options={{
        tooltips:{
          mode:'index',
          callbacks:{
            label:function(toolTipItem){
              return ("Revenue: $"+toolTipItem.value)
            }
          }

        },
        plugins:{
   legend: {
    display: false
   }
  },
        scales:{
          xAxes:[
            {
              gridLines: {
                display:false
            },
              scaleLabel:{
                
                display:true,
                fontColor:'',
                fontSize:20
              },
              ticks:{
                fontColor:'black'
              }
            }
          ],
          yAxes:[
          {
            gridLines: {
                display:false
            }   ,
            scaleLabel:{
                
                display:true,
                fontColor:'Lightgray',
                fontSize:50,
              },
            ticks:{
              beginAtZero:true,
              fontColor:'black',
              
            }
          }
          ]
        }
      }}
      >

      </Bar>
    </div>
  )
}

export default Graph;