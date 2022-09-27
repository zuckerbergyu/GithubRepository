import * as React from "react";
import { Box, Typography } from "@mui/material";
import favoritList from "../../libs/favoritList";
import IssueItem from "./_comps/IssueItem";

const Issue = (): JSX.Element => {
  const list = favoritList.get();

  return (
    <Box sx={{}}>
      <Box>
        <Typography
          sx={{ fontWeight: 700, fontSize: "22px", marginBottom: "16px" }}
        >
          Favorite Issue List
        </Typography>
        <Box>
          {list
            ? list.map((item: any) => {
                return <IssueItem item={item} />;
              })
            : null}
        </Box>
      </Box>
    </Box>
  );
};

export default Issue;
