import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";

export default function EChartsComponent({ data, dateRange }) {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (!chart) return;

    const handleResize = () => {
      chart.resize();
    };

    // Tarayıcı boyutu değiştiğinde grafik boyutunu yeniden ayarla
    window.addEventListener("resize", handleResize);

    // Component kaldırıldığında event listener'ı kaldır
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [chart]);

  useEffect(() => {
    const newChart = echarts.init(chartRef.current);
    setChart(newChart);

    const option = {
      xAxis: {
        data: data.map((item) => item.date),
      },
      yAxis: {},
      color: ["#5470c6", "#91cc75", "#fac858"],
      series: [
        {
          data: data.map((item) => item.userCount),
          itemStyle: {
            color: "blue",
          },
          type: "line",
          stack: "x",
        },
        {
          data: data.map((item) => item.eventSum),
          itemStyle: {
            color: "orange",
          },
          type: "line",
          stack: "x",
        },
        {
          data: data.map((item) => item.eventPerUser),
          itemStyle: {
            color: "red",
          },
          type: "line",
          stack: "x",
        },
      ],
    };

    newChart.setOption(option);

    return () => {
      newChart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} className="w-full h-[350px]" />;
}
