import usersData from "@/lib/users-data";

export async function GET(Request) {
  const url = new URL(Request.url);
  const startDate = new Date(JSON.parse(url.searchParams.get("startDate")));
  const endDate = new Date(JSON.parse(url.searchParams.get("endDate")));
  // Filtrelenmiş kullanıcı verilerini tutacak bir dizi oluşturalım
  const filteredUsers = usersData.filter((user) => {
    const userCreateDate = new Date(user.createDate);
    // const startDate = new Date(dateRangeValues[0]);
    // const endDate = new Date(dateRangeValues[1]);

    // Tarihin belirtilen aralıkta olup olmadığını kontrol et
    return userCreateDate >= startDate && userCreateDate <= endDate;
  });
  // Filtrelenmiş verileri JSON formatına dönüştürerek dön
  return new Response(JSON.stringify(filteredUsers));
}
