import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./index";
import { fatchFromAPI } from "../utils/fatchFromAPI";

const ChannelDetails = () => {
  const { id } = useParams();
  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fatchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data.items[0]);
    });
    fatchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideoData(data.items);
      }
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(213,223,222,1) 0%, rgba(48,181,236,1) 28%, rgba(218,0,255,1) 100%)",
            zIndex: "10",
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={ChannelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videoData} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
