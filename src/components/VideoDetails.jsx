import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./index";
import { fatchFromAPI } from "../utils/fatchFromAPI";

const VideoDetails = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [videoDetail, setVideoDetail] = useState(null);
  useEffect(() => {
    fatchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data?.items[0]);
    });
    fatchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);
  if (!videoDetail?.snippet) {
    return "Loading...";
  }
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "stick", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" fontWeight="bold">
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center ">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      <Box
        px={2}
        py={{ md: 1, sx: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        <Videos videos={videos} direction='column'/>
      </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
