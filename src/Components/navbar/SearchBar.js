import React from "react";
import { Paper, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { setCategory, setSearchText } from "../../Redux/Category/actionCategory";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickHandler = () => {
    const searchText = document.getElementById("search").value;
    if (searchText !== "") {
      dispatch(setCategory(searchText));
      dispatch(setSearchText(searchText));
      navigate("/")
    }
  }

  const handleChange_SearchText = (e) => {
    // console.log(e.target.value)
    if (e.target.value === "") {
      dispatch(setCategory("Trending"));
    }

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
        onChange={(e) => handleChange_SearchText(e)}
      />
      <Button onClick={onClickHandler}>
        <SearchIcon color="primary" />
      </Button>
    </Paper>
  );
};

export default SearchBar;
