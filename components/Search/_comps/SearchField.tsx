import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";
import SearchIcon from "../../Icons/SearchIcon";

type Props = {
  placeholder?: string | null;
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};
const SearchField = (props: Props) => {
  return (
    <Stack
      sx={{
        display: "flex",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit();
        }}
      >
        <Box
          sx={{
            background: "darkGray",
            borderRadius: "100px",
            height: "46px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
          }}
        >
          <IconButton sx={{ width: "42px", height: "42px", marginLeft: "8px" }}>
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: "6px", mr: "4", flex: 1, width: "100%" }}
            placeholder={props.placeholder || ""}
            value={props.value}
            onChange={(e) => {
              props.onChange(e.target.value);
            }}
          />
        </Box>
      </form>
    </Stack>
  );
};

export default SearchField;
