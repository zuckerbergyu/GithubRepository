import * as React from "react";
import { useMemo, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import InfiniteScroll from "../InfiniteScroll";
import favoritList from "../../libs/favoritList";
import IssueItem from "./_comps/IssueItem";

import { useIssueInfiniteList } from "../../apis";

// https://docs.github.com/en/rest/issues/issues#list-repository-issues
const Issue = (): JSX.Element => {
  const list = favoritList.get();

  /**
   * 할일
   * owner-loginId
   * name
   * 
   * 이두개로 
   * 펼치는 이슈르 만들어서 
   * 펼치면 이슈가 스크롤되게 
   * 그런데 데이터를 구하는것은 
디테일 아이템에서 구하는거기때문에 데이터를 따로 합치거나 하지는 ㅇ란하도 될듯하다.
   */

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
