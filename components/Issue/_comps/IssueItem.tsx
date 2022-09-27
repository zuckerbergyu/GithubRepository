import React, { useEffect, useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Issue, Repository } from "../../../types";
import { useIssueInfiniteList } from "../../../apis";
import InfiniteScroll from "../../InfiniteScroll";
import IssueDetailItem from "./IssueDetailItem";

type Props = {
  item: Repository;
};

const IssueItem = (props: Props) => {
  const [isDetailShow, setIsDetailShow] = useState(false);

  const {
    data: issueResult,
    isFetching: isFetchingIssue,
    fetchNextPage: fetchNextPageIssue,
    hasNextPage: hasNextPageIssue,
    refetch: refetchIssue,
  } = useIssueInfiniteList({
    owner: props.item.owner.login,
    repo: props.item.name,
    open_issues_count: props.item.open_issues_count,
    enabled: true,
  });

  const projects = useMemo(() => {
    if (issueResult) {
      const list = issueResult?.pages.reduce((acc, { data }) => {
        return [...acc, ...data];
      }, [] as Issue[]);
      return list;
    }
    return [];
  }, [issueResult]);

  useEffect(() => {}, [projects]);

  return (
    <Box
      sx={{
        padding: "10px 0px",
      }}
    >
      <Box
        sx={{
          padding: "6px",
          borderWidth: 1,
          display: "flex",
          borderColor: "red",
          borderRadius: "8px",
          flexDirection: "row",
          alignItems: "center",
          borderStyle: "solid",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography sx={{ marginBottom: "10px" }}>
            Repository Name : {props.item.name}
          </Typography>
          <Typography sx={{ marginBottom: "10px" }}>
            author : {props.item.owner.login}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            fontWeight: 500,
            fontSize: "16px",
            borderRadius: "8px",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => {
            setIsDetailShow(!isDetailShow);
          }}
        >
          Open List
        </Box>
      </Box>
      {isDetailShow ? (
        <InfiniteScroll
          data={projects}
          renderItem={({ item }) => (
            <IssueDetailItem key={item.id} item={item} />
          )}
          onEndReached={() => {
            fetchNextPageIssue();
          }}
          hasNextPage={!isFetchingIssue && hasNextPageIssue}
        />
      ) : null}
    </Box>
  );
};

export default IssueItem;
