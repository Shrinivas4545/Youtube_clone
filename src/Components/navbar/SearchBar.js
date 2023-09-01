import React from "react";
import { Paper, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { setCategory } from "../../Redux/Category/actionCategory";

const SearchBar = () => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    const searchText = document.getElementById("search").value;
    dispatch(setCategory(searchText));
  }

  const handleKeyDown = (e) => {
    e.key === 'Enter' && onClickHandler()
  }

  return (
    <Paper
      sx={{
        display: "flex",
        borderRadius: 20,
        marginRight: "15px",
        alignItems: "center"
      }}
    >
      <input
        placeholder="Search..."
        onKeyUp={handleKeyDown}
        id="search"
        style={{
          all: "unset",
          borderRadius: 20,
          height: "20px",
          paddingLeft: "15px"
        }}
        
      />
      <Button onClick={onClickHandler}>
        <SearchIcon color="primary" />
      </Button>
    </Paper>
  );
};

export default SearchBar;
