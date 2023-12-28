import React from "react";
import { Stack } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../../Redux/Category/actionCategory";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCategory("Trending"))
  }

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
      <Link to={"/"} onClick={handleClick}>
        <LiveTvIcon sx={{ color: "red", fontSize: 40, marginLeft: {xs: "5px", sm: "35px"}, backgroundColor: 'black' }} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
