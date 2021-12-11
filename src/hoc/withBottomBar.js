import React from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import styled from "@emotion/styled";

const withBottomBar = (Component) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        value: 0,
      };
    }
    render() {
      const { value } = this.state;
      return (
        <Wrapper>
          <Component {...this.props} />
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                this.setValue({ value: newValue });
              }}
            >
              <BottomNavigationAction label="Home" />
              <BottomNavigationAction label="Categories" />
              <BottomNavigationAction label="Account" />
            </BottomNavigation>
          </Paper>
        </Wrapper>
      );
    }
  };
};

const Wrapper = styled.div`
  padding-bottom: 56px;
`;

export default withBottomBar;
