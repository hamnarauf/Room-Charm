import { Box, Divider, IconButton, Typography, InputBase } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
  setIsTrackingOpen,
} from "../../state";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TrackingMenu = () => {
  const dispatch = useDispatch();
  const isTrackingOpen = useSelector((state) => state.cart.isTrackingOpen);
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    cart.forEach((item) => {
      const count = order.products.find((product) => product.id === item.id).count;
      price += count * item.attributes.price;
    });
    setTotalPrice(price);
    console.log(cart)
  }, [cart, order]);

  useEffect(() => {
    // Check if order is not empty
    if (order && order.products && order.products.length > 0) {
      const fetchItems = async () => {
        let updatedCart = [];
        for (const item of order.products) {
          try {
            const response = await fetch(`http://localhost:1337/api/items/${item.id}?populate=image`);
            if (!response.ok) {
              return;
            }
            const data = await response.json();
            updatedCart.push(data.data);
            // Process the fetched data here
            
          } catch (error) {
            return;
          }
        }
        setCart(updatedCart)
      };
      fetchItems();
    }
  }, [order]);

  async function handleSubmit() {
    setOrder([]);
    setCart([]);

    const response = await fetch(`http://localhost:1337/api/orders/${orderId}`);
    if (!response.ok) {
      return
    }
    const data = await response.json();
    setOrder(data.data.attributes)

  };

  function close() {
    dispatch(setIsTrackingOpen({}));
    setOrder([]);
    setCart([]);
    setOrderId("");
  }

  return (
    <Box
      display={isTrackingOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 40%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="25px">
            <Typography variant="h3">Track Your Order</Typography>
            <IconButton onClick={() => close()}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          <Box
            p="2px 4px"
            m="15px auto"
            display="flex"
            alignItems="center"
            width="100%"
            backgroundColor="#F2F2F2"
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter Order ID"
              onChange={(e) => setOrderId(e.target.value)}
              value={orderId}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <Typography sx={{ p: "10px", ":hover": { cursor: "pointer" } }} onClick={handleSubmit}>
              Search
            </Typography>
          </Box>
          {
            cart != "" &&
            <Box>
              <FlexBox p="7px 5px 0px">
                <Box>Email: {order.email}</Box>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Box>Phone: {order.phoneNumber}</Box>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Box>Status: {order.status}</Box>
              </FlexBox>
              <FlexBox p="0px 5px">
                <strong>Billing Address</strong>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <strong>Shiping Address</strong>
              </FlexBox>
              <FlexBox p="0px 5px">
                <Box>Name: {order.userName}</Box>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Box>Name: {order.shippingUserName}</Box>
              </FlexBox>
              <FlexBox p="0px 5px">
                <Box>Country: {order.country}</Box>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Box>Country: {order.shippingCountry}</Box>
              </FlexBox>
              <FlexBox p="0px 5px">
                <Box>City: {order.city}</Box>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Box>City: {order.shippingCity}</Box>
              </FlexBox>
              <FlexBox p="0px 5px">
                <Box>Street Address1: {order.streetAddress}</Box>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Box>Street Address1: {order.shippingStreetAddress}</Box>
              </FlexBox>
              {order.streetAddress2 && <FlexBox p="0px 5px">
                {order.streetAddress2 && <Box>Street Address 2: {order.streetAddress2}</Box>}
                {order.streetAddress2 && <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />}
                {order.shippingStreetAddress2 && <Box>Street Address 2: {order.shippingStreetAddress2}</Box>}
              </FlexBox>}
              <FlexBox p="0px 5px">
                <Box>State: {order.state}</Box>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Box>State: {order.shippingState}</Box>
              </FlexBox>
              <FlexBox p="0px 5px 15px">
                <Box>Zip Code: {order.zipCode}</Box>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Box>Zip Code: {order.shippingZipCode}</Box>
              </FlexBox>
              <Box>
                <Typography variant="h3"><strong>Order Details</strong></Typography>
                {cart.map((item) => (
                  <Box key={`${item.attributes.name}-${item.id}`}>
                    <FlexBox p="15px 0">
                      <Box flex="1 1 20%">
                        <img
                          alt={item?.attributes?.name}
                          width="98px"
                          height="130px"
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
                            Quantity: {order.products.find((product) => product.id === item.id).count}
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
          }
        </Box>
      </Box>
    </Box>
  );
};

export default TrackingMenu;
