import { PersonInterface } from '@/models';
import { addFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export type FavoriteTableProps = {
}

const FavoriteTable: React.FC<FavoriteTableProps> = () => {
	const [selectedPeople, setselectedPeople] = useState<PersonInterface[]>([]);
  const pageSize = 5;
  const dispatch = useDispatch();

  const stateFavorites = useSelector((store:AppStore) => store.favorites);

  const findPerson = (person: PersonInterface) =>
    !!selectedPeople.find((p: { id: string }) => p.id === person.id);
  const filterPerson = (person: PersonInterface) =>
    selectedPeople.filter((p: { id: string }) => p.id !== person.id);

  const handleChange = async (person: PersonInterface) => {
    const fileteredPeople = (await findPerson(person))
      ? filterPerson(person)
      : [...selectedPeople, person];
    console.log(JSON.stringify(fileteredPeople));
    await dispatch(addFavorite(fileteredPeople));

    await setselectedPeople(fileteredPeople);
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
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
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
  ];
	return <div >
		
	<DataGrid
        disableColumnSelector
        disableRowSelectionOnClick
        initialState={{
          pagination: { paginationModel: { pageSize } },
        }}
        columns={columns}
        rows={stateFavorites}
      />
	</div>;
};

export default FavoriteTable;
