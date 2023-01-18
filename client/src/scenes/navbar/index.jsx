import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Search, Menu, Close } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import FlexBetween from "components/FlexBetween";

import NavBarButtons from "./NavBarButtons";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

  const isNonMobileScreens = useMediaQuery("(min-width: 1000px");
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const navigate = useNavigate();
  // const user = useSelector((state) => state.user);
  const user = { firstName: "Janaya", lastName: "Talkasha" };

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              conlor: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          FindTeam
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search...">
              <IconButton>
                <Search />
              </IconButton>
            </InputBase>
          </FlexBetween>
        )}
      </FlexBetween>
      {/*Desktop Nav*/}
      {isNonMobileScreens ? (
        <NavBarButtons
          fullName={fullName}
          theme={theme}
          dark={dark}
          neutralLight={neutralLight}
        />
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled((prevState) => !prevState)}
        >
          <Menu />
        </IconButton>
      )}
      {/*Mobile Nav */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* Close Icon */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled((prevState) => !prevState)}
            >
              <Close />
            </IconButton>
          </Box>
          {/* Menu Items */}
          <NavBarButtons
            neutralLight={neutralLight}
            fullName={fullName}
            theme={theme}
            dark={dark}
            containerProps={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "3rem",
            }}
            iconButtonProps={{
              sx: { fontSize: "25px" },
            }}
          />
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
