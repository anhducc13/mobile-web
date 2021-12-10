import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import styled from "@emotion/styled";

const withBottomBar =
  (Component) =>
  ({ ...props }) => {
    const [value, setValue] = useState(0);
    return (
      <Wrapper>
        <Component {...props} />
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Home" />
            <BottomNavigationAction label="Categories" />
            <BottomNavigationAction label="Account" />
          </BottomNavigation>
        </Paper>
      </Wrapper>
    );
  };

const Wrapper = styled.div`
  padding-bottom: 56px;
`;

export default withBottomBar;
