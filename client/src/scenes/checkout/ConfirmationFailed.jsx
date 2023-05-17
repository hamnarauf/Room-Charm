import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const ConfirmationFailed = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="error">
        <AlertTitle>Failed</AlertTitle>
        There was an error placing your order —{" "}
        <strong>Try Again</strong>
      </Alert>
    </Box>
  );
};

export default ConfirmationFailed;
