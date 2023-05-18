import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Room Charm
          </Typography>
          <div>
            We specialize in creating unique and personalized spaces that reflect your style and personality. Our team of talented designers will work closely with you to transform your room into a beautiful and functional space that you can truly call your own. Whether you're looking for a cozy bedroom retreat, a modern living room, or a stylish home office, we have the expertise and creativity to make it happen.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help: (222)333-4444</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Order Now</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            50 north Whatever Blvd, Washington, DC 10501
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: customercare@roomcharm.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
