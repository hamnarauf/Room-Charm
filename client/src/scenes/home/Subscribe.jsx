import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";
import Alert from "@mui/material/Alert";


const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setshowAlert] = useState(false);


  const handleSubmit = () => {
    console.log("handle submit subs");

    const requestBody = {
      "data": {
        "email": email
      }
    }
    const response = fetch("http://localhost:1337/api/subscribers", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(requestBody),
    });
    setshowAlert(true);
    setEmail("");
  };

  return (
    <Box width="80%" margin="80px auto" textAlign="center" id="subscribe">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Subscribe To Our Newsletter</Typography>
      <Typography>
        and get latest updates about sales, coupons, new articles and fresh collections!
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography sx={{ p: "10px", ":hover": { cursor: "pointer" } }} onClick={handleSubmit}>
          Subscribe
        </Typography>
      </Box>

      <Box
        p="2px 4px"
        m="5px auto"
        width="50%"
          >
        {
          showAlert &&
          <Alert severity="success">
            <strong>Success —{" "} </strong>
            You have successfully subscribed to our newsletter
            <div></div>
          </Alert>
        }
      </Box>
    </Box>
  );
};

export default Subscribe;
