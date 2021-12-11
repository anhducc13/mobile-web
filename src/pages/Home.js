import withBottomBar from "../hoc/withBottomBar";
import history from "../history";
import { Component } from "react";
class Home extends Component {
  render() {
    return <div onClick={() => history.push("/login")}>Login</div>;
  }
}

export default withBottomBar(Home);
