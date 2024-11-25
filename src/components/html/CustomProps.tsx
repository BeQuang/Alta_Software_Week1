import Greet from "../Greet";

const CustomProps = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>;
};

export default CustomProps;
