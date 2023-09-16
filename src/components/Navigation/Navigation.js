import React from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { Logo } from "../../assets/index.js";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.css";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = React.useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null);
  };

  const handleSubMenuOpen = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
  };

  const menuItems = [
    {
      label: "Company",
      subItems: [
        { label: "History" },
        { label: "Our Founder" },
        { label: "Management Team" },
        { label: "Vision/Mission/Nothing" },
      ],
    },
    {
      label: "Projects",
      subItems: [
        { label: "Exhibitions" },
        { label: "Melas" },
        { label: "Conferences" },
        { label: "Medical" },
        { label: "Government" },
        { label: "Political" },
        { label: "Miscelleneous" },
      ],
    },
    { label: "Solutions" },
    { label: "Inventory" },
    { label: "Case Studies" },
    { label: "FAQ's" },
    {
      label: "Clients",
      subItems: [
        { label: "Government Sector" },
        { label: "Corporates" },
        { label: "Political" },
        { label: "Spritual/Religious" },
      ],
    },
    { label: "Testimonials" },
    { label: "Downloads" },
    { label: "Contact" },
  ];

  return (
    <div className="navContainer">
      <div className="navLogo">
        <img src={Logo} alt="GKS-Logo" />
      </div>
      <div>
        <Button onMouseEnter={handleOpenMenu}>
          <MenuIcon />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.subItems ? (
                <MenuItem
                  onMouseEnter={handleSubMenuOpen}
                  onClick={handleCloseMenu}
                >
                  {item.label}
                </MenuItem>
              ) : (
                <MenuItem onClick={handleCloseMenu}>{item.label}</MenuItem>
              )}
              {item.subItems && (
                <Menu
                  sx={{ display: "inline-block" }}
                  anchorEl={subMenuAnchorEl}
                  open={Boolean(subMenuAnchorEl)}
                  onClose={handleSubMenuClose}
                  getContentAnchorEl={null}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <MenuItem key={subIndex} onClick={handleSubMenuClose}>
                      <Typography
                        variant="inherit"
                        className="menuDropDownItems"
                      >
                        {subItem.label}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </div>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default Navigation;
