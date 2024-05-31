import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  btnclass?: "primary" | "secondary" | "success";
  handleOnclick: (event: MouseEvent) => void;
}

function Button({ children, btnclass = "primary", handleOnclick }: Props) {
  return (
    <>
      <button
        type="button"
        onClick={(event) => handleOnclick(event)}
        className={`btn btn-${btnclass}`}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
