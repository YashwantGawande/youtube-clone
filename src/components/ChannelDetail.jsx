import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFormApi } from "../utils/FetchFromApi";
import { videos, ChannelCard } from "./";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);

  const { id } = useParams;

  useEffect(() => {
    fetchFormApi('channels?part="snippets&id=${id}').then((data) =>
      setChannelDetail(data?.items[0])
    );
  }, [id]);

  return <Box></Box>;
};

export default ChannelDetail;
