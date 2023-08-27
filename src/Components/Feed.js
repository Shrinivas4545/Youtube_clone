import React from "react";
import { Stack } from "@mui/material";
import SideBar from "./main/SideBar";
import Content from "./main/content/Content";

const Feed = () => {
  return (
    <Stack mt={2}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: 'flex-start'
      }}>
      <Stack >
        <SideBar />
      </Stack>
      <Stack>
        <Content />
      </Stack>
    </Stack>
  );
};

export default Feed;
