import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import Favorite from '@mui/icons-material/Favorite';
import React from "react";
import CustomDialog, { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { FavoriteTable } from "./FavoriteTable";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {

  useSelector((store:AppStore) => store.favorites);
  
  const handleClick=()=>{
    dialogOpenSubject$.setSubject=true;
  }
  return (
    <div>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gentelman react App Test
          </Typography>
          <IconButton color="secondary" aria-label="favorites" onClick={handleClick}>
            <Favorite/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
