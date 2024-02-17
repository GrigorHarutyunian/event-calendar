import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import "./Table.css";

export const DataGridDemo = ({ columns, rows, title }) => {
  console.log(rows);
  return (
    <Box className="box" sx={{ height: 450, width: "80%" }}>
      <div className="title-invitation">{title}</div>

      <DataGrid
        rows={rows}
        columns={columns}
        rowKey={(row) => row.id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[8, 10]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};
