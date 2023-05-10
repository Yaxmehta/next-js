import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels:  [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets:  [
            {
              label: new Date().getFullYear(),
              backgroundColor: "#CE2F2F",
              borderColor: "#E06666",
              data: [30, 78, 56, 34, 100, 45, 13],
              fill: false,
              barThickness: 8,
            },
            {
              label: new Date().getFullYear() - 1,
              fill: false,
              backgroundColor: "#3182ce",
              borderColor: "#3182ce",
              data: [27, 68, 86, 74, 30, 10, 87],
              barThickness: 8,
            },
            {
              label: new Date().getFullYear() - 2,
              fill: false,
              backgroundColor: "#93C54B",
              borderColor: "#6AA84F",
              data: [35, 70, 96, 44, 50, 24, 65],
              barThickness: 8,
            },
          ],
        }}
        height={300}
        width={500}
        options ={{
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Orders Chart",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          legend: {
            labels: {
              fontColor: "rgba(0,0,0,.4)",
            },
            align: "end",
            position: "bottom",
          },
          scales: {
            xAxes: [
              {
                display: false,
                scaleLabel: {
                  display: true,
                  labelString: "Month",
                },
                gridLines: {
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "rgba(33, 37, 41, 0.3)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Value",
                },
                gridLines: {
                  borderDash: [2],
                  drawBorder: false,
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.2)",
                  zeroLineColor: "rgba(33, 37, 41, 0.15)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
          }
        }}
      />
    </div>
  );
};
export default BarChart;