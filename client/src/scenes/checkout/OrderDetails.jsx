import { Box, Typography, Divider } from "@mui/material";
import styled from "@emotion/styled";


const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const OrderDetails = ({ values, cart }) => {
    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.attributes.price;
    }, 0);
    return (
        <Box m="30px 250px">
            {/* CONTACT INFO */}
            <Box>
                <Typography sx={{ m: "15px auto" }} fontSize="18px">
                    Order Details
                </Typography>
                <Box>
                    <FlexBox p="7px 5px 0px">
                        <Box>Email: {values.email}</Box>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <Box>Phone: {values.phoneNumber}</Box>
                    </FlexBox>
                    <FlexBox p="0px 5px">
                        <strong>Billing Address</strong>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <strong>Shiping Address</strong>
                    </FlexBox>
                    <FlexBox p="0px 5px">
                        <Box>Name: {[values.billingAddress.firstName, values.billingAddress.lastName].join(" ")}</Box>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <Box>Name: {[values.shippingAddress.firstName, values.shippingAddress.lastName].join(" ")}</Box>
                    </FlexBox>
                    <FlexBox p="0px 5px">
                        <Box>Country: {values.billingAddress.country}</Box>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <Box>Country: {values.shippingAddress.country}</Box>
                    </FlexBox>
                    <FlexBox p="0px 5px">
                        <Box>City: {values.billingAddress.city}</Box>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <Box>City: {values.shippingAddress.city}</Box>
                    </FlexBox>
                    <FlexBox p="0px 5px">
                        <Box>Street Address1: {values.billingAddress.street1}</Box>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <Box>Street Address1: {values.shippingAddress.street1}</Box>
                    </FlexBox>
                    {values.billingAddress.street1 && <FlexBox p="0px 5px">
                        <Box>Street Address 2: {values.billingAddress.street1}</Box>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <Box>Street Address 2: {values.shippingAddress.street1}</Box>
                    </FlexBox>}
                    <FlexBox p="0px 5px">
                        <Box>State: {values.billingAddress.state}</Box>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <Box>State: {values.shippingAddress.state}</Box>
                    </FlexBox>
                    <FlexBox p="0px 5px 15px">
                        <Box>Zip Code: {values.billingAddress.zipCode}</Box>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <Box>Zip Code: {values.shippingAddress.zipCode}</Box>
                    </FlexBox>
                </Box>


                <Box>
                    {cart.map((item) => (
                        <Box key={`${item.attributes.name}-${item.id}`}>
                            <FlexBox p="15px 0">
                                <Box flex="1 1 20%">
                                    <img
                                        alt={item?.attributes?.name}
                                        width="113px"
                                        height="150px"
                                        src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                                    />
                                </Box>
                                <Box flex="1 1 60%">
                                    <FlexBox mb="5px">
                                        <Typography fontWeight="bold">
                                            {item.attributes.name}
                                        </Typography>

                                    </FlexBox>
                                    <Typography>{item.attributes.shortDescription}</Typography>
                                    <FlexBox m="15px 0">
                                        <Typography fontWeight="bold">
                                            Quantity: {item.count}
                                        </Typography>
                                        <Typography fontWeight="bold">
                                            ${item.attributes.price}
                                        </Typography>
                                    </FlexBox>
                                </Box>
                            </FlexBox>
                            <Divider />

                        </Box>
                    ))}
                    <FlexBox m="20px 0">
                        <Typography fontWeight="bold">SUBTOTAL</Typography>
                        <Typography fontWeight="bold">${totalPrice}</Typography>
                    </FlexBox>
                </Box>
            </Box>
        </Box>

    );
};

export default OrderDetails;
