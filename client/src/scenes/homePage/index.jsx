import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

import Navbar from "scenes/navbar";
import ProfileSummary from "scenes/widgets/ProfileSummary";
import CreatePost from "scenes/widgets/CreatePost";
import Posts from "scenes/widgets/Posts";
import Advertising from "components/Advertising";
import FriendList from "components/FriendList";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <ProfileSummary userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <CreatePost picturePath={picturePath} />
          <Posts userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <Advertising />
            <Box m="2rem 0" />
            <FriendList userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
