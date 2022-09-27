import * as React from "react";
import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import SearchField from "./_comps/SearchField";
import { useRepositoryInfiniteList } from "../../apis";
import SearchItem from "./_comps/SearchItem";
import InfiniteScroll from "../InfiniteScroll";
import { Repository } from "../../types";

const Search = (): JSX.Element => {
  const [searchInput, setSearchInput] = useState("");

  const {
    data: repositoryResult,
    isFetching: isFetchingRepository,
    fetchNextPage: fetchNextPageRepository,
    hasNextPage: hasNextPageRepository,
    refetch: refetchRepository,
  } = useRepositoryInfiniteList({
    q: searchInput,
    enabled: false,
  });

  const projects = useMemo(() => {
    if (repositoryResult) {
      const list = repositoryResult?.pages.reduce((acc, { data }) => {
        return [...acc, ...data.items];
      }, [] as Repository[]);
      return list;
    }
    return [];
  }, [repositoryResult]);

  return (
    <Box>
      <Typography
        sx={{ fontWeight: 700, fontSize: "22px", marginBottom: "16px" }}
      >
        Home
      </Typography>
      <Box>
        <SearchField
          value={searchInput}
          onChange={setSearchInput}
          placeholder="Search Github Repository"
          onSubmit={() => {
            refetchRepository();
          }}
        />
      </Box>

      <InfiniteScroll
        data={projects}
        renderItem={({ item }) => <SearchItem key={item.id} item={item} />}
        onEndReached={fetchNextPageRepository}
        hasNextPage={!isFetchingRepository && hasNextPageRepository}
      />
    </Box>
  );
};

export default Search;
