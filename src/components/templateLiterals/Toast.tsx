// Position prop can be one of
// "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
// "center-bottom" | "right-center" | "right-top" | "right-bottom"

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

const Toast = ({ position }: ToastProps) => {
  return <div>Toast notification position {position}</div>;
};

export default Toast;
