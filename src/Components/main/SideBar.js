import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { categories } from "../../utils/Constants";
import { useDispatch } from "react-redux";
import { setCategory } from "../../Redux/Category/actionCategory";

const SideBar = () => {

    const dispatch = useDispatch();

    const categoriesToDisplay = categories;
    const [hoveredButtonIndex, setHoveredButtonIndex] = useState(null);
    const [onClickEvent, setOnClickEvent] = useState("Trending");

    const handleMouseEnter = (index) => {
        setHoveredButtonIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredButtonIndex(null);
    };

    const handleButtonClick = (name) => {
        dispatch(setCategory(name));
        setOnClickEvent(name)
    }

    return (
        <Stack
            pr={1}
            direction={{ xs: "row", sm: "column" }}
            sx={{
                overflow: "auto",
                height: { xs: 'auto', sm: '92vh' },
                gap: "5px",
                borderRight: { sm : '1px solid #3d3d3d'},
                borderBottom : { xs : '1px solid #3d3d3d', sm : 'none'},
                paddingBottom : '10px',
            }}
        >
            {categoriesToDisplay.map((category, index) => (
                <button
                    key={category.name}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleButtonClick(category.name)}
                    style={{
                        border: "none",
                        textTransform: "none",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        opacity: (hoveredButtonIndex === index || onClickEvent === category.name) ? 1 : 0.6,
                        marginLeft: "8px",
                        width: "auto",
                        alignItems: "center",
                        backgroundColor: onClickEvent === category.name ? 'red' : 'black',
                        borderRadius: '10px'
                    }}
                >
                    <span style={{ color: onClickEvent === category.name ? 'white' : 'red', marginRight: "3px" }}>
                        {category.icon}
                    </span>
                    <Typography
                        style={{
                            color: "white",
                            whiteSpace: "nowrap",
                            marginLeft: '5px'
                        }}
                    >
                        {category.name}
                    </Typography>
                </button>
            ))}
        </Stack>
    );
};

export default SideBar;
