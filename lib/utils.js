export const mergedFilteredData = (fetchData, dateRangeValues) => {
  let mergedData = [];

  fetchData.forEach((platformData) => {
    const filteredData = platformData.chartData
      .filter((item) => {
        const itemDate = new Date(item.date);
        const startDate = new Date(dateRangeValues[0]);
        const endDate = new Date(dateRangeValues[1]);

        return itemDate >= startDate && itemDate <= endDate;
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    mergedData = [...mergedData, ...filteredData];
  });

  return mergedData;
};

export const calculateTotalMetrics = (fetchData) => {
  let totalMetrics = {
    activeUsers: 0,
    sessions: 0,
    returnedUsers: 0,
    registeredUsers: 0,
  };

  fetchData.forEach((platformData) => {
    const { metrics } = platformData;

    Object.keys(metrics).forEach((metricKey) => {
      totalMetrics[metricKey] += metrics[metricKey];
    });
  });

  return totalMetrics;
};
