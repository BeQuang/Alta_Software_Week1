import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLogin: boolean;
  component: React.ComponentType<ProfileProps>;
};

const Private = ({ isLogin, component: Component }: PrivateProps) => {
  if (isLogin) {
    return <Component name="Quang" />;
  } else {
    return <Login />;
  }
};

export default Private;
