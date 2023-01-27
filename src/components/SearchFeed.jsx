import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { useParams } from "react-router-dom";
import { fatchFromAPI } from "../utils/fatchFromAPI";
const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideo] = useState([]);
  useEffect(() => {
    fatchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideo(data.items);
    });
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for :{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
