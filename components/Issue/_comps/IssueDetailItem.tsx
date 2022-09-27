import React, { useEffect, useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Issue } from "../../../types";
type Props = {
  item: Issue;
};

const IssueDetailItem = (props: Props) => {
  return (
    <Box
      sx={{
        borderBottom: `1px solid black`,
        padding: "10px 0",
      }}
    >
      <Typography
        onClick={() => {
          props.item.url && window.open(props.item.html_url, "_blank");
        }}
        sx={{ marginBottom: "10px", fontWeight: 700 }}
      >
        Title : {props.item.title}
      </Typography>
    </Box>
  );
};

export default IssueDetailItem;
