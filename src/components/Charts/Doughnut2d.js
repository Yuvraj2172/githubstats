import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);
const Doughnut2d = ({ data }) => {
  const dataSource = {
    chart: {
      caption: "Stats per language",
      decimals: 0,
      doughnutRadius: "45%",
      showPercentValues: 0,
      theme: "candy",
    },
    data,
  };

  return (
    <ReactFusioncharts
      type="doughnut2d"
      width="100%"
      height="100%"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
};

export default Doughnut2d;
