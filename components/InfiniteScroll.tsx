import React from "react";
import Box from "@mui/material/Box";
import ProgressDialog from "./ProgressDialog";
import Observer from "./Observer";

type Props = {
  data: any[];
  onEndReached?: () => void;
  renderItem: (item: any) => React.ReactNode;
  hasNextPage?: boolean;
};
const InfiniteScroll = (props: Props) => {
  return (
    <Box sx={{ height: "100%" }}>
      {props.data.map((item) => props.renderItem(item))}
      {props.hasNextPage ? (
        <Observer
          onObserved={() => {
            if (props.onEndReached) props.onEndReached();
          }}
        >
          <Box sx={{ marginTop: "36px" }}>
            <ProgressDialog />
          </Box>
        </Observer>
      ) : null}
    </Box>
  );
};
export default InfiniteScroll;
