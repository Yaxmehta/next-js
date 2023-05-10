import Navbar from "../navbar";

import BarChart from "@/src/chart/BarChart";
import DoughnutChart from "@/src/chart/DoughnutChart";
import LineChart from "@/src/chart/LineChart";
import PieChart from "@/src/chart/PieChart";
import PolarChart from "@/src/chart/PolarChart";

const ChartPage = () => {
  return (
  <>
   <Navbar />
  {/* <BarChart/> */}
  {/* <PieChart/> */}
  <DoughnutChart/>
  {/* <LineChart/> */}
  {/* <PolarChart/> */}
  </>
  );
};
export default ChartPage;