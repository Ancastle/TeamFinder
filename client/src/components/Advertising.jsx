import { useTheme, Typography } from "@mui/material";
import FlexBetween from "./FlexBetween";
import WidgetWrapper from "./WidgetWrapper";

const Advertising = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/Screenshot 2023-01-23 204821.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>SebaVieraBoost</Typography>
        <Typography color={medium}>1 - 200 x 1 day</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Boost your gameplay right now for THE BEST PRICE
      </Typography>
    </WidgetWrapper>
  );
};

export default Advertising;
