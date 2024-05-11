import overviewData from "@/lib/overview-data";

export async function GET(Request) {
  const url = new URL(Request.url);
  const platform = JSON.parse(url.searchParams.get("platform"));

  //Gelen platform dizisini kullanarak verileri filtrele
  const filteredData = platform.map(
    (selectedPlatform) => overviewData.data[selectedPlatform]
  );
  // Filtrelenmiş verileri JSON formatına dönüştürerek dön
  return new Response(JSON.stringify(filteredData));
}
