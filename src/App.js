import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar.js";
import Feed from "./Components/Feed.js";
import VideoDetail from "./Components/VideoDetail.js";
import ChannelDetail from "./Components/ChannelDetail.js";
import SearchFeed from "./Components/SearchFeed.js";
import { Provider } from "react-redux";
import store from "./Redux/store.js";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      ssm: 600,
      sm: 764,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Box sx={{ backgroundColor: "#000", color: "white", margin: '-8px' }}>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Feed />} />
              <Route path="/video/:id" exact element={<VideoDetail />} />
              <Route path="/channel/:id" exact element={<ChannelDetail />} />
              <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
            </Routes>
          </Box>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}
