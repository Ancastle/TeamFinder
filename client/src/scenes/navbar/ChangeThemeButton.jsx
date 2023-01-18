import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

const ChangeThemeButton = ({ handleClick, theme, dark, iconButtonProps }) => {
  return (
    <IconButton onClick={handleClick} {...iconButtonProps}>
      {theme.palette.mode === "dark" ? (
        <DarkMode sx={{ fontSize: "25px" }} />
      ) : (
        <LightMode sx={{ color: dark, fontSize: "25px" }} />
      )}
    </IconButton>
  );
};

export default ChangeThemeButton;
