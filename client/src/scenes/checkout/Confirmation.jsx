import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Confirmation = ({id}) => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You have successfully made an Order —{" "} Congrats on Making your Purchase
        <div></div>
        <strong>Order Id: {id} —{" "} Remember this for tracking</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;
