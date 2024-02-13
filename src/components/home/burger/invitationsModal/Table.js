import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Button, Avatar } from "@mui/material";

import { useDispatch } from "react-redux";

const columns = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => (
      <Avatar alt={params.row.firstName} src={params.row.avatar} />
    ),
  },
  {
    field: "title",
    headerName: "Title",
    width: 200,
    editable: true,
  },
  {
    field: "mail",
    headerName: "Email",
    width: 200,
    editable: true,
  },
  {
    field: "day",
    headerName: "Day",
    width: 200,
    editable: true,
  },
  {
    field: "time",
    headerName: "Time",
    width: 200,
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
];

export const DataGridDemo = ({ rows }) => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <div className="title-invitation">Invitations</div>

      <DataGrid
        className="data-grid"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        sx={{
          ".MuiDataGrid-row:hover": {
            backgroundColor: "#add8e6",
            transform: "scale(1.00)",
          },
        }}
      />
    </Box>
  );
};
