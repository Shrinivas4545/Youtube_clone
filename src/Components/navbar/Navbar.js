import React from "react";
import { Stack } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      p={{ xs: '5px' }}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: '1px solid #3d3d3d',
        backgroundColor: 'black',
        top: '0px',
        position: 'sticky',
        zIndex: 1000, 

      }}
    >
      <Link to={"/"}>
        <LiveTvIcon sx={{ color: "red", fontSize: 40, marginLeft: '5px', backgroundColor: 'black' }} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
