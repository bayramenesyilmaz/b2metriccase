import usersData from "@/lib/users-data";

export async function GET(Request) {
  const url = new URL(Request.url);
  const startDate = new Date(JSON.parse(url.searchParams.get("startDate")));
  const endDate = new Date(JSON.parse(url.searchParams.get("endDate")));

  const filteredUsers = usersData.filter((user) => {
    const userCreateDate = new Date(user.createDate);

    return userCreateDate >= startDate && userCreateDate <= endDate;
  });

  return new Response(JSON.stringify(filteredUsers));
}
