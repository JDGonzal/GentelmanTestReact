import { PersonInterface } from "@/models";
import { removeFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store";
import Delete from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { GridRenderCellParams, DataGrid } from "@mui/x-data-grid";

import { useDispatch, useSelector } from "react-redux";

export type FavoriteTableProps = {};

const FavoriteTable: React.FC<FavoriteTableProps> = () => {

  const pageSize = 5;
  const dispatch = useDispatch();

  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const handleClick = (person: PersonInterface) => {
    dispatch(removeFavorite(person));
  };

  const columns = [
    {
      field: "actions",
      type: "actions",
      sortable: false,
      headerName: "",
      MinWidth: 10,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <IconButton
              color="secondary"
              aria-label="favorites"
              onClick={() => handleClick(params.row)}
            >
              <Delete />
            </IconButton>
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 3,
      MinWidth: 100,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 3,
      MinWidth: 100,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 3,
      MinWidth: 100,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Level",
      flex: 1,
      MinWidth: 50,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  return (
    <div>
      <DataGrid
        disableColumnSelector
        disableRowSelectionOnClick
        initialState={{
          pagination: { paginationModel: { pageSize } },
        }}
        columns={columns}
        rows={stateFavorites}
      />
    </div>
  );
};

export default FavoriteTable;
