import React from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data/people";

export type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const pageSize=5;
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 3,
      MinWidth: 100,
      renderCell:(params: GridRenderCellParams)=><>{params.value}</>
    },
    {
      field: "category",
      headerName: "Category",
      flex: 3,
      MinWidth: 100,
      renderCell:(params: GridRenderCellParams)=><>{params.value}</>
    },
		{
      field: "company",
      headerName: "Company",
      flex: 3,
      MinWidth: 100,
      renderCell:(params: GridRenderCellParams)=><>{params.value}</>
    },
  ];
  return (
    <div style={{'width':` ${ '90vw' }`}}>
      <DataGrid
        disableColumnSelector
        disableRowSelectionOnClick
        initialState={{
          pagination: { paginationModel: { pageSize } },
        }}
        columns={columns}
        rows={People}
      />
    </div>
  );
};

export default Home;
