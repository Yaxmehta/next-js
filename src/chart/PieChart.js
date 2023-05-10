import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

export default function PieChart(){
    const canvas = useRef();

  useEffect(() => {
    const ctx = canvas.current;

    let chartStatus = Chart.getChart('myChart');
      if (chartStatus != undefined) {
        chartStatus.destroy();
    }

    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Lions', 'Monkeys', 'Zebras', 'Eagles', 'Horses'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [20, 20, 20, 20, 20],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Number of animals in the zoo',
          },
        },
      },
    });
  }, []);
  return (
    <div className='container'>
      <canvas id='myChart' ref={canvas}></canvas>
    </div>
  );
}