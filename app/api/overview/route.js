import overviewData from "@/lib/overview-data";

export async function GET(Request) {
  const url = new URL(Request.url);
  const platform = JSON.parse(url.searchParams.get("platform"));

  const filteredData = platform.map(
    (selectedPlatform) => overviewData.data[selectedPlatform]
  );

  return new Response(JSON.stringify(filteredData));
}
