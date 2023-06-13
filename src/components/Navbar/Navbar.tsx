import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import CustomDialog from '../CustomDialog/CustomDialog';
import { FavoriteTable } from "./FavoriteTable";

export interface NavbarInterface {};

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <div>
      <CustomDialog>
        <FavoriteTable/>
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gentelman react App Test
          </Typography>
          <Button variant="contained">Open Favorites</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
