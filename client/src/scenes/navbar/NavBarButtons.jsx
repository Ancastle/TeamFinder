import { useDispatch } from "react-redux";
import { setMode, setLogout } from "state";
import {
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { Message, Notifications, Help } from "@mui/icons-material";

import ChangeThemeButton from "./ChangeThemeButton";
import FlexBetween from "components/FlexBetween";

const NavBarButtons = ({
  containerProps,
  iconButtonProps,
  fullName,
  theme,
  dark,
  neutralLight,
}) => {
  const dispatch = useDispatch();
  return (
    <FlexBetween gap="2rem" {...containerProps}>
      <ChangeThemeButton
        handleClick={() => dispatch(setMode())}
        theme={theme}
        dark={dark}
        iconButtonProps={iconButtonProps}
      />
      <Message sx={{ fontSize: "25px" }} />
      <Notifications sx={{ fontSize: "25px" }} />
      <Help sx={{ fontSize: "25px" }} />
      <FormControl variant="standard" value={fullName}>
        <Select
          value={fullName}
          sx={{
            backgroundColor: neutralLight,
            width: "150px",
            borderRadius: "0.25rem",
            p: "0.25rem 1rem",
            "&.MuiSvgIcon-root": {
              pr: "0.25rem",
              width: "3rem",
            },
            "&.MuiSelect-select:focus": {
              backGroundColor: neutralLight,
            },
          }}
          input={<InputBase />}
        >
          <MenuItem value={fullName}>
            <Typography>{fullName}</Typography>
          </MenuItem>
          <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
        </Select>
      </FormControl>
    </FlexBetween>
  );
};

export default NavBarButtons;
