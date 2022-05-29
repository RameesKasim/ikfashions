import { React, useState, useRef, useEffect } from "react";
import {
  Box,
  Menu,
  MenuItem,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar,
  Container,
  Toolbar,
  Button,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "react-responsive";
import { ArrowBack, ArrowRight, KeyboardArrowDown } from "@mui/icons-material";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [onMenu, setOnMenu] = useState(false);
  const [menuWIdith, setMenuWIdith] = useState(0);
  const [drawerWIdith, setDrawerWIdith] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [SecondDrawerOpen, setSecondDrawerOpen] = useState(false);
  const classes = useStyles();
  const ref = useRef(null);
  const drawerRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  useEffect(() => {
    isMobile ? setMenuWIdith(0) : setMenuWIdith(ref.current.offsetWidth);
  }, [anchorEl]);

  let scrollToBottom = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  let openMenu = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  let closeMenu = (event) => {
    event.preventDefault();
    setTimeout(() => {
      onMenu ? setOpen(true) : setOpen(false);
    }, 3000);
  };

  let OnMenuItem = (event) => {
    event.preventDefault();
    setOnMenu(true);
  };

  let leaveMenuItem = (event) => {
    event.preventDefault();
    setOnMenu(false);
    setOpen(false);
  };

  return (
    <AppBar position="sticky" color="primary" className={classes.navBar}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          {isMobile ? (
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(event) => {
                  event.preventDefault();
                  setDrawerOpen(true);
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                onOpen={() => setDrawerOpen(true)}
              >
                <Box ref={drawerRef}>
                  <List className={classes.menuList}>
                    <ListItem>
                      <Link to="/">
                        <ListItemButton
                          onClick={() => {
                            setDrawerOpen(false);
                          }}
                        >
                          <ListItemText primary=" Home" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/gallery">
                        <ListItemButton
                          onClick={() => {
                            setDrawerOpen(false);
                          }}
                        >
                          <ListItemText primary=" Gallery" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        onClick={(e) => {
                          e.preventDefault();
                          setDrawerWIdith(drawerRef.current.offsetWidth);
                          setSecondDrawerOpen(true);
                        }}
                      >
                        <ListItemText primary=" Custom Apparel" />
                        <ArrowRight fontSize="small" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        onClick={() => {
                          setDrawerOpen(false);
                        }}
                      >
                        <ListItemText
                          primary=" Contact Us"
                          onClick={scrollToBottom}
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </SwipeableDrawer>
              <SwipeableDrawer
                anchor="left"
                open={SecondDrawerOpen}
                onClose={() => setSecondDrawerOpen(false)}
                onOpen={() => setSecondDrawerOpen(true)}
              >
                <Box sx={{ width: drawerWIdith }}>
                  <List className={classes.menuList}>
                    <ListItem alignItems="center">
                      <ListItemButton
                        onClick={() => {
                          setSecondDrawerOpen(false);
                        }}
                      >
                        <ArrowBack fontSize="small" />
                        <ListItemText primary=" back" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem alignItems="center">
                      <Link to="/apparels/suits">
                        <ListItemButton
                          onClick={() => {
                            setSecondDrawerOpen(false);
                            setDrawerOpen(false);
                          }}
                        >
                          <ListItemText primary=" Suits" />
                        </ListItemButton>
                      </Link>
                    </ListItem>{" "}
                    <ListItem alignItems="center">
                      <Link to="/apparels/shirts">
                        <ListItemButton
                          onClick={() => {
                            setSecondDrawerOpen(false);
                            setDrawerOpen(false);
                          }}
                        >
                          <ListItemText primary=" Shirts" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <ListItem alignItems="center">
                      <Link to="/apparels/blazers">
                        <ListItemButton
                          onClick={() => {
                            setSecondDrawerOpen(false);
                            setDrawerOpen(false);
                          }}
                        >
                          <ListItemText primary=" Blazers" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <ListItem alignItems="center">
                      <Link to="/apparels/pants">
                        <ListItemButton
                          onClick={() => {
                            setSecondDrawerOpen(false);
                            setDrawerOpen(false);
                          }}
                        >
                          <ListItemText primary=" Pants" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <ListItem alignItems="center">
                      <Link to="/apparels/bowties">
                        <ListItemButton
                          onClick={() => {
                            setSecondDrawerOpen(false);
                            setDrawerOpen(false);
                          }}
                        >
                          <ListItemText primary=" Bow Ties" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <ListItem alignItems="center">
                      <Link to="/apparels/vests">
                        <ListItemButton
                          onClick={() => {
                            setSecondDrawerOpen(false);
                            setDrawerOpen(false);
                          }}
                        >
                          <ListItemText primary="Vests" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  </List>
                </Box>
              </SwipeableDrawer>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <Link to="/">
                <Button sx={{ m: 2, color: "white", display: "block" }}>
                  Home
                </Button>
              </Link>
              <Link to="/gallery">
                <Button sx={{ m: 2, color: "white", display: "block" }}>
                  Gallery
                </Button>
              </Link>
              <Button
                onClick={closeMenu}
                onMouseEnter={(event) => {
                  setAnchorEl(event.currentTarget);
                  openMenu(event);
                }}
                onMouseLeave={closeMenu}
                sx={{ m: 2, color: "white", display: "flex" }}
                ref={ref}
                endIcon={<KeyboardArrowDown fontSize="small" />}
              >
                Custom Apparel
              </Button>
              <Button
                sx={{ m: 2, color: "white", display: "block" }}
                onClick={scrollToBottom}
              >
                Contact Us
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => {
                  setOpen(false);
                  setAnchorEl(null);
                }}
                className={classes.menuWrapper}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                  onMouseEnter: OnMenuItem,
                  onMouseLeave: leaveMenuItem,
                }}
              >
                <Link to="/apparels/suits">
                  <MenuItem
                    sx={{ width: menuWIdith }}
                    className={classes.menuItem}
                  >
                    Suits
                  </MenuItem>
                </Link>
                <Link to="/apparels/shirts">
                  <MenuItem className={classes.menuItem}>Shirts</MenuItem>
                </Link>
                <Link to="/apparels/blazers">
                  <MenuItem className={classes.menuItem}>Blazers</MenuItem>
                </Link>
                <Link to="/apparels/pants">
                  <MenuItem className={classes.menuItem}>Pants</MenuItem>
                </Link>
                <Link to="/apparels/bowties">
                  <MenuItem className={classes.menuItem}>Bow Ties</MenuItem>
                </Link>
                <Link to="/apparels/vests">
                  <MenuItem className={classes.menuItem}>Vests</MenuItem>
                </Link>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const useStyles = makeStyles({
  navBar: {
    "& a ": {
      textDecoration: "none",
    },
  },
  menuWrapper: {
    cursor: "pointer",
    "& a ": {
      textDecoration: "none",
    },
  },
  menuItem: {
    fontSize: ".875rem !important",
    color: "rgba(0, 0, 0, 0.6) !important",
    textTransform: "capitalize !important",
    "& span": {
      fontSize: ".875rem !important",
    },
  },
  menuList: {
    "& li": {
      height: "30px !important",
      padding: "0 16px!important",
      "& a": {
        textDecoration: "none",
      },
      "& span": {
        padding: "0 !important",
        textAlign: "left",
      },
    },
  },
});

export default NavBar;
