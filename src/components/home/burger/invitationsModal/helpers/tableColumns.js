import { Button, Avatar } from "@mui/material";
export const columnsInvitation = [
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
    width: 200,
    editable: true,
  },
];

export const columnsOwnInvitations = [
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
    field: "type",
    headerName: "Type",
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
    width: 200,
    editable: true,
  },
];
