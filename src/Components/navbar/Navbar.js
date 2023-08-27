import React from "react";
import { Stack, Button } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Button> 
        <LiveTvIcon sx={{ color: "red", fontSize: 40, marginLeft: '5px' }} />
      </Button>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
