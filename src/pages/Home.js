import withBottomBar from "../hoc/withBottomBar";
import history from "../history";

const Home = () => {
  return <div onClick={() => history.push("/login")}>Login</div>;
};

export default withBottomBar(Home);
