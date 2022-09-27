import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ProgressDialog = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default ProgressDialog;
