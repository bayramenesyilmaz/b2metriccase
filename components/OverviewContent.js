import React, { useEffect, useState } from "react";
import useSWR from "swr";
import EChartsComponent from "@/components/LineCharts";
import DetailBox from "@/components/DetailBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { calculateTotalMetrics, mergedFilteredData } from "@/lib/utils";

const isLocal = process.env.NODE_ENV === "development";

export default function OverviewContent({
  platformSelectValues,
  dateRangeValues,
}) {
  const [filteredData, setFilteredData] = useState([]);
  const [filteredMetrics, setFilteredMetrics] = useState({});

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: fetchData,
    error,
    isLoading,
  } = useSWR(
    platformSelectValues
      ? `${
          isLocal ? "http://localhost:3000" : "https://b2metriccase.vercel.app"
        }/api/overview?platform=${JSON.stringify(platformSelectValues)}`
      : null,
    fetcher
  );

  useEffect(() => {
    if (!fetchData || !dateRangeValues) return;

    // Burada `mergedData` değişkeni, tüm platformlardan gelen ve tarih aralığına göre filtrelenmiş verileri içerecek
    const mergedData = mergedFilteredData(fetchData, dateRangeValues);
    setFilteredData(mergedData);

    // Toplam metrikleri hesaplamak için
    const totalMetrics = calculateTotalMetrics(fetchData);
    setFilteredMetrics(totalMetrics);
  }, [fetchData, dateRangeValues]);

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error {error.message} </div>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <DetailBox title="Active Users" value={filteredMetrics.activeUsers} />
        <DetailBox title="Sessions" value={filteredMetrics.sessions} />
        <DetailBox
          title="Returned Users"
          value={filteredMetrics.returnedUsers}
        />
        <DetailBox
          title="Registered Users"
          value={filteredMetrics.registeredUsers}
        />
      </div>

      <div className="w-full mt-6">
        <div className="flex justify-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <CheckBoxOutlineBlankIcon color="primary" />
            User Count
          </div>
          <div className="flex items-center gap-1">
            <CheckBoxOutlineBlankIcon color="warning" />
            Event Sum
          </div>
          <div className="flex items-center gap-1">
            <CheckBoxOutlineBlankIcon color="error" />
            Event Per User
          </div>
        </div>
        <EChartsComponent data={filteredData} />
      </div>
    </>
  );
}
