import { Bar } from "react-chartjs-2";

export default function  Barline (){
    const BarchartData = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        datasets: [
            {
                label: "Projected sales",
                backgroundColor: color => {
                    if (color.raw >= 50) {
                        return "green";
                    }
                    else {
                        return "red";
                    }
                },
                borderWidth: 1,
                data: [42, 56, 9, 52, 66, 87, 51, 42, 32, 88,150,125]
            }
        ]
    };
    const config = {
        type: 'bar',
        data: BarchartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
        title: {
            display: true,
            text: "Bar Chart with Diffrent Color"
        }
    };

    return(
        <>
        <Bar {...config}/>
        </>
    )
}