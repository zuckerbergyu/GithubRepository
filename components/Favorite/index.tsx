import * as React from "react";
import { useMemo, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import InfiniteScroll from "../InfiniteScroll";
import favoritList from "../../libs/favoritList";
import SearchItem from "../Search/_comps/SearchItem";

const Favorite = (): JSX.Element => {
  const list = favoritList.get();

  return (
    <Box sx={{}}>
      <Box>
        <Typography
          sx={{ fontWeight: 700, fontSize: "22px", marginBottom: "16px" }}
        >
          Favorite List
        </Typography>
        <Box>
          {list
            ? list.map((item: any) => {
                return <SearchItem item={item} />;
              })
            : null}
        </Box>
      </Box>
    </Box>
  );
};

export default Favorite;
