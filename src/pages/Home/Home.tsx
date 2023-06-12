import React, { useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data/people";
import { PersonInterface } from "@/models/person-model";
import { Checkbox } from "@mui/material";


export type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const [selectedPeople, setselectedPeople] = useState<PersonInterface[]>([])
  const pageSize=5;

  const findPerson=(person:PersonInterface)=> !!selectedPeople.find(p => p.id === person.id);
  const filterPerson=(person:PersonInterface)=> selectedPeople.filter(p => p.id !== person.id);
  
  const handleChange=(person:PersonInterface)=>{
    setselectedPeople(findPerson(person) ? filterPerson(person): [... selectedPeople,person])
  }
  const columns = [
    {
      field: "actions",
      type: "actions",
      sortable: false,
      headerName: '',
      MinWidth: 10,
      renderCell:(params: GridRenderCellParams)=><>{
        <Checkbox size="small" 
        checked={findPerson(params.row)}
        onChange={()=>handleChange(params.row)}
      />}</>
    },
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
    <div >
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
