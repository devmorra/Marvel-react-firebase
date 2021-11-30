import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks'; 
import {Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@mui/material'; 
import { HeroForm } from '..';
// import { DroneForm } from '../../components/DroneForm';

// https://mui.com/components/data-grid/#mit-version

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Hero name',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 110,
    editable: true,
  },
  {
    field: 'comics_appeared_in',
    headerName: '# of comic appearances',
    width: 160,  
  },
  {
    field: 'super_power',
    headerName: 'Superpower',
    width: 160,  
  },
  {
    field: 'date_created',
    headerName: 'Date created',
    width: 160,  
  }
];

interface gridData{
  data:{
    id?:string;
    name?:string;
  }
}

export const DataTable =  () => {
  
  let { heroData, getData } = useGetData();
  let [ open, setOpen] = useState(false);
  let [ gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = async () => {
    await serverCalls.delete(`${gridData[0]}`)
    getData()
  }

  console.log(gridData) // a list of id's from checked rows
  console.log(heroData)

    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Heroes</h2>
          <DataGrid 
						rows={heroData}
						columns={columns}
						pageSize={5}
						checkboxSelection
						onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
						{...heroData}
					/>

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="error" onClick={deleteData}>Delete</Button>

          {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update A Drone</DialogTitle>
          <DialogContent>
            <DialogContentText>Drone id: {gridData[0]}</DialogContentText>
              <HeroForm></HeroForm>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
            <Button onClick = {handleClose} color = "primary">Done</Button> 
          </DialogActions>
        </Dialog>
        </div>
      );
}