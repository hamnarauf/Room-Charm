import { Box, Button, Divider, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import {

    setIsNavMenuOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Home, Inbox, Mail, InfoOutlined  } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const isNavMenuOpen = useSelector((state) => state.cart.isNavMenuOpen);

    console.log("insidde nav menu", isNavMenuOpen);

    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.attributes.price;
    }, 0);

    return (
        <Box
            display={isNavMenuOpen ? "block" : "none"}
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
                width="max(400px, 30%)"
                height="100%"
                backgroundColor="white"
            >
                <Box padding="30px" overflow="auto" height="100%">
                    <FlexBox mb="15px">
                        <Typography variant="h3">Nav Menu</Typography>
                        <IconButton onClick={() => dispatch(setIsNavMenuOpen({}))}>
                            <CloseIcon />
                        </IconButton>
                    </FlexBox>

                    <List>
                        <ListItem button component={Link} to="/" onClick={() => dispatch(setIsNavMenuOpen({}))}>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button component={Link} to="/about" onClick={() => dispatch(setIsNavMenuOpen({}))}>
                            <ListItemIcon>
                                <InfoOutlined />
                            </ListItemIcon>
                            <ListItemText primary="About Us" />
                        </ListItem>
                        <ListItem button component={Link} to="/items" onClick={() => dispatch(setIsNavMenuOpen({}))}>
                            <ListItemIcon>
                                <AddShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Online Shop" />
                        </ListItem>
                        <ListItem button component={Link} to="/stores" onClick={() => dispatch(setIsNavMenuOpen({}))}>
                            <ListItemIcon>
                                <ShoppingBagIcon />
                            </ListItemIcon>
                            <ListItemText primary="Our Stores" />
                        </ListItem>
                        <ListItem button component={Link} to="/subscribe" onClick={() => dispatch(setIsNavMenuOpen({}))}>
                            <ListItemIcon>
                                <Mail />
                            </ListItemIcon>
                            <ListItemText primary="Subscribe" />
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default NavMenu;
