export const mergedFilteredData = (fetchData, dateRangeValues) => {
  // Tüm platformlardan gelen verileri birleştirmek için boş bir dizi oluşturalım
  let mergedData = [];

  // Her bir platformun verilerini tarih aralığına göre filtreleyip birleştirelim
  fetchData.forEach((platformData) => {
    const filteredData = platformData.chartData
      .filter((item) => {
        const itemDate = new Date(item.date);
        const startDate = new Date(dateRangeValues[0]);
        const endDate = new Date(dateRangeValues[1]);

        // Tarihin belirtilen aralıkta olup olmadığını kontrol et
        return itemDate >= startDate && itemDate <= endDate;
      })
      // En yeni tarihten en eskiye doğru sırala
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    // Filtrelenmiş verileri birleştirelim
    mergedData = [...mergedData, ...filteredData];
  });

  return mergedData;
};

// Tüm platformlardan gelen metrikleri toplamak için bir fonksiyon oluştur
export const calculateTotalMetrics = (fetchData) => {
  // Tüm metriklerin toplamlarını saklamak için boş bir obje oluştur
  let totalMetrics = {
    activeUsers: 0,
    sessions: 0,
    returnedUsers: 0,
    registeredUsers: 0,
  };

  // Her bir platformun metriklerini topla
  fetchData.forEach((platformData) => {
    const { metrics } = platformData;

    // Her bir metriği toplam değere ekle
    Object.keys(metrics).forEach((metricKey) => {
      totalMetrics[metricKey] += metrics[metricKey];
    });
  });

  return totalMetrics;
};
