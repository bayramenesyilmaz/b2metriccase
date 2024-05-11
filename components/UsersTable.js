import React from "react";
import useSWR from "swr";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Chip } from "@mui/material";

const columns = [
  {
    field: "username",
    headerName: "User Detail",
    width: 300,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt={params.row.username}
          src={params.row.imageUrl}
          style={{ marginRight: 8 }}
        />
        {params.row.username}
      </div>
    ),
  },
  {
    field: "customerName",
    headerName: "Customer Name",
    width: 200,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        {params.row.username}
      </div>
    ),
  },
  {
    field: "createDate",
    headerName: "Create Date",
    width: 200,
    renderCell: (params) => new Date(params.row.createDate).toDateString(),
  },
  {
    field: "segment",
    headerName: "Segment",
    width: 130,
    renderCell: (params) => (
      <Chip
        label={params.row.segment === "new" ? "NEW" : "OLD"}
        color={params.row.segment === "new" ? "success" : "default"}
      />
    ),
  },
];

export default function UsersTable({ dateRangeValues }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: usersData,
    error,
    isLoading,
  } = useSWR(
    dateRangeValues
      ? `http://localhost:3000/api/users?startDate=${JSON.stringify(
          dateRangeValues[0]
        )}&endDate=${JSON.stringify(dateRangeValues[1])}`
      : null,
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error {error.message} </div>;
  if (!usersData) return <div>User not found</div>;
  return (
    <div className="h-max w-full ">
      <DataGrid
        rows={usersData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
        className="bg-white py-4"
      />
    </div>
  );
}
